/*
 * @lc app=leetcode.cn id=394 lang=javascript
 *
 * [394] 字符串解码
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */

// 方法一：通过栈
// var decodeString = function(s) {
//   let stack = []; // 存放数字
//   let str = []; // 存在之前的字符串

//   let res = '', multi = 0;

//   for (let i = 0; i < s.length; i++) {
//       if (!isNaN(s[i])) {
//           multi = multi * 10 + Number(s[i]);
//       } else if (s[i] === '[') {
//           stack.push(multi);
//           str.push(res);
//           multi = 0;
//           res = '';
//       } else if (s[i] === ']') {
//           res = str.pop() + res.repeat(stack.pop());
//       } else {
//           res += s[i];
//       }
//   }
//   return res;
// };

// 方法2：递归
var decodeString = function(s) {
  function dfs(s, index) {
    let res = '', multi = 0;

    // 关键点，每次递归的点都是传入的起点
    for (var i = index; i < s.length; i++) {
      if (s[i] >= 0 && s[i] <= 9) {
        multi = multi * 10 + Number(s[i]);
      } else if (s[i] === '[') {
        // 遇到 [ 则递归进入，获取 [] 结果，并拿到遍历到的新位置
        const [newIndex, result] = dfs(s, i + 1);
        res = res + result.repeat(multi);
        i = newIndex;
        multi = 0;
      } else if (s[i] === ']') {
        // 将下标也传入，方便外部更新递归位置。
        return [i, res]
      } else {
        res += s[i]
      }
    }

    return res;
  }

  return dfs(s, 0)
};

// @lc code=end

