/*
 * @lc app=leetcode.cn id=222 lang=javascript
 *
 * [222] 完全二叉树的节点个数
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
 * @return {number}
 */
var countNodes = function(root) {
  let left = root;
  let right = root;
  let leftHeight = 0;
  let rightHeight = 0;

  while(left !== null) {
    leftHeight++;
    left = left.left;
  }

  while(right !== null) {
    rightHeight++;
    right = right.right;
  }

  // 判断是否为满二叉树
  if (leftHeight === rightHeight) return Math.pow(2, leftHeight) - 1;
  return 1 + countNodes(root.left) + countNodes(root.right);
};
// @lc code=end

