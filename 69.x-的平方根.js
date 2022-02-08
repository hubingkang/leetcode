/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    /**
     * 贪心算法
     */
    // if (x < 2) return x
    // let left = 1, right = x >> 1
    // while (left + 1 < right) {
    //     let mid = left + ((right - left) >> 1)
    //     if (mid === x / mid) {
    //         return mid
    //     } else if (mid < x / mid) {
    //         left = mid
    //     } else {
    //         right = mid
    //     }
    // }
    // return right > x / right ? left : right

    /**
     * 牛顿迭代法
     */
    r = x;
    while (r * r > x) {
        r = (r + x / r) / 2 | 0;
    }
    return r;
};
// @lc code=end

