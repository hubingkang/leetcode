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
    // if (amount < 1) return 0;

    // const fn = (coins, rem, count) => {
    //     if (rem < 0) return -1;
    //     if (rem == 0) return 0;

    //     // 做缓存
    //     if (count[rem - 1] != 0) return count[rem - 1];

    //     let min = Number.MAX_SAFE_INTEGER;

    //     for (let i = 0; i < coins.length; i++) {
    //         let res = fn(coins, rem - coins[i], count);
    //         if (res >= 0 && res < min) {
    //             min = 1 + res;
    //         };
    //     }

    //     count[rem - 1] = (min === Number.MAX_SAFE_INTEGER) ? -1 : min;
    //     return count[rem - 1];
    // }

    // return fn(coins, amount, new Array(amount).fill(0))

    // const memo = [];
    // const dp = (coins, amount) => {
    //     if (amount < 0) return -1;
    //     if (amount === 0) return 0;

    //     if (memo[amount]) return memo[amount];
        
    //     let res = Number.MAX_SAFE_INTEGER;
    //     for (let coin of coins) {
    //         const subProblem = dp(coins, amount - coin)
    //         // 子问题无解则跳过
    //         if (subProblem == -1) continue;
    //         // 在子问题中选择最优解，然后加一
    //         res = Math.min(res, subProblem + 1);
    //     }
    //     memo[amount] = res === Number.MAX_SAFE_INTEGER ? -1 : res;
    //     return memo[amount];
    // }
    // return dp(coins, amount);

    // 自底向上
    const dp = new Array(amount + 1).fill(Number.MAX_SAFE_INTEGER);
    // base case
    dp[0] = 0;
    for (let i = 1; i < dp.length; i++) {
        for (let coin of coins) {
            // 越界，跳过
            if (i - coin < 0) continue;
            dp[i] = Math.min(dp[i], 1 + dp[i - coin]);
        }
    }

    return dp[amount + 1] === Number.MAX_SAFE_INTEGER ? -1 : dp[amount]
};
// @lc code=end

