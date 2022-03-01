/*
 * @lc app=leetcode.cn id=225 lang=javascript
 *
 * [225] 用队列实现栈
 */

// @lc code=start

var MyStack = function() {
  this.queue = [];
  this.top_elem = null;
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
  this.queue.push(x);
  // x 是队列的队尾，是栈的栈顶
  this.top_elem = x;
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
  let size = this.queue.length ;
  // 留下队尾 2 个元素
  while (size > 2) {
    this.queue.push(this.queue.shift());
    size--;
  }
  // 记录新的队尾元素
  this.top_elem = this.queue[0];
  // 这个新的元素回到了数组的最后面，到了栈顶
  this.queue.push(this.queue.shift());
  // 删除之前的队尾元素
  return this.queue.shift();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
  /** 返回栈顶元素 */
  return this.top_elem;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
  return !this.queue.length;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
// @lc code=end

