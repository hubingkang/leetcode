/*
 * @lc app=leetcode.cn id=367 lang=javascript
 *
 * [367] 有效的完全平方数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
    /**
     * 二分查找法
     */
    // if (num < 2) return true;

    // let left = 2,
    //     right = ~~(num / 2),
    //     guessSquared;

    // while(left + 1 < right) {
    //     let mid = left + ~~((right -left) / 2);
    //     guessSquared = mid * mid;
    //     if (guessSquared === num) {
    //         return true;
    //     } else if (guessSquared > num) {
    //         right = mid;
    //     } else {
    //         left = mid;
    //     }
    // }

    // return right * right === num || left * left === num;

    /**
     * 牛顿迭代法
     */
    if (num < 2) return true;

    let x = num / 2;
    while (x * x > num) {
        x = (x + num / x) / 2 | 0;
    }
    return num === x * x;
};
// @lc code=end

