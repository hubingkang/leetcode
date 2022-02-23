/*
 * @lc app=leetcode.cn id=654 lang=javascript
 *
 * [654] 最大二叉树
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
  // 1. 递归终止条件
  if (nums.length === 0) return null;
  let maxValue = Number.MIN_SAFE_INTEGER;
  let index = 0;
  
  // 2. 找到最大值
  for (let i = 0, len = nums.length; i < len; i++) {
    if (nums[i] > maxValue) {
      maxValue = nums[i];
      index = i;
    }
  }

  const root = new TreeNode(maxValue)

  // 设置最大值的 左右 子树
  root.left = constructMaximumBinaryTree(nums.slice(0, index));
  root.right = constructMaximumBinaryTree(nums.slice(index + 1));
  return root;
};
// @lc code=end

