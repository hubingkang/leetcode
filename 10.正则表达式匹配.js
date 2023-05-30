/*
 * @lc app=leetcode.cn id=10 lang=javascript
 *
 * [10] 正则表达式匹配
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
 var isMatch = function(s, p) {
  const m = s.length;
  const n = p.length;
  const memo = new Array(m);
  for(let i = 0; i < m; i++) {
    memo[i] = new Array(n);
  }

  const dp = (s, i, p, j) => {
    if (j === n) return i === m;

    if (i === m) {
      if ((n - j) % 2 === 1) return false;
      for (; j < n; j+=2) {
        if (p[j + 1] !== '*') return false;
      }
      return true;
    }

    if(memo[i][j] !== undefined) {
      return memo[i][j];
    }

    if (s[i] === p[j] || p[j] === '.') {
      if (j + 1 < n && p[j + 1] === '*') {
        memo[i][j] = dp(s, i, p, j + 2) || dp(s, i + 1, p, j);
      } else {
        memo[i][j] = dp(s, i + 1, p, j + 1);
      }
    } else {
      if (j + 1 < n && p[j + 1] === '*') {
        memo[i][j] = dp(s, i, p, j + 2);
      } else {
        memo[i][j] = false;
      }
    }

    return memo[i][j];
  }

  return dp(s, 0, p, 0);
};
// @lc code=end

