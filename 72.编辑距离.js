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
  const m = word1.length
  const n = word2.length
  const memo = [];
  for (let i = 0; i < m; i++) {
    memo[i] = new Array(n).fill(-1)
  }

  const dp = (s1, i, s2, j) => {
    if (i === -1) return j + 1;
    if (j === -1) return i + 1;

    if (memo[i][j] !== -1) return memo[i][j];

    if (s1[i] === s2[j]) {
      memo[i][j] = dp(s1, i - 1, s2, j - 1)
    } else {
      memo[i][j] = Math.min(
        dp(s1, i - 1, s2, j - 1),
        dp(s1, i - 1, s2, j),
        dp(s1, i, s2, j - 1)
      ) + 1
    }

    return memo[i][j]
  }

  return dp(word1, m - 1, word2, n - 1);
};
// @lc code=end