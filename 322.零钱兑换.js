/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    /**
     * 自下而上动态规划
     */
    // let max = amount + 1;
    // // 初始化一个比最后一个还大的值。
    // let dp = new Array(max).fill(max);

    // // 初始化第一个为0
    // dp[0] = 0;

    // // // 循环兑换到每一种数量所需要 最少的次数
    // // for (let i = 1; i <= amount; i++) {
    // //     for (let j = 0; j < coins.length; j++) {
    // //         // 如果当前 面额 大于当前，表示不可以用。
    // //         if (coins[j] <= i) {
    // //             // 取当前步数前一个 步长的值 + 1。 比如2， 最少的步数就是2步前 加上这一步
    // //             dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
    // //         }
    // //     }
    // // }

    // // 循环兑换到每一种数量所需要 最少的次数
    // for (let i = 0; i < coins.length; i++) {
    //     // 从硬币可以选的位置开始找出最小步
    //     for (let j = coins[i]; j < max; j++) {
    //         dp[j] = Math.min(dp[j], dp[j - coins[i]] + 1);
    //     }
    // }
    // // 如果最后一个数大于 总额。则表示兑换不了。
    // return dp[amount] > amount ? -1 : dp[amount];

    /**
     * 自上而下动态规划
     */
    if (amount < 1) return 0;

    const fn = (coins, rem, count) => {
        if (rem < 0) return -1;
        if (rem == 0) return 0;

        // 做缓存
        if (count[rem - 1] != 0) return count[rem - 1];

        let min = Number.MAX_SAFE_INTEGER;

        for (let i = 0; i < coins.length; i++) {
            let res = fn(coins, rem - coins[i], count);
            if (res >= 0 && res < min) {
                min = 1 + res;
            };
        }

        count[rem - 1] = (min === Number.MAX_SAFE_INTEGER) ? -1 : min;
        return count[rem - 1];
    }

    return fn(coins, amount, new Array(amount).fill(0))
};
// @lc code=end

