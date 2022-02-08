/*
 * @lc app=leetcode.cn id=547 lang=javascript
 *
 * [547] 朋友圈
 */

// @lc code=start
/**
 * @param {number[][]} M
 * @return {number}
 */
var findCircleNum = function (M) {
    /**
     * 并查集
     */
    // function find(parent, x) {
    //     while (parent[x] != x) {
    //         // 进行路径压缩，指向父亲的父亲。
    //         parent[x] = parent[parent[x]];
    //         x = parent[x];
    //     }
    //     return x;
    // }

    // function union(parent, i, j) {
    //     let rootI = find(parent, i);
    //     let rootJ = find(parent, j);
    //     if (rootI === rootJ) {
    //         return;
    //     }

    //     parent[rootI] = rootJ;
    // }

    // let parent = new Array(M.length);
    // for (let i = 0; i < M.length; i++) {
    //     parent[i] = i;
    // }

    // for (let i = 0; i < M.length; i++) {
    //     for (let j = 0; j < M.length; j++) {
    //         if (M[i][j] === 1 && i != j) {
    //             union(parent, i, j);
    //         }
    //     }
    // }

    // let count = 0;

    // for (let i = 0; i < parent.length; i++) {
    //     if (parent[i] == i) count+=1;
    // }

    // return count;

    /**
     * DFS
     */
    // 通过 i 查找 i 一行的朋友。标记为访问过。然后朋友有继续向朋友查找。
    function dfs(M, visited, i) {
        for (let j = 0; j < M.length; j++) {
            if (M[i][j] === 1 && visited[j] === 0) {
                visited[j] = 1;
                dfs(M, visited, j);
            }
        }
    }

    // 定义一个所有成员长度的数组，记录某个人是否被访问过，初始为0，表示未被访问
    let visited = new Array(M.length).fill(0);
    let count = 0;

    for (let i = 0; i < M.length; i++) {
        // 从0 第一个被访问，证明肯定添加了1
        if (visited[i] === 0) {
            dfs(M, visited, i);
            count++;
        }
    }

    return count;
};
// @lc code=end

