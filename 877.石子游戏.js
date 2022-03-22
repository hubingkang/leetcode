/*
 * @lc app=leetcode.cn id=877 lang=javascript
 *
 * [877] 石子游戏
 */

// @lc code=start
/**
 * @param {number[]} piles
 * @return {boolean}
 */
var stoneGame = function(piles) {
  const len = piles.length;
  const dp = new Array(len);
  for (let i = 0; i < len; i++) {
    dp[i] = new Array(len);
    for (let j = 0; j < len; j++) {
      dp[i][j] = [0, 0];
    }; 
    dp[i][i] = [piles[i], 0]; // 当个数为 1 个时，先手的值为对应的值
  };

  for (let i = len - 2; i >= 0; i--) {
    for (let j = i + 1; j < len; j++) {
      // 先手分别选择左边和右边的结果
      const left = piles[i] + dp[i + 1][j][1];
      const right = piles[j] + dp[i][j - 1][1];
      // 套用状态转移方程
      // 先手肯定会选择更大的结果，后手的选择随之改变
      if (left > right) {
        dp[i][j][0] = left;
        dp[i][j][1] = dp[i + 1][j][0];
      } else {
        dp[i][j][0] = right;
        dp[i][j][1] = dp[i][j - 1][0];
      }
    }
  }

  return dp[0][len - 1][0] - dp[0][len - 1][1]
};
// @lc code=end

