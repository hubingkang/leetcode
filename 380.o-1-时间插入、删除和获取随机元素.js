/*
 * @lc app=leetcode.cn id=380 lang=javascript
 *
 * [380] O(1) 时间插入、删除和获取随机元素
 */

// @lc code=start

var RandomizedSet = function() {
  this.map = Object.create(null);
  this.arr = [];
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
  if (this.map[val] !== undefined) return false;

  this.arr.push(val);
  this.map[val] = this.arr.length - 1; // 设置 index
  return true;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
  if (this.map[val] === undefined) return false;

  const index = this.map[val];

  const isLast = this.arr.length - 1 === index;
  const lastVal = this.arr.pop();

  // 最后一个元素不需要交换位置
  if (!isLast) {
    this.arr[index] = lastVal;
    this.map[lastVal] = index;
  }

  delete this.map[val];
  return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
  const randomIndex = Math.trunc(Math.random() * (this.arr.length))
  return this.arr[randomIndex]
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
// @lc code=end

