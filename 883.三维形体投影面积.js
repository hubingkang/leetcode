/*
 * @lc app=leetcode.cn id=883 lang=javascript
 *
 * [883] 三维形体投影面积
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var projectionArea = function(grid) {
  let len = grid.length;

  let xy = 0;
  let zy = 0;
  let zx = 0;

  let arr = new Array(len).fill(0);
  for (let i = 0; i < len; i++) {
    const row = grid[i];
    let colMax = 0;
    for (let j = 0; j < len; j++) {
      xy += Math.min(row[j], 1);
      colMax = Math.max(colMax, row[j]);
      arr[j] = Math.max(arr[j], row[j]);
    }
    zx += colMax;
  };

  for (let i = 0; i < len; i++) {
    zy += arr[i];
  }

  return xy + zy + zx;
};
// @lc code=end

