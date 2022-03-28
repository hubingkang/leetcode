/*
 * @lc app=leetcode.cn id=1905 lang=javascript
 *
 * [1905] 统计子岛屿
 */

// @lc code=start
/**
 * @param {number[][]} grid1
 * @param {number[][]} grid2
 * @return {number}
 */
var countSubIslands = function(grid1, grid2) {
  const m = grid1.length;
  const n = grid1[0].length;
  let res = 0;

  const submerge = (grid, i, j) => {
    if (i < 0 || i >= m || j < 0 || j >= n) return;
    if (grid[i][j] === 1) {
      grid[i][j] = 0;
      submerge(grid, i - 1, j);
      submerge(grid, i, j + 1);
      submerge(grid, i + 1, j);
      submerge(grid, i, j - 1);
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid2[i][j] === 1 && grid1[i][j] === 0) {
        submerge(grid2, i ,j);
      }
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid2[i][j] === 1) {
        res++;
        submerge(grid2, i ,j);
      }
    }
  }
  return res;
};
// @lc code=end

