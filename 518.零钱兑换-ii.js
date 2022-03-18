/*
 * @lc app=leetcode.cn id=518 lang=javascript
 *
 * [518] 零钱兑换 II
 */

// @lc code=start
/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
  // const len = coins.length;

  // const dp = new Array(len + 1).fill(0);
  // for (let i = 0; i <= len; i++) {
  //   dp[i] = new Array(amount + 1).fill(0);
  //   // 表示 前 i个硬币 凑到 0 的金额 为 1次，什么也不放也是一种情况
  //   dp[i][0] = 1;
  // }

  // for (let i = 1; i <= len; i++) {
  //   for (let j = 1; j <= amount; j++) {
  //     // 当前装的下
  //     if (j >= coins[i - 1]) {
  //       dp[i][j] = dp[i - 1][j] + dp[i][j - coins[i - 1]];
  //     } else {
  //       dp[i][j] = dp[i - 1][j];
  //     }
  //   }
  // }

  // return dp[len][amount];


  const dp = new Array(amount + 1).fill(0);
  dp[0] = 1;

  for (let coin of coins) {
    for (let i = coin; i <= amount; i++) {
      dp[i] += dp[i - coin];
    }
  }
  return dp[amount]; 
};
// @lc code=end

