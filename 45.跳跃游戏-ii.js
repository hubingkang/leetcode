/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  // 方法 1 动态规划
  // const len = nums.length;
  // const memo = new Array(len).fill(len);

  // const dp = (nums, i) => {
  //   // 表示到达最后一个位置了
  //   if (i >= len - 1) return 0;

  //   if (memo[i] !== len) return memo[i];

  //   for (let j = 1; j <= nums[i]; j++) {
  //     const subProblem = dp(nums, i + j);
  //     memo[i] = Math.min(memo[i], subProblem + 1);
  //   }
  //   return memo[i];
  // }

  // return dp(nums, 0);

  // 方法 2 贪心算法
  const len = nums.length;
  let end = 0;
  let farthest = 0;
  let jumps = 0;

  for (let i = 0; i < len - 1; i++) {
    farthest = Math.max(farthest, i + nums[i]);
    if (end === i) {
      jumps++;
      end = farthest;
    }
  }

  // 因为题目给定肯定是可以跳到最后一个位置
  return jumps;
};
// @lc code=end

