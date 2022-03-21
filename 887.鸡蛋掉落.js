/*
 * @lc app=leetcode.cn id=887 lang=javascript
 *
 * [887] 鸡蛋掉落
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number} n
 * @return {number}
 */
var superEggDrop = function(k, n) {
  // const memo = new Array(k + 1);
  // for (var i = 0; i < memo.length; i++) {
  //   memo[i] = new Array(n + 1);
  // }

  // // k 个鸡蛋 n 层楼
  // const dp = (k, n) => {
  //   if (k === 1) return n;
  //   if (n === 0) return 0;

  //   if (memo[k][n] !== undefined) return memo[k][n];

  //   let res = Number.MAX_SAFE_INTEGER;
  //   // for (let i = 1; i < n + 1; i++) {
  //   //   res = Math.min(res, 
  //   //     Math.max(// 因为我们要求的是最坏情况下扔鸡蛋的次数，所以鸡蛋在第i层楼碎没碎
  //   //       dp(k, n - i), // 没碎
  //   //       dp(k - 1, i - 1) // 碎了
  //   //     ) + 1) // 在 i 楼扔的这一次
  //   // }

  //   let left = 1;
  //   let right = n;
  //   while (left <= right) {
  //     const mid = left + ((right - left) >> 1);
  //     const broken = dp(k - 1, mid - 1); // 碎了
  //     const not_broken = dp(k, n - mid); // 没碎

  //     // res = min(max(碎，没碎) + 1)
  //     if (broken > not_broken) {
  //       right = mid - 1;
  //       res = Math.min(res, broken + 1);
  //     } else {
  //       left = mid + 1;
  //       res = Math.min(res, not_broken + 1);
  //     }
  //   }

  //   memo[k][n] = res;
  //   return res;
  // }

  // return dp(k, n);

  // 方法 2
  const dp = new Array(k + 1);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(n + 1).fill(0);
  }

  // k 个鸡蛋，丢 m 次能达到最大的楼层
  let m = 0;
  while (dp[k][m] < n) {
    m++;
    for (let i = 1; i <= k; i++) {
      // 当前 i 个鸡蛋，和丢 m 次 = 鸡蛋没破 + 鸡蛋破了 + 当前次数1
      dp[i][m] = dp[i][m - 1] + dp[i - 1][m - 1] + 1;
    }
  }
  return m;
};
// @lc code=end