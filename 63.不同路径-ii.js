/*
 * @lc app=leetcode.cn id=63 lang=javascript
 *
 * [63] 不同路径 II
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
    /**
     * 动态规划
     */
    // if (obstacleGrid[0][0] === 1) return 0;
    // const m = obstacleGrid[0].length;
    // const n = obstacleGrid.length;

    // obstacleGrid[0][0] = 1;

    // // 遍历首行 如果遇到1 设置为0， 否则赋值为前面一个数的值
    // for (let i = 1; i < m; i++) {
    //     if (obstacleGrid[0][i] === 1) {
    //         obstacleGrid[0][i] = 0;
    //     } else {
    //         obstacleGrid[0][i] = obstacleGrid[0][i - 1];
    //     }
    // }
    // // 遍历首列 如果遇到1 设置为0， 否则赋值为前面一个数的值
    // for (let i = 1; i < n; i++) {
    //     if (obstacleGrid[i][0] === 1) {
    //         obstacleGrid[i][0] = 0;
    //     } else {
    //         obstacleGrid[i][0] = obstacleGrid[i-1][0];
    //     }
    // }


    // // 遍历行
    // for (let i = 1; i < n; i++) {
    //     // 遍历列
    //     for (let j = 1; j < m; j++) {
    //         if (obstacleGrid[i][j] === 1) {
    //             obstacleGrid[i][j] = 0;
    //         } else {
    //             obstacleGrid[i][j] = obstacleGrid[i - 1][j] + obstacleGrid[i][j - 1]
    //         }
    //     }
    // }
    // return obstacleGrid[n-1][m-1];

    /**
     * 方法二
     */
    if (obstacleGrid[0][0] === 1) return 0;

    const width = obstacleGrid[0].length;
    const dp = new Array(width).fill(0);
    dp[0] = 1;

    for (let i = 0; i < obstacleGrid.length; i++) {
        for (let j = 0; j < width; j++) {
            if (obstacleGrid[i][j] === 1) {
                dp[j] = 0;
            } else if (j > 0) {
                dp[j] += dp[j - 1];
            }
        }
    }
    return dp[width - 1];
};
// @lc code=end

