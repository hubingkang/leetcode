/*
 * @lc app=leetcode.cn id=230 lang=javascript
 *
 * [230] 二叉搜索树中第K小的元素
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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
  // 记录结果
  let res = 0;
  // 记录当前元素的排名
  let rank = 0;

  const traverse = (root) => {
    if (root === null) return;
    traverse(root.left);
    /* 中序遍历代码位置 */
    rank++;
    if (rank === k) {
      // 找到第 k 小的元素
      res = root.val;
      return;
    }
    traverse(root.right);
  }

  traverse(root);
  return res;
};
// @lc code=end

