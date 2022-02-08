/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
  let len = s.length;
  if (len % 2) return false;
  let queue = [];
  for (let i = 0; i < len; i++) {
      switch (s[i]) {
          case ')':
              if (queue.pop() !== '(') return false;
              break;
          case '}':
              if (queue.pop() !== '{') return false;
              break;
          case ']':
              if (queue.pop() !== '[') return false;
              break;
          default:
            queue.push(s[i])
      }
  }

  return queue.length === 0;
};
// @lc code=end
