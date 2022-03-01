/*
 * @lc app=leetcode.cn id=1373 lang=javascript
 *
 * [1373] 二叉搜索子树的最大键值和
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
var maxSumBST = function(root) {
  let max = 0;

  const traverse = (root) => {
    if (root === null) return [1, Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER, 0];

    const left = traverse(root.left);
    const right = traverse(root.right);

    const res = [];
    // 表示左右子树都是 BST
    if (left[0] === 1 && right[0] === 1 && root.val > left[2] && root.val < right[1]) {
      // 当前数也是 BST
      res[0] = 1;
      res[1] = Math.min(left[1], root.val);
      res[2] = Math.max(right[2], root.val);
      res[3] = root.val + left[3] + right[3];
      max = Math.max(max, res[3]);
    } else {
      res[0] = 0;
    }
    return res;
  }

  traverse(root);
  return max;
};
// @lc code=end

