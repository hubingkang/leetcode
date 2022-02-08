/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    /**
     * 方法1
     */
    // let arr = [];
    // for (let i = 0; i < n; i++) {
    //     arr.push(new Array(m))
    // };

    // for (let i = 0; i < m; i++) arr[0][i] = 1;
    // for (let i = 1; i < n; i++) arr[i][0] = 1;

    // for (let i = 1; i < n; i++) {
    //     for (let j = 1; j < m; j++) {
    //         arr[i][j] = arr[i - 1][j] + arr[i][j - 1];
    //     }
    // }

    // return arr[n-1][m-1];

    /**
     * 方法2 动态规划，从后往前
     */
    let arr = new Array(m).fill(1);

    for (let j = n - 2; j >= 0; j--) {
        for (let i = m - 1; i >= 0; i--) {
            arr[i] = arr[i] + (arr[i + 1] || 0);
        }
    }

    return arr[0];
};
// @lc code=end

