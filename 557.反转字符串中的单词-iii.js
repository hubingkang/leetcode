/*
 * @lc app=leetcode.cn id=557 lang=javascript
 *
 * [557] 反转字符串中的单词 III
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  const len = s.length;
  const result = [];

  let i = 0;
  while (i < len) {
    let start = i;

    while (i < len && s.charAt(i) !== ' ') {
      i++;
    }

    for (let j = i - 1; j >= start; j--) {
      result.push(s[j]);
    }

    while (i < len && s.charAt(i) === ' ') {
      result.push(' ');
      i++
    }
  }

  return result.join('')
};
// @lc code=end

