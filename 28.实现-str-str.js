/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if (needle === '') return 0;
  const getNexts = (needle) => {
    const next = new Array(needle.length);
    next[0] = -1;
    let k = -1;

    for (let i = 1; i < needle.length; i++) {
      while (k !== -1 && needle[k + 1] !== needle[i]) {
        k = next[k];
      }
      if (needle[k + 1] === needle[i]) {
        k++;
      }
      next[i] = k;
    }
    return next;
  }

  const kmp = (haystack, needle) => {
    const next = getNexts(needle);
    let j = 0;

    for (let i = 0; i < haystack.length; i++) {
      while (j > 0 && needle[j] !== haystack[i]) {
        j = next[j - 1] + 1;
      }

      if (needle[j] === haystack[i]) {
        if (j === needle.length - 1) {
          return i - j; // 因为取的
        }
        j++;
      }
    }
    return -1;
  }

  return kmp(haystack, needle);
};
// @lc code=end

