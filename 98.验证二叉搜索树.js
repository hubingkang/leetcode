/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
 * @return {boolean}
 */
var isValidBST = function (root) {
  // 采用中序遍历
  const general = (root) => {
    if (root) {
      return [...general(root.left), root.val, ...general(root.right)];
    }
    return [];
  };
  const result = general(root);
  for (let i = 1; i < result.length; i++) {
    if (result[i] <= result[i - 1]) {
      return false;
    }
  }
  return true;
};
// @lc code=end
