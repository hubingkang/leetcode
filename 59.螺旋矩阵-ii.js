/*
 * @lc app=leetcode.cn id=59 lang=javascript
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  let current = 0;

  let top = 0;
  // 因为是边界，所以取最大的下标
  let right = n - 1;
  let bottom = n - 1;
  let left = 0;

  const matrix = [];
  for (let i = 0; i < n; i++) {
    matrix[i] = [];
  }

  while (current < n * n) {
    // 横向还能遍历
    if (top <= bottom) {
      // 从左往右遍历
      for (let i = left; i <= right; i++) {
        matrix[top][i] = ++current;
      }
      // 向下靠拢
      top++;
    }

    if (left <= right) {
      for (let i = top; i <= bottom; i++) {
        matrix[i][right] = ++current;
      }
      right--;
    }

    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        matrix[bottom][i] = ++current;
      }
      bottom--;
    }

    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        matrix[i][left] = ++current;
      }
      left++;
    }
  }

  return matrix;
};
// @lc code=end

