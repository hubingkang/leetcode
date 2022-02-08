/*
 * @lc app=leetcode.cn id=211 lang=javascript
 *
 * [211] 添加与搜索单词 - 数据结构设计
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
 var WordDictionary = function() {
  this.root = new TrilNode();
};

/** 
* @param {string} word
* @return {void}
*/
WordDictionary.prototype.addWord = function(word) {
  let node = this.root;
  let len = word.length
  for (let i = 0; i < len; i++) {
      const letter = word[i];
      if (!node.children[letter]) {
          node.children[letter] = new TrilNode();
      };
      node = node.children[letter];
  }

  node.isEndingChart = true;
};

/** 
* @param {string} word
* @return {boolean}
*/
WordDictionary.prototype.search = function(word, parent) {
  let node = parent || this.root;
  const len = word.length;
  for (let i = 0; i < len; i++) {
      const letter = word[i];
      if (letter === '.') {
          const childs = Object.values(node.children);

          // 如果是最后一个元素
          if (i === len - 1) {
              // 最后一个元素必须是结尾元素
              return !!childs.length && childs.some(item => item.isEndingChart);
          }

          let flag = false;
          // 回溯，只要有一个符合条件，则为查找成功
          for (let j = 0; j < childs.length; j++) {
              const result = this.search(word.slice(i + 1), childs[j]);
              if (result) flag = true;
          }
          return flag;
      } else {
          if (!node.children[letter]) return false;
          node = node.children[letter];
      }
  }

  return node.isEndingChart;
};

var TrilNode = function() {
  this.children = {};
  this.isEndingChart = false;
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
// @lc code=end

