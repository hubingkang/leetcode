/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
 * @return {number}
 */
var maxDepth = function (root) {
    if (root == null) {
        return 0;
    }

    const leftHeight = maxDepth(root.left)
    const rightHeight = maxDepth(root.right)
    return Math.max(leftHeight, rightHeight) + 1
};
// @lc code=end

