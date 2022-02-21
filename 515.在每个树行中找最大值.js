/*
 * @lc app=leetcode.cn id=515 lang=javascript
 *
 * [515] 在每个树行中找最大值
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function(root) {
  if (root === null) return [];

  const queue = [root];
  const result = [];
  while (queue.length) {
    let maxVal = Number.MIN_SAFE_INTEGER;
    for (let i = 0, len = queue.length; i < len; i++) {
      const node = queue.shift();
      if (node.val > maxVal) {
        maxVal = node.val;
      }

      if (node.left !== null) {
        queue.push(node.left);
      }
      if (node.right !== null) {
        queue.push(node.right);
      }
    }
    result.push(maxVal)
  }

  return result;
};
// @lc code=end

