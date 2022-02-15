/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  nums.sort((a, b) => a - b);
  const result = [];
  if (nums.length < 4) return [];

  for (let i = 0, len = nums.length; i < len; i++) {
    // if (i === 0 && nums[i] > target) return []; // 不能添加这一行，target 可能为负数
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    for (let j = i + 1, len = nums.length; j < len; j++) {
      // 注意这里的 j 起点最小是 1，需要大于 i + 1
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;

      let L = j + 1;
      let R = len - 1;
      while (L < R) {
        if (nums[i] + nums[j] + nums[L] + nums[R] === target) {
          result.push([nums[i], nums[j], nums[L], nums[R]]);
          while(L < R && nums[L] === nums[L + 1]) {
            L++;
          }
          while(L < R && nums[R] === nums[R - 1]) {
            R--;
          }
          L++;
          R--;
        } else if (nums[i] + nums[j] + nums[L] + nums[R] > target) {
          R--;
        } else {
          L++;
        }
      }
    }
  }
  return result;
};
// @lc code=end

