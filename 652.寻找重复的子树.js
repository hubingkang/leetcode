/*
 * @lc app=leetcode.cn id=652 lang=javascript
 *
 * [652] 寻找重复的子树
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
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function(root) {
  // 记录所有子树以及出现的次数
  const memo = {};
  // 记录重复的子树根节点
  const result = [];

  const traverse = (root) => {
    if (root === null) return '#';

    const left = traverse(root.left);
    const right = traverse(root.right);

    const subTree = `${left},${right},${root.val}`;
    // 多次重复也只会被加入结果集一次
    if (memo[subTree] === 1) {
      result.push(root)
    }
    // 给子树对应的出现次数加一
    memo[subTree] = (memo[subTree] || 0) + 1;
    return subTree;
  }
  traverse(root);
  return result;
};
// @lc code=end

