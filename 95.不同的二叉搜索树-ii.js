/*
 * @lc app=leetcode.cn id=95 lang=javascript
 *
 * [95] 不同的二叉搜索树 II
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
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
  const build = (lo, hi) => {
    const res = [];
    if (lo > hi) {
      res.push(null);
      return res;
    }
    
    for (let i = lo; i <= hi; i++) {
      // 2、递归构造出左右子树的所有合法 BST。
      const leftTree = build(lo, i - 1);
      const rightTree = build(i + 1, hi);
      // 3、给 root 节点穷举所有左右子树的组合。
      for (let left of leftTree) {
        for (let right of rightTree) {
          // i 作为根节点 root 的值
          const root = new TreeNode(i);
          root.left = left;
          root.right = right;
          res.push(root);
        }
      }
    }
    return res;
  }

  // 构造闭区间 [1, n] 组成的 BST, 因为是 n 个数，所以从 1 开始
  return build(1, n);
};
// @lc code=end

