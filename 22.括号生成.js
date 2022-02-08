/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const result = [];
  const generate = (left, right, n, res) => {
    if (left == n && right == n) {
      result.push(res);
      return;
    }
    // 必须左括号小于n
    if (left < n) {
      generate(left + 1, right, n, res + "(");
    }

    // 左边括号多余右括号才可以写右括号
    if (left > right) {
      generate(left, right + 1, n, res + ")");
    }
  };
  generate(0, 0, n, "");
  return result;
};
// @lc code=end
