/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  let hashMap = new Map();

  const len = s.length;
  for (let i = 0; i < len; i++) {
      const val = hashMap.get(s[i])
    if (val) {
        hashMap.set(s[i], val + 1)
    } else {
        hashMap.set(s[i], 1)
    }
  }
  
  for (let i = 0; i < len; i++) {
      const val = hashMap.get(s[i])
    if (val === 1) {
        return i;
    }
  }
  
  return -1;
};
// @lc code=end

