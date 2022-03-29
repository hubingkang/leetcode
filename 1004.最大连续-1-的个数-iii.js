/*
 * @lc app=leetcode.cn id=1004 lang=javascript
 *
 * [1004] 最大连续1的个数 III
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
  // 双指针
  const maxConsecutiveChar = (nums, k, value) => {
    const len = nums.length;
    let res = 0;
    let left = 0;
    let right = 0;
    while (right < len) {
      if (nums[right] !== value) k--;
      while (k < 0) {
        if (nums[left] !== value) k++;
        left++;
      }
      res = Math.max(res, right - left + 1);
      right++;
    }
    return res;
  };

  return maxConsecutiveChar(nums, k, 1);
};
// @lc code=end

