/*
 * @lc app=leetcode.cn id=389 lang=javascript
 *
 * [389] 找不同
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
 var findTheDifference = function(s, t) {
  let as = 0, at = 0;
  for (let i = 0; i < s.length; i++) {
      as += s[i].charCodeAt();
  }
  for (let i = 0; i < t.length; i++) {
      at += t[i].charCodeAt();
  }
  return String.fromCharCode(at - as);
};
// @lc code=end

