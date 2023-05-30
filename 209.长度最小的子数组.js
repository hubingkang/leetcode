/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
  let res = Number.MAX_SAFE_INTEGER;
  let left = 0;
  let right = 0;
  const len = nums.length;
  let sum = 0;

  for (;right < len; right++) {
    sum += nums[right];
    while(sum >= target) {
      res = Math.min(right - left + 1, res);
      sum -= nums[left]
      left++
    }
  }

  return res === Number.MAX_SAFE_INTEGER ? 0 : res;
};
// @lc code=end

