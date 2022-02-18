/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  const result = [-1, -1];

  // 找左边界
  while (left <= right) {
    const mid = left + Math.trunc((right - left) >> 1);
    if (nums[mid] < target) {
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      // 因为找到结果的时候是缩小 right, 即使 left 和 right 相等也因为 right < left 而终止判断。
      right = mid - 1;
    }
  }

  if (left >= nums.length || nums[left] !== target) {
    result[0] = -1;
  } else {
    result[0] = left;
  }

  // 找右边界
  left = 0;
  right = nums.length - 1;

  while (left <= right) {
    const mid = left + Math.trunc((right - left) >> 1);
    if (nums[mid] < target) {
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      // 因为找到结果的时候是缩小 right, 即使 left 和 right 相等也因为 right < left 而终止判断。
      left = mid + 1;
    }
  }

  if (right < 0 || nums[right] !== target) {
    result[1] = -1;
  } else {
    result[1] = right;
  }

  return result;
};
// @lc code=end

