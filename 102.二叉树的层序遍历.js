/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 * @return {number[][]}
 */
var levelOrder = function (root) {
    // // 广度优先
    // const result = [];
    // if (!root) return result;

    // const nodes = [];
    // nodes.push(root);

    // while(nodes.length) {
    //     const len = nodes.length;
    //     result.push([]);
    //     // 每次循环把当前一层的取完，然后再一遍添加元素。
    //     for (let i = 0; i < len; i++) {
    //         const node = nodes.shift();
    //         result[result.length - 1].push(node.val);

    //         if (node.left) nodes.push(node.left);
    //         if (node.right) nodes.push(node.right);
    //     }

    // }
    // return result;

    // 深度优先
    const result = [];
    if (!root) return result;

    const dfs = (result, node, level) => {
        // 新的层级创建
        if (result.length - 1 < level) {
            result.push([]);
        }
        result[level].push(node.val);
        if (node.left) {
            dfs(result, node.left, level + 1);
        }

        if (node.right) {
            dfs(result, node.right, level + 1)
        }
    }

    dfs(result, root, 0)
    return result;
};
// @lc code=end

