/*
 * @lc app=leetcode.cn id=120 lang=javascript
 *
 * [120] 三角形最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
    // 将数组最后一个值作为初始化数据
    let dp = [...triangle[triangle.length - 1]];
    let len = triangle.length;

    // 从倒数第二行往前推， 因为最后一行已经是计算好了的
    for (let i = len - 2; i >= 0; i--) {
        for (let j = 0; j < triangle[i].length; j++) {
            // 当前路径最小值为下面两个路径最小值 + 自身的值
            dp[j] = Math.min(dp[j], dp[j + 1]) + triangle[i][j];
        }
    }
    return dp[0];
};
// @lc code=end

