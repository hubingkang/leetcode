/*
 * @lc app=leetcode.cn id=710 lang=javascript
 *
 * [710] 黑名单中的随机数
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[]} blacklist
 */
var Solution = function(n, blacklist) {
  this.map = {};
  this.size = n - blacklist.length;

  // 思路就是把黑名单的值做个映射即可
  for (let i = 0; i < blacklist.length; i++) {
    this.map[blacklist[i]] = 1;
  }

  let last = n - 1;
  for (let b of blacklist) {
    if (b >= this.size) continue;
    while (this.map[last]) {
      last--;
    };
    this.map[b] = last;
    last--;
  }
};

/**
 * @return {number}
 */
Solution.prototype.pick = function() {
  const randomIndex = Math.trunc(Math.random() * this.size);

  console.log(randomIndex)
  if (this.map[randomIndex]) {
    return this.map[randomIndex];
  }
  return randomIndex;
}
/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(n, blacklist)
 * var param_1 = obj.pick()
 */
// @lc code=end

