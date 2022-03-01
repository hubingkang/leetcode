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

  // 建立 头尾的空节点
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
  
  // 如果存在该节点
  if (node) {
    node.value = value;
    this.moveToHead(node);
  } else {
    // 如果大于容量
    if (this.size >= this.capacity) {
      const tailNode = this.tail.prev;
      this.hashMap.delete(tailNode.key);
      this.tail.prev = tailNode.prev;
      tailNode.prev.next = this.tail;
      this.size--;
    }

    const newNode = new DLinkNodes(key, value);
    this.head.next.prev = newNode;
    newNode.next = this.head.next;
    newNode.prev = this.head;
    this.head.next = newNode;
    this.hashMap.set(key, newNode);
    this.size++;
  }
};

LRUCache.prototype.moveToHead = function(node) {
  node.next.prev = node.prev;
  node.prev.next = node.next;
  node.prev = this.head;
  node.next = this.head.next;
  this.head.next.prev = node;
  this.head.next = node;
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

