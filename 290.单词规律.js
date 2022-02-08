/*
 * @lc app=leetcode.cn id=290 lang=javascript
 *
 * [290] 单词规律
 */

// @lc code=start
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
  const char2word = new Map();
  const word2char = new Map();

  const words = s.split(" ");
  if (words.length !== pattern.length) return false;

  for (const [i, word] of words.entries()) {
    const char = pattern[i];
    if (char2word.has(char) && char2word.get(char) !== word
      || word2char.has(word) && word2char.get(word) !== char) {
        return false;
      }
    
    char2word.set(char, word);
    word2char.set(word, char);
  }

  return true;
};
// var wordPattern = function(pattern, s) {
//   const strArr = s.split(" ");
//   const queue = pattern.split("")
//   const map = {};
//   let str = '';

//   for (let i = 0; i < strArr.length; i++) {
//     const word = map[strArr[i]];

//     if (!word) {
//         const res = Object.values(map).includes(queue[i]);
//         if (res) return false;
//         map[strArr[i]] = queue[i]
//     }
    
//     str = str + map[strArr[i]];
//   }

//   return pattern === str;
// };
// @lc code=end

