/*
 * @lc app=leetcode.cn id=312 lang=javascript
 *
 * [312] 戳气球
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function(nums) {
  // // 回溯的思路
  // let res = 0;
  // const backtrack = (nums, score) => {
  //   if (nums.length === 0) {
  //     res = Math.max(res, score);
  //     return;
  //   }
  //   for (let i = 0; i < nums.length; i++) {
  //     const num = nums[i];
  //     nums.splice(i, 1)
  //     const point = (nums[i - 1] || 1) * num * (nums[i] || 1);
  //     backtrack(nums, score + point);
  //     nums.splice(i, 0, num);
  //   }
  // }

  // backtrack(nums, 0)
  // return res;

  // 动态规划
  const points = [1, ...nums, 1];

  const len = nums.length;
  const dp = new Array(len + 2);
  for (let i = 0; i < len + 2; i++) {
    dp[i] = new Array(len + 2).fill(0);
  }

  for (let i = len; i >= 0; i--) {
    for (let j = i + 1; j < len + 2; j++) {
      for (let k = i + 1; k < j; k++) {
        dp[i][j] = Math.max(
          dp[i][j],
          dp[i][k] + dp[k][j] + points[i] * points[j] * points[k]
        );
      }
    } 
  }

  return dp[0][len + 1]
};
// @lc code=end

