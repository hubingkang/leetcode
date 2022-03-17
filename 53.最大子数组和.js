/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let res = nums[0];
  let dp_0 = nums[0];
  
  for (let i = 1; i < nums.length; i++) {
    dp_0 = Math.max(nums[i], dp_0 + nums[i]);
    res = Math.max(res, dp_0);
  }
  return res;  
};
// @lc code=end

