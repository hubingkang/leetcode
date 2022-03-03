/*
 * @lc app=leetcode.cn id=1109 lang=javascript
 *
 * [1109] 航班预订统计
 */

// @lc code=start
/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
var corpFlightBookings = function(bookings, n) {
  const result = [];
  // 根据初始数组构造差分数组
  const diff = new Array(n + 1).fill(0);
  
  const increases = ([start, end, value]) => {
    diff[start] += value;
    // 避免 end + 1 越界了
    if (end + 1 < diff.length) {
      diff[end + 1] -= value;
    }
  }

  for (let i = 0; i < bookings.length; i++) {
    increases(bookings[i])
  }

  for (let i = 1; i < diff.length; i++) {
    // 因为上面 i 是从 1 开始的。新的结果下标需要减 1
    result[i] = (result[i - 1] || 0) + diff[i];
  }

  // 因为第一个为空节点
  return result.slice(1);
};
// @lc code=end

