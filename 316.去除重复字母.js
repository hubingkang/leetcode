/*
 * @lc app=leetcode.cn id=316 lang=javascript
 *
 * [316] 去除重复字母
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
  const stack = [];
  const charCodeList = [];
  for (let str of s) {
    const code = str.charCodeAt();
    charCodeList[code] = (charCodeList[code] || 0) + 1;
  }

  for (let str of s) {
    const code = str.charCodeAt();
    
    charCodeList[code]--
    if (stack.includes(code)) continue;

    while (stack.length && stack[stack.length - 1] > code) {
      const alpha = stack[stack.length - 1]
      if (!charCodeList[alpha]) break;
      stack.pop();
    }
    stack.push(code);
  }

  return stack.map(i => String.fromCharCode(i)).join("");
};
// @lc code=end

