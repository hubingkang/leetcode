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
  let maxSum = Number.MIN_SAFE_INTEGER;

  const dfs = (root) => {
    if (root === null) return 0;
    //计算左边分支最大值，左边分支如果为负数还不如不选择
    const leftMax = Math.max(0, dfs(root.left));
    //计算右边分支最大值，右边分支如果为负数还不如不选择
    const rightMax = Math.max(0, dfs(root.right));
    // left->root->right 作为路径与已经计算过历史最大值做比较
    maxSum = Math.max(maxSum, root.val + leftMax + rightMax);
    return root.val + Math.max(leftMax, rightMax);
  }

  dfs(root);
  return maxSum;
};
// @lc code=end

