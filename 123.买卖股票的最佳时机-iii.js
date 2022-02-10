/*
 * @lc app=leetcode.cn id=123 lang=javascript
 *
 * [123] 买卖股票的最佳时机 III
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  /**
   * 思路：
   * 原始的状态转移方程，没有可化简的地方
   * dp[i][k][0] = max(dp[i-1][k][0], dp[i-1][k][1] + prices[i])
   * dp[i][k][1] = max(dp[i-1][k][1], dp[i-1][k-1][0] - prices[i])
   */
  const maxK = 2;
  const len = prices.length;
  const dp = new Array(len).fill();
  for(let i = 0; i < len; i++){
    dp[i] = [];
    for(let k = 0; k < maxK + 1; k++){
      // 这里设置默认为 0, 否则后续计算为 undefined
      dp[i][k] = [0, 0];
    }
  }

  for (let i = 0; i < len; i++){
    for (let k = 1; k <= maxK; k++) {
      // 处理 base case
      if (i === 0) {
        dp[i][k][0] = 0;
        dp[i][k][1] = -prices[i];
        continue;
      }

      dp[i][k][0] = Math.max(dp[i-1][k][0], dp[i-1][k][1] + prices[i]);
      dp[i][k][1] = Math.max(dp[i-1][k][1], dp[i-1][k-1][0] - prices[i]);
    }
  }

  // 穷举了 n × max_k × 2 个状态
  return dp[len - 1][maxK][0];
};
// @lc code=end

