/*
 * @lc app=leetcode.cn id=875 lang=javascript
 *
 * [875] 爱吃香蕉的珂珂
 */

// @lc code=start
/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
  let left = 1; // 最少一次吃 0 
  let right = Math.max(...piles); //左闭右开的二分查找方式，因此需要加一

  const getHours = (n) => {
    let hours = 0;
    for (let i = 0; i < piles.length; i++) {
      hours += Math.trunc(piles[i] / n);
      if (piles[i] % n) hours++;
    };
    return hours;
  }

  while (left < right) {
    const mid = left + ((right - left) >> 1); // 这里必须加括号
    const hours = getHours(mid);
    if (hours <= h) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
};
// @lc code=end

