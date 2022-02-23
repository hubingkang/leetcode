/*
 * @lc app=leetcode.cn id=889 lang=javascript
 *
 * [889] 根据前序和后序遍历构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var constructFromPrePost = function(preorder, postorder) {
  const build = (preorder, preStart, preEnd, postorder, postStart, postEnd) => {
    if (preStart > preEnd) return null;

    // 因为下面有 leftRootVal = preorder[preStart + 1];
    // 为了要保证索引不越界，必须保证 preStart + 1 <= preEnd，即 preStart < preEnd，
    // 所以要把 preStart == preEnd 的情况作为 base case 单独处理。
    // 如果你去掉这一句，应该会报索引越界的错误。
    if (preStart == preEnd) return new TreeNode(preorder[preStart]);

    // root 节点对应的值就是前序遍历数组的第一个元素
    const rootVal = preorder[preStart];

    // root.left 的值是前序遍历第二个元素
    // 通过前序和后序遍历构造二叉树的关键在于通过左子树的根节点
    // 确定 preorder 和 postorder 中左右子树的元素区间
    const leftRootVal = preorder[preStart + 1];

    let index = 0;
    for (let i = postStart; i < postEnd; i++) {
      if (postorder[i] === leftRootVal) {
        index = i;
        break;
      }
    }

    // 左子树的元素个数  不是下标，所以需要加 1  包裹index 自己的
    const leftSize = index - postStart + 1;
    const root = new TreeNode(rootVal);

    root.left = build(preorder, preStart + 1, preStart + leftSize, postorder, postStart, index);
    root.right = build(preorder, preStart + leftSize + 1, preEnd, postorder, index + 1, postEnd - 1);

    return root;
  }


  return build(preorder, 0, preorder.length - 1, postorder, 0, postorder.length - 1)
};
// @lc code=end

