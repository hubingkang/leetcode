/*
 * @lc app=leetcode.cn id=297 lang=javascript
 *
 * [297] 二叉树的序列化与反序列化
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
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  // 1. 前序遍历
  // const res = [];
  // const traverse = (root, res) => {
  //   if (root === null) {
  //     res.push('#');
  //     return;
  //   }
  //   res.push(root.val);
  //   traverse(root.left, res)
  //   traverse(root.right, res)
  // }
  // traverse(root, res);
  // return res.join(',')

  // 2. 后序遍历
  // const res = [];
  // const traverse = (root, res) => {
  //   if (root === null) {
  //     res.push('#');
  //     return;
  //   }
  //   traverse(root.left, res)
  //   traverse(root.right, res)
  //   res.push(root.val);
  // }
  // traverse(root, res);
  // return res.join(',')

  // 3. 层级遍历
  if (root === null) return ""; // 返回空字符串
  const res = [];
  const queue = [root];

  while (queue.length) {
    const node = queue.shift();
    
    if (node === null) {
      res.push('#');
      continue;
    };
    res.push(node.val);
    queue.push(node.left);
    queue.push(node.right);
  }
  return res.join(',')
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  // 1. 前序遍历
  // const arr = data.split(',');
  // const traverse = (arr) => {
  //   if (arr.length === 0) return null;

  //   const val = arr.shift();
  //   if (val === '#') return null;
  //   const root = new TreeNode(val);
  //   // 不从数组的头部取元素，如果元素为 null 就不会继续走了，然后走 right 了
  //   root.left = traverse(arr);
  //   root.right = traverse(arr);
  //   return root;
  // }
  // return traverse(arr);

  // 2. 后序遍历
  // const arr = data.split(',');
  // const traverse = (arr) => {
  //   if (arr.length === 0) return null;

  //   const val = arr.pop();
  //   if (val === '#') return null;
  //   const root = new TreeNode(val);
  //   // 后续遍历先遍历右子树
  //   root.right = traverse(arr);
  //   root.left = traverse(arr);
  //   return root;
  // }
  // return traverse(arr);

  // 3. 层遍历
  if (data === '') return null; // 这里是返回 null 的节点
  const arr = data.split(',');
  // 第一个元素就是 root 的值
  const root = new TreeNode(arr[0]);
  // 父节点都加入到这里
  const q = [root];
  
  for (let i = 1; i < arr.length;) {
    // 队列中存的都是父节点
    const parent = q.shift();

    // 父节点对应的左侧子节点的值
    const left = arr[i++];
    if (left !== '#') {
      parent.left = new TreeNode(left);
      q.push(parent.left);
    } else {
      parent.left = null;
    }

    // 父节点对应的右侧子节点的值
    const right = arr[i++];
    if (right !== '#') {
      parent.right = new TreeNode(right);
      q.push(parent.right);
    } else {
      parent.right = null;
    }
  }
  return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end

