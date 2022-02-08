/*
 * @lc app=leetcode.cn id=37 lang=javascript
 *
 * [37] 解数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
    /**
     * 方法1 优先选择
     */
    if (board == null) return;

    let row = [],   // 行剩余可用数字
        col = [],   // 列剩余可用数字
        block = []; // 块剩余可用数字

    // 将数字全部初始化值
    for (let i = 0; i < 9; i++) {
        row[i] = (new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]));
        col[i] = (new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]));
        block[i] = (new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]));
    }

    // 找出需要填数的位置
    let empty = [];

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] != ".") {
                let val = Number(board[i][j]);
                // 如果存在数字，在数字所在的行、列、块中删除 这个数字
                row[i].delete(val);
                col[j].delete(val);
                block[~~(i / 3) * 3 + ~~(j / 3)].delete(val);
            } else {
                // 得到所有为空的坐标
                empty.push([i, j]);
            }
        }
    }

    function backtrack(index) {
        // 全部已经访问
        if (index == empty.length) return true;
        const [i, j] = empty[index];
        // 表示当前块是第几个块
        const b = ~~(i / 3) * 3 + ~~(j / 3);

        // 取当前位置交集。
        let intersection = [...row[i]].filter(e => {
            return [...col[j]].includes(e) && [...block[b]].includes(e)
        });

        // 如果不存在交集，表示当前没有数字可填。退出
        if (!intersection.length) return false;

        for (let m of intersection) {
            // 在剩余可填数字中删除
            row[i].delete(m);
            col[j].delete(m);
            block[b].delete(m);
            board[i][j] = m.toString();

            // 寻找下一个未填入项
            if (backtrack(index + 1)) return true;

            // 表示之前填入失败。恢复删除的项
            row[i].add(m);
            col[j].add(m);
            block[b].add(m);
        }

        return false;
    }

    backtrack(0);

    return board;

    /**
     * 方法2
     */

    // if (board == null) return;

    // function backtrack(board, row, col) {
    //     // 如果到行尾重新起一行查找
    //     if (col == 9) return backtrack(board, row + 1, 0);

    //     // 执行第九行 表示算完成了。查找成功
    //     if (row == 9) return true;

    //     if (board[row][col] != ".") {
    //         return backtrack(board, row, col + 1);
    //     }

    //     for (let i = 1; i <= 9; i++) {
    //         // 判断当前是否合法
    //         if (!isValid(board, row, col, i)) continue;

    //         board[row][col] = i.toString();

    //         // 不停的往下试探，每一层返回 true。表示当前数字是可填的
    //         if (backtrack(board, row, col + 1)) {
    //             return true;
    //         };

    //         // 撤销本次选择，并列进行下一次选择的试探
    //         board[row][col] = ".";
    //     }
    //     // 这个位置把1-9都试过了，都无法继续下去，说明上一次的选择失败，需要回溯
    //     return false;
    // }

    // /**
    //  * row / 3 * 3 确定是在哪 一个三行里（row < 3 则在第一个三行、3 < row < 6 在第二个三行...）
    //  * col / 3 可以确定是在前三列、中三列、还是后三列。
    //  * 下面 i 循环取具体坐标。i / 3 整数部分就是块的行，余数部分就是块的列.
    //  */
    // function isValid(board, row, col, number) {
    //     for (let i = 0; i < 9; i++) {
    //         if (
    //             board[i][col] == number ||
    //             board[row][i] == number ||
    //             board[~~(row / 3) * 3 + ~~(i / 3)][~~(col / 3) * 3 + i % 3] == number
    //         ) {
    //             return false;
    //         }
    //     }
    //     return true;
    // }

    // backtrack(board, 0, 0);

    // return board;
};
// @lc code=end

