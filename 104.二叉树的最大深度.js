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
    // 方法 1 通过子问题解决
    // if (root == null) {
    //     return 0;
    // }

    // const leftHeight = maxDepth(root.left)
    // const rightHeight = maxDepth(root.right)
    // return Math.max(leftHeight, rightHeight) + 1

    // 方法 2
    let res = 0;
    let depth = 0;

    const traverse = (root) => {
        if (root === null) {
            res = Math.max(res, depth);
            return;
        }

        // 前序位置
        depth++;
        traverse(root.left);
        traverse(root.right);
        // 后序位置
        depth--;
    }

    traverse(root);

    return res;
};
// @lc code=end

