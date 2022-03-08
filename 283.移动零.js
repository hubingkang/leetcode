/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let slow = 0;
    let fast = 0;

    const len = nums.length;
    while (fast < len) {
        if (nums[fast] !== 0) {
            nums[slow] = nums[fast];
            slow++;
        };
        fast++;
    }
    for (let i = slow; i < len; i++) {
        nums[i] = 0;
    };
    return nums;
};
// @lc code=end
