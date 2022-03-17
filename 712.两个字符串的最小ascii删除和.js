/*
 * @lc app=leetcode.cn id=712 lang=javascript
 *
 * [712] 两个字符串的最小ASCII删除和
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var minimumDeleteSum = function(s1, s2) {
  const m = s1.length;
  const n = s2.length;

  const memo = new Array(m + 1);
  for (let i = 0; i < m + 1; i++) {
    memo[i] = new Array(n + 1).fill(-1);  
  };

  const dp = (s1, i, s2, j) => {
    let res = 0;
    if (i === m) {
      for (; j < n; j++) {
        res += s2.charCodeAt(j);
      }
      return res;
    }
    if (j === n) {
      for (; i < m; i++) {
        res += s1.charCodeAt(i);
      }
      return res;
    }

    if (memo[i][j] !== -1) return memo[i][j];

    if (s1[i] === s2[j]) {
      memo[i][j] = dp(s1, i + 1, s2, j + 1);
    } else {
      memo[i][j] = Math.min(
        s1.charCodeAt(i) + dp(s1, i + 1, s2, j),
        s2.charCodeAt(j) + dp(s1, i, s2, j + 1),
      )
    }

    return memo[i][j]
  }

  return dp(s1, 0, s2, 0);
};
// @lc code=end

