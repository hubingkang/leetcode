/*
 * @lc app=leetcode.cn id=124 lang=javascript
 *
 * [124] 二叉树中的最大路径和
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
var maxPathSum = function(root) {
  let maxSum = 0;

  const maxDepth = (node) => {
    if (node === null) return 0;
    const leftMaxDepth = maxDepth(node.left);
    const rightMaxDepth = maxDepth(node.right);
    
    const sum = node === root ? node.val + leftMaxDepth + rightMaxDepth :  node.val + Math.max(leftMaxDepth, rightMaxDepth)
    // 后序位置顺便计算最大直径
    maxSum = Math.max(maxSum, sum);
    
    return sum;
  }

  maxDepth(root);
  return maxSum;
};
// @lc code=end

