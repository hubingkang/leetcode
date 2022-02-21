/*
 * @lc app=leetcode.cn id=543 lang=javascript
 *
 * [543] 二叉树的直径
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
var diameterOfBinaryTree = function(root) {
  let maxDiameter = 0;

  const maxDepth = (root) => {
    if (root === null) return 0;
    const leftMaxDepth = maxDepth(root.left);
    const rightMaxDepth = maxDepth(root.right);
    
    // 后序位置顺便计算最大直径
    maxDiameter = Math.max(maxDiameter, leftMaxDepth + rightMaxDepth);
    return 1 + Math.max(leftMaxDepth, rightMaxDepth)
  }

  maxDepth(root);
  return maxDiameter;
};
// @lc code=end

