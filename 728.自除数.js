/*
 * @lc app=leetcode.cn id=728 lang=javascript
 *
 * [728] 自除数
 */

// @lc code=start
/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
  const result = [];

  const computed = (num) => {
    temp = num;
    while (temp > 0) {
      const figure = temp % 10;
      if (figure === 0 || num % figure !== 0) return false;
      temp = Math.trunc(temp / 10);
    };
    return true;
  }

  for (let num = left; num <= right; num++) {
    if (computed(num)) {
      result.push(num)
    }
  };
  return result;
};
// @lc code=end

