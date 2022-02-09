/*
 * @lc app=leetcode.cn id=567 lang=javascript
 *
 * [567] 字符串的排列
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
  const window = {};
  const need = {};

  let left = 0, right = 0;
  let valid  = 0;

  for (let i = 0; i <  s1.length; i++) {
    const alpha = s1[i];
    need[alpha] = (need[alpha] || 0) + 1;
  }

  while(right < s2.length) {
    const alpha = s2[right];
    right++;

    if (need[alpha]) {
      window[alpha] = (window[alpha] || 0) + 1;
      // 如果窗口中的字母少于目标的字母
      if (window[alpha] <= need[alpha]) {
        valid++
      }
    }

    // 因为是匹配不是子串，所以长度是一样的
    while(right - left >= s1.length) {
      // 找到了目标
      if (valid === s1.length) {
        return true;
      }
      const alpha = s2[left];
      left++;
      // 进行数据更新
      if (need[alpha]) {
        if (window[alpha] <= need[alpha]) {
          valid--
        }
        window[alpha]--;
      }
    }

  }
  return false;
};
// @lc code=end

