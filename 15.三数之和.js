/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  const result = [];
  if (nums.length < 3) return [];

  for (let i = 0, len = nums.length; i < len; i++) {
    if (nums[i] > 0) return result;

    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let L = i + 1;
    let R = len - 1;

    while (L < R) {
      if (nums[i] + nums[L] + nums[R] === 0) {
        result.push([nums[i], nums[L], nums[R]])
        while (L < R && nums[L] === nums[L + 1]) {
          L++;
        }

        while(L < R && nums[R] === nums[R - 1]) {
          R--;
        }

        L++;
        R--;
      } else if (nums[i] + nums[L] + nums[R] > 0) {
        R--;
      } else {
        L++;
      }
    }
  }
  return result;
};
// @lc code=end
