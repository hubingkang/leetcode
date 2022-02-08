/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let dp = [...nums];

    for (let i = 1; i < dp.length; i++) {
        // 当前最大值，为前面一个数和零比较，加上当前的值
        dp[i] = Math.max(dp[i - 1], 0) + dp[i];
    }

    dp.sort((a, b) => b - a);
    return dp[0];
};
// @lc code=end

