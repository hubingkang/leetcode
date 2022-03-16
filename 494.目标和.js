/*
 * @lc app=leetcode.cn id=494 lang=javascript
 *
 * [494] 目标和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
  // 方法一 回溯
  // let result = 0;
  // const backtrack = (nums, i, current) => {
  //   if (i === nums.length) {
  //     if (current === 0) result++;
  //     return;
  //   }

  //   current -= nums[i];
  //   backtrack(nums, i + 1, current)
  //   current += nums[i];

  //   current += nums[i];
  //   backtrack(nums, i + 1, current)
  //   current -= nums[i];
  // }

  // backtrack(nums, 0, target);

  // return result;

  // 方法二  动态规划
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  };

  const subsets = (nums, sum) => {
    const dp = [];
    for (let i = 0; i <= nums.length; i++) {
      dp[i] = new Array(sum + 1).fill(0);
    };

    // base case
    dp[0][0] = 1;

    for (let i = 1; i <= nums.length; i++) {
      for (let j = 0; j <= sum; j++) {
        if (j >= nums[i - 1]) {
          // 两种选择的结果之和
          dp[i][j] = dp[i - 1][j] + dp[i - 1][j - nums[i - 1]];
        } else {
          // 背包空间不足
          dp[i][j] = dp[i - 1][j]
        }
      }
    }

    return dp[nums.length][sum]
  };
  
  // 不在范围内的跳出
  if (Math.abs(target) > sum || (target + sum) % 2 === 1) return 0;

  return subsets(nums, (target + sum) / 2);
};
// @lc code=end

