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
  // // 采用中序遍历
  // const general = (root) => {
  //   if (root) {
  //     return [...general(root.left), root.val, ...general(root.right)];
  //   }
  //   return [];
  // };
  // const result = general(root);
  // for (let i = 1; i < result.length; i++) {
  //   if (result[i] <= result[i - 1]) {
  //     return false;
  //   }
  // }
  // return true;
  
  // 方法2
  /* 限定以 root 为根的子树节点必须满足 max.val > root.val > min.val */
  const traverse = (root, min, max) => {
    if (root === null) return true;

    // 若 root.val 不符合 max 和 min 的限制，说明不是合法 BST
    if (min !== null && root.val <= min.val) return false;
    if (max !== null && root.val >= max.val) return false;

    // 限定左子树的最大值是 root.val，右子树的最小值是 root.val
    return traverse(root.left, min, root) && traverse(root.right, root, max)
  }

  return traverse(root, null, null);
};
// @lc code=end
