/*
 * @lc app=leetcode.cn id=693 lang=javascript
 *
 * [693] 交替位二进制数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
let current = n % 2;
  n = n >> 1;
  while (n > 0) {
    if (current === n % 2) return false;
    current = n % 2;
    n = n >> 1;
  }
  return true;
};
// @lc code=end