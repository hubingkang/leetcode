/*
 * @lc app=leetcode.cn id=188 lang=javascript
 *
 * [188] 买卖股票的最佳时机 IV
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {
  const len = prices.length;

  // 一次买、一次卖、如果 k 超过总数的一半，则可以认定 k 是不限制次数的。
  if (k > len / 2) {
    function maxProfitInfinity(prices) {
      const len = prices.length;
      let dp_i_0 = 0;
      let dp_i_1 = Number.MIN_SAFE_INTEGER; // 关键，保证后面购入都比当前的数字大
      for (let i = 0; i < len; i++) {
        const temp = dp_i_0;
        dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i])
        dp_i_1 = Math.max(dp_i_1, temp - prices[i])
      }

      return dp_i_0;
    }
    return maxProfitInfinity(prices)
  }

  const dp = new Array(len).fill();
  for (let i = 0; i < len; i++) {
    dp[i] = [];
    for (let j = 0; j <= k; j++) {
      dp[i][j] = [0, 0];
    }
  }
  for (let i = 0; i < len; i++) {
    for (let j = 1; j <= k; j++) {
      // 处理 base case
       if (i === 0) {
        dp[i][j][0] = 0;
        dp[i][j][1] = -prices[i];
        continue;
      }

      dp[i][j][0] = Math.max(dp[i-1][j][0], dp[i-1][j][1] + prices[i]);
      dp[i][j][1] = Math.max(dp[i-1][j][1], dp[i-1][j-1][0] - prices[i]);
    }
  }

  return dp[len - 1][k][0]
};
// @lc code=end

