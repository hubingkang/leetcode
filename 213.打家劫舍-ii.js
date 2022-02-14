/*
 * @lc app=leetcode.cn id=213 lang=javascript
 *
 * [213] 打家劫舍 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  // 存在 3 种情况，即 1. 前后都不抢 2. 前抢，后不抢 3. 后抢前不抢。 
  // 第 2、3 种情况肯定比第一中的钱多，即比较 2、3 即可

  let len = nums.length;
  if (len === 1) return nums[0];

  function robRange(nums, start, end) {
    let dp_i_1 = 0, dp_i_2 = 0;
    let dp_i = 0;
    for (let i = end; i >= start; i--) {
      dp_i = Math.max(dp_i_1, nums[i] + dp_i_2);
      dp_i_2 = dp_i_1;
      dp_i_1 = dp_i;
    }
    return dp_i;
  }

  return Math.max(robRange(nums, 0, len - 2), robRange(nums, 1, len - 1))
};
// @lc code=end

