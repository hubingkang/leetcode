/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  const len = prices.length;

  let dp_i_0 = 0;
  let dp_i_1 = Number.MIN_SAFE_INTEGER

  for (let i = 0; i < len; i++) {
    // 第 i天没有 可能 i - 1 天没有继续保持，或者 i-1 天有 然后卖了
    dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i]);
    // 第 i天有 可能 i - 1 天有继续保持，或者之前都没有 然后今天买了
    dp_i_1 = Math.max(dp_i_1, -prices[i]);
  }

  return dp_i_0;
  
  // 采用 dp 方程的解法
  // const len = prices.length;
  // const dp = new Array(len).fill();
  // for (let i = 0; i < len; i++) {
  //   dp[i] = [];
  // }

  // // dp[i][j] i表示第几天，j表示 0: 未持有, 1: 持有
  // for (let i = 0; i < len; i++) {
  //   if (i === 0) {
  //     dp[i][0] = 0;
  //     dp[i][1] = -prices[i];
  //     continue;
  //   }
  //   // 第 i天没有 可能 i - 1 天没有继续保持，或者 i-1 天有 然后卖了
  //   dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1] + prices[i]);
    
  //   // 第 i天有 可能 i - 1 天有继续保持，或者 i-1 天没有 然后买了
  //   dp[i][1] = Math.max(dp[i-1][1], -prices[i]);
  // }

  // return dp[len-1][0];
};
// @lc code=end

