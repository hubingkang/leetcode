/*
 * @lc app=leetcode.cn id=452 lang=javascript
 *
 * [452] 用最少数量的箭引爆气球
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
  if (points.length === 0) return 0;

  points.sort((a, b) => a[1] - b[1]);
  let count = 1;

  let currentEnd = points[0][1];
  for (let i = 1; i < points.length; i++) {
    const [start, end] = points[i];
    if (currentEnd < start) {
      currentEnd = end;
      count++;
    }
  }
  return count;
};
// @lc code=end

