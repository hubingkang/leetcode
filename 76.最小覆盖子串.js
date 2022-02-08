/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  let res = ''
  let start = 0
  const map = new Map()
  let needMatch = t.length

  for (let i = 0, len = t.length; i < len; i++) {
    const alpha = t[i]
    if (map.has(alpha)) {
      map.set(alpha, map.get(alpha) + 1)
    } else {
      map.set(alpha, 1)
    }
  }

  for (let i = 0, len = s.length; i < len; i++) {
    const alpha = s[i]
    if (map.has(alpha)) {
      map.set(alpha, map.get(alpha) - 1)
      // 注意当前的判断，如果字母还是 >= 0，说明匹配上了一个
      if (map.get(alpha) >= 0) needMatch--

      while (needMatch === 0) {
        if (!map.has(s[start])) {
          start++
          continue
        }

        if (res === '' || res.length > i - start + 1) {
          res = s.slice(start, i + 1)
        }

        if (map.get(s[start]) === 0) {
          needMatch++
          map.set(s[start], 1)
        } else {
          map.set(s[start], map.get(s[start]) + 1)
        }
        start++
      }
    }
  }
  return res
};
// @lc code=end

