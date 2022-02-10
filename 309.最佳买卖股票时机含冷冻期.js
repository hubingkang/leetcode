/*
 * @lc app=leetcode.cn id=309 lang=javascript
 *
 * [309] 最佳买卖股票时机含冷冻期
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  const len = prices.length;
  const dp = new Array(len);
  for (let i = 0; i < len; i++) {
    dp[i] = [];
  }

  for (let i = 0; i < len; i++) {
    if (i === 0) {
      // base case 1
      dp[i][0] = 0;
      dp[i][1] = -prices[i];
      continue;
    }

    // 冷冻期 base case 就有 2种
    if (i === 1) {
      // base case 2
      dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1] + prices[i]);
      dp[i][1] = Math.max(dp[i-1][1], -prices[i]);
      continue;
    }

    dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1] + prices[i]);
    dp[i][1] = Math.max(dp[i-1][1], dp[i-2][0] - prices[i]); // 冷冻期取的2天前的
  }

  return dp[len - 1][0]
};
// @lc code=end

