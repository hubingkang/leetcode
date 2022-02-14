/*
 * @lc app=leetcode.cn id=337 lang=javascript
 *
 * [337] 打家劫舍 III
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
var rob = function(root) {
  /**
   * 该种方案会超时
   */
  // const memo = new Map();
  // function doRob (node) {
  //   if (node === null) return 0;

  //   // 利用备忘录消除重叠子问题
  //   if (memo.has(memo)) return memo.get(node);

  //   // 抢，然后去下下家
  //   const do_it = node.val
  //     + (node.left === null ? 0 : doRob(node.left.left) + doRob(node.left.right))
  //     + (node.right === null ? 0 : doRob(node.right.left) + doRob(node.right.right));

  //   // 不抢，然后去下家
  //   const not_do_it = doRob(node.left) + doRob(node.right);
    
  //   const res = Math.max(do_it, not_do_it);
  //   memo.set(node, res);
  //   return res;
  // }

  // return doRob(root);

  /**
   * 不会超时
   */
  const res = dp(root);
  
  /* 
    返回一个大小为 2 的数组 arr
    arr[0] 表示不抢 root 的话，得到的最大钱数
    arr[1] 表示抢 root 的话，得到的最大钱数
  */
  function dp(root) {
    if (root === null) return [0, 0];
    const left = dp(root.left);
    const right = dp(root.right);

    // 抢，下家就不能抢了
    const rob = root.val + left[0] + right[0];

    // 不抢，下家可抢可不抢，取决于收益大小
    const not_rob = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);
    return [not_rob, rob]
  }

  return Math.max(res[0], res[1])
};
// @lc code=end

