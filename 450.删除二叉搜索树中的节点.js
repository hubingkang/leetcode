/*
 * @lc app=leetcode.cn id=450 lang=javascript
 *
 * [450] 删除二叉搜索树中的节点
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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
  if (root == null) return null;

  const getMin = (root) => {
    while(root.left !== null) {
      root = root.left;
    }
    return root;
  }
  if (root.val === key) {

    // 1. 左右子节点都没有
    if (root.left === null && root.right === null) return null;
    // 2. 只有一个非空子节点，那么它要让这个孩子接替自己的位置
    if (root.left === null) return root.right;
    if (root.right === null) return root.left;
    // 3. A 有两个子节点 A 必须找到左子树中最大的那个节点，或者右子树中最小的那个节点来接替自己。
    
    // 获得右子树最小的节点
    const minNode = getMin(root.right);
    // 删除右子树最小的节点, 返回一个没有 minNode 的节点，重新赋值给 root.right
    root.right = deleteNode(root.right, minNode.val);
    // 用右子树最小的节点替换 root 节点
    minNode.left = root.left;
    minNode.right = root.right;
    root = minNode;
  } else if (root.val > key) {
    root.left = deleteNode(root.left, key)
  } else if (root.val < key) {
    root.right = deleteNode(root.right, key)
  }

  return root;
};
// @lc code=end

