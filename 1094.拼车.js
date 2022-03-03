/*
 * @lc app=leetcode.cn id=1094 lang=javascript
 *
 * [1094] 拼车
 */

// @lc code=start
/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function(trips, capacity) {
  // 最多是 1000 个车站
  const diff = new Array(1001).fill(0);
  let current = 0;
  for (let i = 0; i < trips.length; i++) {
    const [nums, start, end] = trips[i];
    diff[start] += nums;
    // 即乘客在车上的区间是 [trip[1], trip[2] - 1]
    diff[end + 1 - 1] -= nums;
  }

  // 可以从 0 开始上车，所以从 0 开始
  for (let i = 0; i < diff.length; i++) {
    current = current + diff[i];
    if (current > capacity) return false;
  }
  return true
};
// @lc code=end

