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
  const memo = new Array(s.length);
  for (let i = 0; i < memo.length; i++) {
    memo[i] = [];
  }

  const dp = (s, i, p, j) => {
    const m = s.length;
    const n = p.length;
    // base case
    if (j === n) return i === m;

    // 表示字符匹配到最后
    if (i === m) {
      // 正则未匹配完，则需要余下的正则需要匹配空字符串，即 x*x*... 的形式出现
      if ((n - j) % 2 === 1) return false;
      for (;j + 1 < n; j += 2) {
        if (p[j + 1] !== '*') return false;
      }
      return true;
    }

    if (memo[i][j] !== undefined) return memo[i][j];

    let res = false;
    if (s[i] === p[j] || p[j] === '.') {
      // 有通配符
      if (j + 1 < n && p[j + 1] === '*') {
        // 返回匹配一次 || 一次不匹配
        res = dp(s, i + 1, p, j) || dp(s, i, p, j + 2);
      } else {
        res = dp(s, i + 1, p, j + 1); // 各移动一次
      }
    } else {
      // 有通配符
      if (j + 1 < n && p[j + 1] === '*') {
        // 返回匹配一次 || 一次不匹配
        res = dp(s, i, p, j + 2);
      } else {
        res = false;
      }
    }

    memo[i][j] = res;
    return res;
  }

  return dp(s, 0, p, 0);
};
// @lc code=end

