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
  for (let flight of flights) {
    const [from, to, price] = flight;
    if (map[to]) {
      map[to].push([from, price])
    } else {
      map[to] = [[from, price]];
    }
  }

  const memo = new Array(n);
  for (let i = 0; i < n; i++) {
    memo[i] = new Array(k);
  };

  // 从 src 到 dst， k 步最小花费
  const dp = (dst, k) => {
    if (src === dst) return 0; // 当前为目的地
    if (k === 0 || map[dst] === undefined) return -1; // 次数过低，或者没有到达的航班，无法到达
    
    if (memo[dst][k]) return memo[dst][k];
    
    let res = Number.MAX_SAFE_INTEGER;
    for (let [from, price] of map[dst]) {
      const subProblem = dp(from, k - 1);
      if (subProblem !== -1) {
        res = Math.min(res, subProblem + price);
      }
    }

    memo[dst][k] = (res === Number.MAX_SAFE_INTEGER ? -1 : res);
    return memo[dst][k]
  }

  return dp(dst, k + 1);
};
// @lc code=end