/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  if (root === null) return null;
  if (root === p || root === q) return root;

  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);

  // 因为是后序遍历，从低部向上遍历 如果相遇了，则是最近的父节点
  if (left !== null && right !== null) {
    return root;
  }

  if (left === null && right === null) {
    return null;
  }

  // 如果有一个值符合就返回那个值的元素，
  return left === null ? right : left;
};
// @lc code=end

