/*
 * @lc app=leetcode.cn id=72 lang=javascript
 *
 * [72] 编辑距离
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  // const i = word1.length - 1;
  // const j = word2.length - 1;

  // const dp = (i, j) => {
  //   if (i < 0) return j + 1; // 表示 i 为空 到 j 一起需要 j + 1 步（因为下标为0开始）
  //   if (j < 0) return i + 1;

  //   if (word1[i] === word2[j]) {
  //     return dp(i - 1, j - 1);
  //   }

  //   // 添加、删除、替换
  //   return Math.min(dp(i, j - 1) + 1, dp(i - 1, j) + 1, dp(i - 1, j - 1 ) + 1)
  // }

  // return dp(i, j);

  // 自底向上 利用 DP table 会消除重复计算的
  const m = word1.length;
  const n = word2.length;
  // DP table
  const dp = [];
  for (let i = 0; i <= m; i++) {
    dp[i] = [];
  }

  // base case
  for (let i = 0; i <= m; i++) {
    dp[i][0] = i;
  }

  // base case
  for (let i = 0; i <= n; i++) {
    dp[0][i] = i;
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      // 因为 0 为 basecase 所以匹配的时候需要减 1
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(dp[i][j - 1], dp[i - 1][j], dp[i - 1][j - 1]) + 1;
      }
    }
  }

  return dp[m][n];
};
// @lc code=end