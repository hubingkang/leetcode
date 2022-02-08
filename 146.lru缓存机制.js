/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU缓存机制
 */

// @lc code=start
var LRUCache = function (capacity) {
    this.size = 0; // 缓存的数目
    this.capacity = capacity; // 缓存的容量
    this.hashTable = new Map();

    this.head = new DLinkedNode();
    this.tail = new DLinkedNode();
    this.head.next = this.tail;
    this.tail.prev = this.head;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    if (!this.hashTable.has(key)) return -1;

    let node = this.hashTable.get(key);
    this.moveToHead(node);
    return node.value;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    let node = this.hashTable.get(key);

    if (!node) {
        let newNode = new DLinkedNode(key, value);
        // 将节点添加到双向链表的头部
        this.addToHead(newNode);

        if (this.size > this.capacity) {
            // 移除链表中最后一个值，将值从Hash表中移除
            this.pop();
        }
    } else {
        // 更新value
        node.value = value;
        this.moveToHead(node);
    }
};

// 删除指定元素
LRUCache.prototype.remove = function (node) {
    node.next.prev = node.prev;
    node.prev.next = node.next;

    // 删除元素，把hash表中也删除
    this.hashTable.delete(node.key);
    this.size--;
};

// 删除最后一个元素
LRUCache.prototype.pop = function () {
    let tailNode = this.tail.prev;
    this.remove(tailNode);
    return tailNode;
};

// 添加到头部
LRUCache.prototype.addToHead = function (node) {
    node.prev = this.head;
    node.next = this.head.next;
    this.head.next.prev = node;
    this.head.next = node;

    // 添加到头部后，添加到hash中去。
    this.hashTable.set(node.key, node);
    this.size++
};

// 移动到头部
LRUCache.prototype.moveToHead = function (node) {
    // 先删除后添加
    this.remove(node);
    this.addToHead(node);
};

// 双向链表的构造函数
var DLinkedNode = function (key, value) {
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

