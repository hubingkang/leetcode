/*
 * @lc app=leetcode.cn id=416 lang=javascript
 *
 * [416] 分割等和子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
  let sum = 0;
  for (var i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  
  // 和为奇数时，不可能划分成两个和相等的集合
  if (sum % 2 === 1) return false;
  const target = sum / 2;

  const len = nums.length;
  const dp = new Array(len + 1);
  for (let i = 0; i <= len; i++) {
    dp[i] = new Array(target + 1).fill(0);
  }

  for (let i = 1; i <= nums.length; i++) {
    for (let j = 1; j <= target; j++) {
      // 装不下，容量小于物品
      if (j < nums[i - 1]) {
        dp[i][j] = dp[i - 1][j]; // 继续保持上一个
      } else {
        dp[i][j] = Math.max(
          dp[i - 1][j], // 沿用上一个
          dp[i - 1][j - nums[i - 1]] + nums[i - 1]
        )
      }

      if (dp[i][j] === target) return true;
    }
  }

  return false;
};
// @lc code=end

