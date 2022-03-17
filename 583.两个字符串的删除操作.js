/*
 * @lc app=leetcode.cn id=583 lang=javascript
 *
 * [583] 两个字符串的删除操作
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  const m = word1.length;
  const n = word2.length;

  // 动态规划
  const lcs = (word1, word2) => {
    const m = word1.length;
    const n = word2.length;
    
    const memo = new Array(m + 1);
    for (let i = 0; i < m + 1; i++) {
      memo[i] = new Array(n + 1).fill(-1); // 设置一个不可能到达的数字
    }

    // dp(s1, i, s2, j)计算s1[i..]和s2[j..]的最长公共子序列长度。
    const dp = (s1, i, s2, j) => {
      if (i >= m || j >= n) return 0;
      if (memo[i][j] !== - 1) return memo[i][j];

      if (s1[i] === s2[j]) {
        memo[i][j] = 1 + dp(s1, i + 1, s2, j + 1);
      } else {
        memo[i][j] = Math.max(dp(s1, i, s2, j + 1), dp(s1, i + 1, s2, j));
      }
      return memo[i][j];
    };

    return dp(word1, 0, word2, 0);
  }

  const result = lcs(word1, word2);
  return m - result + n - result;
};
// @lc code=end

