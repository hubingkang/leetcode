/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    /**
     * 广度优先
     */
    // 曾想只需要执行下面和前面一个即可，实际还是需要执行4个方位
    const dy = [0, 0, -1, 1];
    const dx = [-1, 1, 0, 0];

    let g = [...grid];

    let result = 0;

    const sink = (i, j) => {
        // if (g[i][j] == 0) return 0;
        g[i][j] = "0";

        // y 轴改变的是i , x 轴改变的是 x
        for (let k = 0; k < dx.length; k++) {
            // 分别设置找到原点的上下左右四个点。
            let y = i + dy[k], x = j + dx[k];
            // 在边界内
            if (y >= 0 && y < g.length && x >= 0 && x < g[i].length) {
                // 如果是 "0" 跳过
                if (g[y][x] == '0') continue;
                sink(y, x)
            }
        }
        // 外面只收集一次返回的值即可
        return 1;
    }

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] == 0) continue;
            result += sink(i, j);
        }
    }
    return result;
};
// @lc code=end

