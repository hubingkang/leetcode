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
     * dp 方程的思想的优化版本
     */
    const len = prices.length;
    let dp_i_0 = 0;
    let dp_i_1 = Number.MIN_SAFE_INTEGER; // 关键，保证后面购入都比当前的数字大
    for (let i = 0; i < len; i++) {
      const temp = dp_i_0;
      // 第 i天没有 可能 i - 1 天没有继续保持，或者 i-1 天有 然后卖了
      dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i]);
      // 第 i天有 可能 i - 1 天有继续保持，或者 i-1 没有 然后今天买了
      dp_i_1 = Math.max(dp_i_1, temp - prices[i]);
    }
  
    return dp_i_0;

    /**
     * 采用 dp 方程的解法
     */
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
    //   dp[i][1] = Math.max(dp[i-1][1], dp[i-1][0] - prices[i]);
    // }

    // return dp[len-1][0];
        
    /**
     * 贪心算法
     */
    // let result = 0;
    // for (let i = 0; i < prices.length - 1; i++) {
    //     if (prices[i + 1] > prices[i]) {
    //         result += prices[i + 1] - prices[i]
    //     }
    // }
    // return result;
};
// @lc code=end

