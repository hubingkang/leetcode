/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  // 方法1
  // if (root) {
  //     return [...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)]
  // } else {
  //     return []
  // }

  // 方法二，颜色标记
  console.log(root);
  const printArr = [];
  if (!root) return printArr;
  const stack = [];
  stack.push({
    color: "white",
    node: root,
  });

  while (stack.length > 0) {
    const pickValue = stack.pop();
    const { color, node } = pickValue;
    if (color === "gray") {
      printArr.push(node.val);
    } else {
      node.right && stack.push({ color: "white", node: node.right });
      stack.push({ color: "gray", node });
      node.left && stack.push({ color: "white", node: node.left });
    }
  }

  return printArr;
};
// @lc code=end
