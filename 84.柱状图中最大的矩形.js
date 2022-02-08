/*
 * @lc app=leetcode.cn id=84 lang=javascript
 *
 * [84] 柱状图中最大的矩形
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  // stack 是一个递增的栈。
  const stack = [-1];
  let maxArea = 0;
  for (let i = 0; i < heights.length; i++) {
    // 每次循环，都会和栈的最上面一个元素进行比较，如果比最上面的小，则要切割栈
    while (stack.length > 0 && heights[stack[stack.length - 1]] >= heights[i]) {
      tmp = stack.pop();
      maxArea = Math.max(
        maxArea,
        (i - stack[stack.length - 1] - 1) * heights[tmp]
      );
    }
    stack.push(i);
  }
  // 如果循环结束了。但是栈没调用完，则逐个出栈
  while (stack[stack.length - 1] !== -1) {
    const last = stack.pop();
    maxArea = Math.max(
      maxArea,
      heights[last] * (heights.length - stack[stack.length - 1] - 1)
    );
  }
  return maxArea;
};
// @lc code=end
