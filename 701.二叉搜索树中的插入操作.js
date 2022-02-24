/*
 * @lc app=leetcode.cn id=701 lang=javascript
 *
 * [701] 二叉搜索树中的插入操作
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
var insertIntoBST = function(root, val) {
  const traverse = (root) => {
    // 找到空位置插入新节点
    if (root === null) return new TreeNode(val);
    // BST 中一般不会插入已存在元素
    if (root.val > val) {
      root.left = traverse(root.left);
    }

    if (root.val < val) {
      root.right = traverse(root.right);
    }

    return root;
  }

  return traverse(root);
};
// @lc code=end

