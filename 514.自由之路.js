/*
 * @lc app=leetcode.cn id=514 lang=javascript
 *
 * [514] 自由之路
 */

// @lc code=start
/**
 * @param {string} ring
 * @param {string} key
 * @return {number}
 */
var findRotateSteps = function(ring, key) {
  const map = {};
  for (let i = 0; i < ring.length; i++) {
    const alpha = ring[i];
    if (!map[alpha]) {
      map[alpha] = [i]; // 记录对应字母的下标
    } else {
      map[alpha].push(i);
    }
  }

  const memo = new Array(ring.length);
  for (let i = 0; i < memo.length; i++) {
    memo[i] = new Array(key.length);
  }

  // 计算圆盘指针在 ring[i]，输入 key[j..] 的最少操作数
  const dp = (ring, i, key, j) => {
    if (j === key.length) return 0;

    if (memo[i][j]) return memo[i][j];

    const len = ring.length; // 整个环的长度

    const alpha = key[j];
    // 设置一个初始最大值
    let res = Number.MAX_SAFE_INTEGER;

    // 遍历 ring 上可能有多个字符 key[j]
    for (let index of map[alpha]) {
      let delta = Math.abs(index - i);
      delta = Math.min(delta, len - delta); // 顺时针和逆时针中选较小的值

      // 计算子问题
      const subProblem = dp(ring, index, key, j + 1);
      // 选择「整体」操作次数最少的
      // 加一是因为按动按钮也是一次操作
      res = Math.min(res, 1 + delta + subProblem);
    }

    memo[i][j] = res;
    return memo[i][j];
  }

  return dp(ring, 0, key, 0);
};
// @lc code=end

