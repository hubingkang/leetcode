/*
 * @lc app=leetcode.cn id=354 lang=javascript
 *
 * [354] 俄罗斯套娃信封问题
 */

// @lc code=start
/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function(envelopes) {
  // 排序
  envelopes.sort((a, b) => {
    if (a[0] === b[0]) {
      return b[1] - a[1];
    } else {
      return a[0] - b[0];
    }
  })

  // 会超时
  // let max = 1;
  // const len = envelopes.length;
  // // 排序后就可以根据最大子序列和的方法来计算结果
  // const dp = new Array(len).fill(1);
  // for (let i = 0; i < len; i++) {
  //   for (let j = 0; j < i; j++) {
  //     if (envelopes[i][1] > envelopes[j][1]) {
  //       dp[i] = Math.max(dp[i], dp[j] + 1);
  //     }
  //   }
  //   max = Math.max(max, dp[i]);
  // }

  // return max;

  const n = envelopes.length;
  
  const binarySearch = (f, target) => {
    let low = 0, high = f.length - 1;
    while (low < high) {
      const mid = Math.floor((high - low) / 2) + low;
      if (f[mid] < target) {
        low = mid + 1;
      } else {
        high = mid;
      }
    }
    return low;
  };

  const f = [envelopes[0][1]];
  for (let i = 1; i < n; ++i) {
    const num = envelopes[i][1];
    if (num > f[f.length - 1]) {
      f.push(num);
    } else {
      const index = binarySearch(f, num);
      f[index] = num;
    }
  }
  return f.length;
};
// @lc code=end

