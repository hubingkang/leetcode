/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU 缓存机制
 */

// @lc code=start
/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.size = 0; // 当前缓存的数目
  this.capacity = capacity;
  this.hashMap = new Map();

  this.head = new DLinkNodes();
  this.tail = new DLinkNodes();
  this.head.next = this.tail;
  this.tail.prev = this.head;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if (!this.hashMap.has(key)) return -1;

  const node = this.hashMap.get(key);
  this.moveToHead(node);
  return node.value;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  const node = this.hashMap.get(key);

  if (!node) {
    const newNodes = new DLinkNodes(key, value);
    this.addToHead(newNodes);

    if (this.size > this.capacity) {
      // 删除最后一个元素
      this.remove(this.tail.prev);
    }
  } else {
    // 更新值
    node.value = value;
    this.moveToHead(node);
  }
};


LRUCache.prototype.addToHead = function(node) {
  node.prev = this.head;
  node.next = this.head.next;
  this.head.next.prev = node;
  this.head.next = node;

  this.hashMap.set(node.key, node);
  this.size++;
}

LRUCache.prototype.remove = function(node) {
  node.next.prev = node.prev;
  node.prev.next = node.next;

  this.hashMap.delete(node.key);
  this.size--;
}

LRUCache.prototype.moveToHead = function(node) {
  this.remove(node);
  this.addToHead(node);
}

var DLinkNodes = function(key, value) {
  this.key = key;
  this.value = value;
  this.prev = null;
  this.next = null;
}
/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

