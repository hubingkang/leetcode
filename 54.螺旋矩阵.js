/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  let top = 0;
  // 因为是边界，所以取最大的下标
  let right = n - 1;
  let bottom = m - 1;
  let left = 0;

  const result = [];

  while (result.length < n * m) {
    // 横向还能遍历
    if (top <= bottom) {
      // 从左往右遍历
      for (let i = left; i <= right; i++) {
        result.push(matrix[top][i])
      }
      // 向下靠拢
      top++;
    }

    if (left <= right) {
      for (let i = top; i <= bottom; i++) {
        result.push(matrix[i][right])
      }
      right--;
    }

    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        result.push(matrix[bottom][i])
      }
      bottom--;
    }

    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        result.push(matrix[i][left])
      }
      left++;
    }
  }
  return result;
};
// @lc code=end

