/*
 * @lc app=leetcode.cn id=36 lang=javascript
 *
 * [36] 有效的数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    // 分别存放行、列、块
    let row = new Array();
    let column = new Array();
    let block = new Array();

    for (let i = 0; i < 9; i++) {
        row[i] = new Array(9);
        column[i] = new Array(9);
        block[i] = new Array(9);
    }

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] != ".") {
                // 因为数字都是大于0 的。所以减1 就是对应下标的值
                let num = board[i][j] - 1;
                // 找到块的下标
                let blockIndex = ~~(i / 3) * 3 + ~~(j / 3)
                if (row[i][num] || column[j][num] || block[blockIndex][num]) {
                    return false;
                } else {
                    row[i][num] = true;
                    column[j][num] = true;
                    block[blockIndex][num] = true;
                }
            }
        }
    }

    return true;
};
// @lc code=end

