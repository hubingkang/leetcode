/*
 * @lc app=leetcode.cn id=787 lang=javascript
 *
 * [787] K 站中转内最便宜的航班
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function(n, flights, src, dst, k) {
  const map = {};
  for (let i = 0; i < flights.length; i++) {
    const [from, to, price] = flights[i];
    if (map[to]) {
      map[to].push([from, price]);
    } else {
      map[to] = [[from, price]];
    }
  }

  const memo = new Array(n);
  for(let i = 0; i < n; i++) {
    memo[i] = new Array(k);
  }

  const dp = (dst, k) => {
    if (src === dst) return 0;
    if (k === 0 || !map[dst]) return -1; // 表示次数用光了 或者不可达
    if (memo[dst][k] !== undefined) return memo[dst][k];
    let res = Infinity;
    for (let [from, price] of map[dst]) {
      const subProblem = dp(from, k - 1);
      if (subProblem === -1) continue;
      res = Math.min(res, price + subProblem);
    }

    return memo[dst][k] = res === Infinity ? -1 : res;
  }

  return dp(dst, k + 1);
};
// @lc code=end