/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
//   const m = grid.length;
//   const n = grid[0].length;
  
//   const dp = new Array(m);
//   for (let i = 0; i < m; i++) {
//     dp[i] = new Array(n).fill(0);
//   }

//   dp[0][0] = grid[0][0];

//   for (let i = 1; i < m; i++) {
//     dp[i][0] = dp[i - 1][0] + grid[i][0];
//   }

//   for (let i = 1; i < n; i++) {
//     dp[0][i] = dp[0][i - 1] + grid[0][i];
//   }

//   for (let i = 1; i < m; i++) {
//     for (let j = 1; j < n; j++) {
//       dp[i][j] = Math.min(dp[i][j - 1], dp[i - 1][j]) + grid[i][j];
//     }
//   }
//   return dp[m - 1][n - 1];

  const m = grid.length;
  const n = grid[0].length;
  
  const dp = new Array(m + 1);
  for (let i = 0; i <= m; i++) {
    dp[i] = new Array(n + 1).fill(0);
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (i === 1) {
        dp[i][j] = dp[i][j - 1] + grid[i - 1][j - 1];
      } else if (j === 1) {
        dp[i][j] = dp[i - 1][j] + grid[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(dp[i][j - 1], dp[i - 1][j]) + grid[i - 1][j - 1];
      }
    }
  }
  return dp[m][n];
};
// @lc code=end

