/*
 * @lc app=leetcode.cn id=438 lang=javascript
 *
 * [438] 找到字符串中所有字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
  const window = {};
  const need = {};

  let left = 0, right = 0;
  let valid = 0;
  const result = [];

  for (let i = 0; i < p.length; i++) {
    const alpha = p[i];
    need[alpha] = (need[alpha] || 0) + 1;
  }

  while(right <= s.length) {
    const alpha = s[right];
    right++;
    if (need[alpha]) {
      window[alpha] = (window[alpha] || 0) + 1;
      if (window[alpha] <= need[alpha]) {
        valid++;
      }
    }
    while(right - left >= p.length){
      if (valid === p.length) {
        result.push(left);
      }

      const alpha = s[left];
      left++;
      if (need[alpha]) {
        if (window[alpha] <= need[alpha]) {
          valid--;
        }
        window[alpha]--;
      }
    }
  }
  return result;
};
// @lc code=end
