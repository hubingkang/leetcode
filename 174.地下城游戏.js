/*
 * @lc app=leetcode.cn id=174 lang=javascript
 *
 * [174] 地下城游戏
 */

// @lc code=start
/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function(dungeon) {
  const m = dungeon.length;
  const n = dungeon[0].length;

  const memo = new Array(m);
  
  for (let i = 0; i < m; i++) {
    memo[i] = new Array(n).fill(-1);
  }

  /* 定义：从 (i, j) 到达右下角，需要的初始血量至少是多少 */
  const dp = (grid, i, j) => {
    const m = grid.length;
    const n = grid[0].length;
    
    // base case
    if (i === m - 1 && j === n - 1) {
      // 如果最后一步大于等于 0 ，则不用过多，保持 1 就可以
      return grid[i][j] >= 0 ? 1 : -grid[i][j] + 1;
    }

    // 表示出界了，给个最大值即可。
    if (i === m || j === n) {
      return Number.MAX_SAFE_INTEGER;
    }

    // 因为已经访问了的值不可能为复数，最小也需要为 1
    if (memo[i][j] !== -1) {
      return memo[i][j];
    }

    // 状态转移, Math.min() 中是从后往前来的，必定最小是 1，如果 res 的结果小于零，则说 grid[i][j] 是可以满足后面的，则为 1 就可以了
    const res = Math.min(dp(grid, i, j + 1), dp(grid, i + 1, j)) - grid[i][j];

    // 骑士的生命值至少为 1
    memo[i][j] = res <= 0 ? 1 : res;

    return memo[i][j];
 }

  return dp(dungeon, 0, 0);
};
// @lc code=end

