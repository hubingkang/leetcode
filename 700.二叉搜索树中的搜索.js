/*
 * @lc app=leetcode.cn id=700 lang=javascript
 *
 * [700] 二叉搜索树中的搜索
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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
  const traverse = (root) => {
    if (root === null) return null;
    if (root.val === val) return root;

    if (root.val > val) {
      return traverse(root.left);
    }

    if (root.val < val) {
      return traverse(root.right);
    }
  }

  return traverse(root);
};
// @lc code=end

