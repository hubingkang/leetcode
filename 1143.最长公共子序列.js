/*
 * @lc app=leetcode.cn id=1143 lang=javascript
 *
 * [1143] 最长公共子序列
 */

// @lc code=start
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
    if (!text1 || !text2) return 0;
    let m = text1.length,
        n = text2.length;

    // 初始化一个二维数组
    let dp = [];
    // 默认初始化一个数组，多定义一行和列，初始化为0
    for (let i = 0; i < m + 1; i++) {
        dp[i] = new Array(n + 1).fill(0);
    }

    // 从1开始，就是从默认第一个字母开始
    for (let i = 1; i < m + 1; i++) {
        for (let j = 1; j < n + 1; j++) {
            // 如果两个数的末尾是相同的，那么当前总数就是去掉末尾的数 + 1
            if (text1[i - 1] === text2[j - 1]) {
                dp[i][j] = 1 + dp[i - 1][j - 1];
            } else {
                // 否则去掉其中一个末尾进行对比，然后取最大值
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
            }
        }
    }

    return dp[m][n];
};
// @lc code=end

