/*
 * @lc app=leetcode.cn id=714 lang=javascript
 *
 * [714] 买卖股票的最佳时机含手续费
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
  const len = prices.length;
  const dp = new Array(len);
  for (let i = 0; i < len; i++) {
    dp[i] = [];
  }

  for (let i = 0; i < len; i++) {
    if (i === 0) {
      dp[i][0] = 0;
      dp[i][1] = -prices[i] - fee;
      continue;
    }

    dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1] + prices[i]);
    dp[i][1] = Math.max(dp[i-1][1], dp[i-1][0] - prices[i] - fee);
  }

  return dp[len - 1][0]
};
// @lc code=end

