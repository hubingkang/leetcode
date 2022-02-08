/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var maxArea = function (arr) {
  let maxArea = 0;
  for (let i = 0, j = arr.length - 1; i < j; ) {
    // minHeight后面是i++, j-- 并不是i, j 改变后的值
    let minHeight = arr[i] < arr[j] ? arr[i++] : arr[j--];

    // 上面语句执行完了，i或者j被改变了。得把改变的1加回来
    let area = (j - i + 1) * minHeight;
    maxArea = Math.max(maxArea, area);
  }

  return maxArea;
};
// @lc code=end
