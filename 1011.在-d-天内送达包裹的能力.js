/*
 * @lc app=leetcode.cn id=1011 lang=javascript
 *
 * [1011] 在 D 天内送达包裹的能力
 */

// @lc code=start
/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function(weights, days) {
  let left = Math.max(...weights); // 依题最小为最大的包裹
  let right = 0; // 最大为所有

  for (let i = 0; i < weights.length; i++) {
    right += weights[i];
  }

  const getDays = (count) => {
    let needDays = 0;
    // 尽可能装多东西
    for (let i = 0; i < weights.length;) {
      let cap = count;
      while (i < weights.length) {
        if (cap < weights[i]) break;
        cap -= weights[i];
        i++;
      }
      needDays++;
    }

    return needDays;
  }

  while (left < right) {
    const mid = left + ((right - left) >> 1);
    const needDays = getDays(mid);
    if (needDays <= days) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
};
// @lc code=end

