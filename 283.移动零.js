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
    // // j是最后一个零元素的位置
    // let j = 0;
    // for (let i = 0; i < nums.length; i++) {
    //     if (nums[i] != 0) {
    //         nums[j] = nums[i];
    //         if (i != j) {
    //             nums[i] = 0;
    //         }
    //         j++;
    //     }
    // }

    // let j = 0;
    // for (let i = 0; i < nums.length; i++) {
    //     if (nums[i] != 0) {
    //         [nums[j], nums[i]] = [nums[i], nums[j]];
    //         j++
    //     }
    // }
    let j = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != 0) {
            nums[j] = nums[i];
            if (i != j) {
                nums[i] = 0;
            }
            j++;
        }        
    }
};
// @lc code=end
