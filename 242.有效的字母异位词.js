/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  // let newS = s.split("").sort().join("");
  // let newT = t.split("").sort().join("");
  // return newS === newT;
  let hash = {};
  if (s.length !== t.length) return false;
  for (let i = 0; i < s.length; ++i) {
    hash[s[i]] = hash[s[i]] ? hash[s[i]] + 1 : 1;
    hash[t[i]] = hash[t[i]] ? hash[t[i]] - 1 : -1;
  }

  for (let key in hash) {
    if (hash[key] !== 0) return false;
  }
  return true;
};
// @lc code=end
