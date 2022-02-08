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
  let len = nums.length;
  if (len < 3) {
    return [];
  }
  let result = [];

  for (let i = 0; i < len - 2; i++) {
    // 排序后，如果第一个数大于零了，那么后面相加不可能等于0
    if (nums[i] > 0) {
      return result;
    }

    // 前面一个数和后面一个数相同就跳过
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let L = i + 1;
    let R = len - 1;

    while (L < R) {
      if (nums[i] + nums[L] + nums[R] === 0) {
        result.push([nums[i], nums[L], nums[R]]);

        // 如果L有连续几个相同的，直接取到最后一个
        while (L < R && nums[L] === nums[L + 1]) {
          L++;
        }

        // 如果R有连续几个相同的，直接取到最后一个
        while (L < R && nums[R] === nums[R - 1]) {
          R--;
        }

        // 将L变大，R减小，看能否还为0
        L++;
        R--;
      } else if (nums[i] + nums[L] + nums[R] > 0) {
        R = R - 1;
      } else {
        L = L + 1;
      }
    }
  }

  return result;
};
// @lc code=end
