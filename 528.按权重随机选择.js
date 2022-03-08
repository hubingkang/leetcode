/*
 * @lc app=leetcode.cn id=528 lang=javascript
 *
 * [528] 按权重随机选择
 */

// @lc code=start
/**
 * @param {number[]} w
 */
var Solution = function(w) {
  this.preSum = [0];
  for (let i = 1; i <= w.length; i++) {
    this.preSum[i] = w[i - 1] + this.preSum[i - 1];
  }
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function() {
  const last = this.preSum[this.preSum.length - 1];

  // 因为第一个是占位符，所以实际从 1 开始选择[1, x]
  const randomNum = Math.trunc(Math.random() * last) + 1;

  let left = 0;
  let right = this.preSum.length - 1;

  // 获取 target 在前缀和数组 preSum 中的索引
  // 搜索左侧边界的二分搜索
  while (left < right) {
    const mid = left + ((right - left) >> 1);
    if (this.preSum[mid] >= randomNum) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  // preSum 的索引偏移了一位，还原为权重数组 w 的索引
  return left - 1;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */
// @lc code=end

