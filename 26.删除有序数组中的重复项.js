/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (nums.length <= 1) return nums;
  let slow = 0;
  let fast = 1;
  const len = nums.length;

  while (fast < len) {
    if (nums[slow] !== nums[fast]) {
      slow++;
      nums[slow] = nums[fast];
    }
    fast++;
  }
  // 数组长度为索引 + 1
  return slow + 1;
};
// @lc code=end

