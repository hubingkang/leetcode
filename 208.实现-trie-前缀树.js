/*
 * @lc app=leetcode.cn id=208 lang=javascript
 *
 * [208] 实现 Trie (前缀树)
 */

// @lc code=start
var Trie = function() {
    this.root = new TrieNode();
}
/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let node = this.root;
    const len = word.length;
    for (let i = 0; i < len; i++){
        let child = node.children.get(word[i])
        if (!child) {
            child = new TrieNode();
            node.children.set(word[i], child)
        }

        node = child;
    }
    node.isEndingChar = true;
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let node = this.root;
    const len = word.length;
    for (let i = 0; i < len; i++){
        const child = node.children.get(word[i])
        if (!child) return false;
        node = child;
    }

    return node.isEndingChar;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let node = this.root;
    const len = prefix.length;
    for (let i = 0; i < len; i++){
        const child = node.children.get(prefix[i])
        if (!child) return false;
        node = child;
    }
    return true;
};

var TrieNode = function () {
    this.children = new Map();
    this.isEndingChar = false;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
// @lc code=end

