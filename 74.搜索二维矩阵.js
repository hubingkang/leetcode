/*
 * @lc app=leetcode.cn id=74 lang=javascript
 *
 * [74] 搜索二维矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    /**
     * 二分法
     */
    if (!matrix.length) return false;

    let m = matrix.length,
        n = matrix[0].length;

    let left = 0;
    right = m * n - 1;

    let pivotIdx, pivotElement;

    while (left <= right) {
        // 找到中间那个下标
        pivotIdx = left + ((right - left) >> 1);
        // 中间元素的值
        pivotElement = matrix[~~(pivotIdx / n)][pivotIdx % n];

        if (target === pivotElement) {
            return true
        } else if (target < pivotElement) {
            right = pivotIdx - 1;
        } else {
            left = pivotIdx + 1;
        }
    }

    return false;
};
// @lc code=end

