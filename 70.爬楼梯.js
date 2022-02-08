/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  // let arr = [];
  // arr[0] = 1;
  // arr[1] = 1;

  // for (let i = 3; i <= n;i++) {
  //     arr[i] = arr[i - 1] + arr[i - 2]
  // };

  // return arr[n]

  // 斐波那契数列，因为台阶没有第一个[1,1,2,3,5],第4个台阶，就是斐波那契数列中第五个值，带入公式如下：
  const sqrt_5 = Math.sqrt(5);
  const fib_n =
    Math.pow((1 + sqrt_5) / 2, n + 1) - Math.pow((1 - sqrt_5) / 2, n + 1);
  return Math.round(fib_n / sqrt_5);
};
// @lc code=end
