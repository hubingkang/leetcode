/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
    const result = [];
    const board = [];
    for (let i = 0; i < n; i++) {
        board.push(".".repeat(n))
    }


    const backstack = (board, row) => {
        if (row === board.length) {
            result.push([...board]);
            return;
        }

        for (let col = 0; col < board.length; col++) {
            // 如果有冲突则进行下一个位置
            if (isValid(board, row, col)) continue;

            // 做选择
            board[row] = board[row].slice(0, col) + "Q" + board[row].slice(col + 1);

            // 进行下一步决策
            backstack(board, row + 1);
            // 撤销选择
            board[row] = ".".repeat(n);
        }
    }

    // 校验冲突， 返回 true 表示有冲突。
    const isValid = (board, row, col) => {
        const len = board.length;
        // 检查列是否有皇后冲突
        for (let i = 0; i < n; i++) {
            if (board[i][col] == "Q") return true;
        }

        // 检查左是否有皇后冲突
        for (let i = row - 1, j = col - 1; i >= 0, j >= 0; i--, j--) {
            if (i < 0) continue;
            if (board[i][j] == "Q") return true;
        }

        // 检查右是否有皇后冲突
        for (let i = row - 1, j = col + 1; i >= 0, j < n; i--, j++) {
            if (i < 0) continue;
            if (board[i][j] == "Q") return true;
        }

        return false;
    }

    backstack(board, 0);

    return result;
};
// @lc code=end

