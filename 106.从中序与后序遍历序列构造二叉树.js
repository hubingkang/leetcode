/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
  const build = (inorder, inStart, inEnd, postorder, postStart, postEnd) => {
    if (inStart > inEnd) return null;

    // root 节点对应的值就是后序遍历数组的最后一个元素
    const rootVal = postorder[postEnd];
    // rootVal 在中序遍历数组中的索引
    let index = 0;
    for (let i = inStart; i <= inEnd; i++) {
      if (inorder[i] === rootVal) {
        index = i;
        break;
      }
    }

    // 左子树的节点个数
    const root = new TreeNode(rootVal);
    const leftSize = index - inStart;

    // 递归构造左右子树
    root.left = build(inorder, inStart, index - 1, postorder, postStart, postStart + leftSize - 1);
    root.right = build(inorder, index + 1, inEnd, postorder, postStart + leftSize, postEnd - 1);

    return root;
  }

  return build(inorder, 0, inorder.length - 1, postorder, 0, postorder.length - 1);
};
// @lc code=end

