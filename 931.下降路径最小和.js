/*
 * @lc app=leetcode.cn id=931 lang=javascript
 *
 * [931] 下降路径最小和
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function(matrix) {
  const len = matrix.length;
  let result = Number.MAX_SAFE_INTEGER;

  const memo = [];
  for (let i = 0; i < len; i++) {
    memo[i] = new Array(len).fill(66666); // 66666 在目标范围的值
  };

  const dp = (matrix, i, j) => {
    // 1. 边界情况
    if (i < 0 || j < 0 || i >= len || j >= len) return 99999; // 返回一个越界的数字，保证比较大

    // 2. base case
    if (i === 0) return matrix[0][j];

    // 3. 查找备忘录
    if (memo[i][j] !== 66666) return memo[i][j];

    // 4. 进行状态转移
    memo[i][j] = matrix[i][j] + Math.min(
      dp(matrix, i - 1, j - 1),
      dp(matrix, i - 1, j),
      dp(matrix, i - 1, j + 1),
    )
    return memo[i][j];
  }

  // 最后一排的各个结果取最小
  for (let i = 0; i < len; i++) {
    result = Math.min(result, dp(matrix, len - 1, i))
  };

  return result;
};
// @lc code=end

