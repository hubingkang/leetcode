/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const result = [];
  const track = [];

  const backtrack = (nums, track) => {
    if (track.length === nums.length) {
      result.push([...track]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (track.includes(nums[i])) continue;
      track.push(nums[i]);
      backtrack(nums, track);
      track.pop();
    }
  }

  backtrack(nums, track);
  return result;
};
// @lc code=end

