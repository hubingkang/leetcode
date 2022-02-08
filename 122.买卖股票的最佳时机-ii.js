/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    /**
     * 贪心算法
     */
    let result = 0;
    for (let i = 0; i < prices.length - 1; i++) {
        if (prices[i + 1] > prices[i]) {
            result += prices[i + 1] - prices[i]
        }
    }
    return result;
};
// @lc code=end

