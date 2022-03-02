/*
 * @lc app=leetcode.cn id=560 lang=javascript
 *
 * [560] 和为 K 的子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
  const len = nums.length;
  // map：前缀和 -> 该前缀和出现的次数
  const preSum = new Map();
  // base case
  preSum.set(0, 1);

  let res = 0;
  let sum0_i = 0;
  for (let i = 0; i < len; i++) {
    sum0_i += nums[i];
    const sum0_j = sum0_i - k;

     // 如果前面有这个前缀和，则直接更新答案
    if (preSum.has(sum0_j)) {
      res += preSum.get(sum0_j);
    }
    // 把前缀和 nums[0..i] 加入并记录出现次数
    preSum.set(sum0_i, (preSum.get(sum0_i) || 0) + 1);
  }

  return res;
};
// @lc code=end

