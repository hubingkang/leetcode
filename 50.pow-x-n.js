/*
 * @lc app=leetcode.cn id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
    const quickMul = (x, n) => {
        if (n === 0) {
            return 1;
        }

        if (n === 1) {
            return x;
        }

        // 一半必须是整数
        const y = quickMul(x, ~~(n / 2));
        return n % 2 === 0 ? y * y : y * y * x;
    }

    return n > 0 ? quickMul(x, n) : 1 / quickMul(x, -n);
};
// @lc code=end

