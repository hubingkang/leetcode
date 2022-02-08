/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    /**
     * 贪心算法1, 从后往前
     */
    // if (!nums) return false;

    // let currentIndex = nums.length - 1;
    // for(let i = nums.length - 1; i >= 0; i--) {
    //     // 从后面不断更新能到达的前面的距离
    //     if (nums[i] + i >= currentIndex) {
    //         currentIndex = i;
    //     }
    // }
    // return currentIndex == 0;

    /**
     * 贪心算法2 从前往后
     */
    let n = nums.length;
    let step = 0;
    for (let i = 0; i < n; i++) {
        if (i <= step) {
            // 不断更新最大距离
            step = Math.max(step, i + nums[i]);
            if (step >= n - 1) {
                return true;
            }
        }
    }
    return false;
};
// @lc code=end

