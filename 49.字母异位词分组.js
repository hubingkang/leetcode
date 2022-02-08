/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let hash = new Map();

  for (let i = 0; i < strs.length; i++) {
    let str = strs[i].split("").sort().join("");
    if (hash.has(str)) {
      let temp = hash.get(str);
      temp.push(strs[i]);
      hash.set(str, temp);
    } else {
      hash.set(str, [strs[i]]);
    }
  }

  return [...hash.values()];

  // if (strs.length == 0) return new ArrayList();
  // Map<String, List> ans = new HashMap<String, List>();
  // for (String s : strs) {
  //     char[] ca = s.toCharArray();
  //     Arrays.sort(ca);
  //     String key = String.valueOf(ca);

  //     if (!ans.containsKey(key)) ans.put(key, new ArrayList());
  //     ans.get(key).add(s);
  // }
  // return new ArrayList(ans.values());
};
// @lc code=end
