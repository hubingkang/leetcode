/*
 * @lc app=leetcode.cn id=48 lang=javascript
 *
 * [48] 旋转图像
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  const len = matrix.length;

  // 沿着对角线翻转
  for (var i = 0; i < len; i++) {
    for (let j = i; j < len; j++) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }


  // 沿着中轴线翻转
  for (var i = 0; i < len; i++) {
    let left = 0;
    let right = len - 1;
    while (left < right) {
      const temp = matrix[i][left];
      matrix[i][left] = matrix[i][right];
      matrix[i][right] = temp;
      left++;
      right--
    }
  }

  return matrix;
};
// @lc code=end

