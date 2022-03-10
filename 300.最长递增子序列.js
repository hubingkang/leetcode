/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  // 因为 size 大于 1, 即至少长度为 1
  const dp = new Array(nums.length + 1).fill(1);

  for (let i = 0; i < nums.length; i++) {
    // 每次遍历的值和前面的比较
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  return Math.max(...dp);
};
// @lc code=end

