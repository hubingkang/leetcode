/*
 * @lc app=leetcode.cn id=96 lang=javascript
 *
 * [96] 不同的二叉搜索树
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
  const memo = [];
  for (let i = 0; i <= n; i++) {
    memo[i] = new Array(n + 1).fill(0);
  }

  const count = (lo, hi) => {
    if (lo > hi) return 1;
    // 查备忘录
    if (memo[lo][hi] !== 0) {
      return memo[lo][hi];
    }

    let res = 0;
    for (let mid = lo; mid <= hi; mid++) {
      const left = count(lo, mid - 1);
      const right = count(mid + 1, hi)
      res += left * right;
    }

     // 将结果存入备忘录
    memo[lo][hi] = res;
    return res;
  }

  return count(1, n);
};
// @lc code=end

