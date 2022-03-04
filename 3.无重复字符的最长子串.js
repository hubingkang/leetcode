/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  // 双指针解法
  // let start = 0;
  // let maxLen = 0;
  // const len = s.length;

  // const map = new Map();

  // for (let end = 0; end < len; end++) {
  //   let alpha = s[end];
  //   if (map.has(alpha)) {
  //     // 取 start 较大的。
  //     start = Math.max(start, map.get(alpha) + 1)
  //   }

  //   maxLen = Math.max(maxLen, end - start + 1);
  //   map.set(alpha, end)
  // }

  // return maxLen;

  // 滑动窗口
  let res = 0;
  const window = {};
  let left = 0;
  let right = 0;

  while (right < s.length) {
    const char = s[right];
    window[char] = (window[char] || 0) + 1;
    right++
    while (window[char] > 1){
      const b = s[left];
      window[b]--;
      left++;
    }

    res = Math.max(res, right - left);
  }
  return res;
};
// var lengthOfLongestSubstring = function(s) {
//   let str = '';
//   const len = s.length;

//   let i = 0;
//   let maxLength = 0;
//   while (i < len) {
//     const index = str.indexOf(s[i])
//     if (index > -1) {
//       maxLength = Math.max(maxLength, str.length);
//       str = str.slice(index + 1, str.length) + s[i];
//     } else {
//       str += s[i];
//     }
//     i++
//   }

//   return Math.max(maxLength, str.length);;
// };
// @lc code=end

