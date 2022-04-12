/*
 * @lc app=leetcode.cn id=806 lang=javascript
 *
 * [806] 写字符串需要的行数
 */

// @lc code=start
/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
var numberOfLines = function(widths, s) {
  let row = 1;
  let len = 0;
  for (let i = 0; i < s.length; i++) {
    const letter = s[i].charCodeAt() - 97;
    if (len + widths[letter] > 100) {
      row++;
      len = widths[letter];
    } else {
      len += widths[letter];
    }
  };
  return [row, len];
};
// @lc code=end

