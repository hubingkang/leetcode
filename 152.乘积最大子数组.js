/*
 * @lc app=leetcode.cn id=152 lang=javascript
 *
 * [152] 乘积最大子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    let min = max = res = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < 0) {
            [min, max] = [max, min];
        }

        max = Math.max(max * nums[i], nums[i]);
        min = Math.min(min * nums[i], nums[i]);
        res = Math.max(res, max);
    }

    return res;
};
// @lc code=end

