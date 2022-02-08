/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const hash = new Map();
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    const complement = target - nums[i];
    if (hash.has(complement)) {
      return [hash.get(complement), i];
    }
    hash.set(nums[i], i);
  }
  return [];
};
// @lc code=end
