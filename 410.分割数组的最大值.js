/*
 * @lc app=leetcode.cn id=410 lang=javascript
 *
 * [410] 分割数组的最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
var splitArray = function(nums, m) {
  // 二分
  let left = Math.max(...nums);
  let right = 0;
  for (let i = 0; i < nums.length; i++) {
    right += nums[i];
  }

  const getCount = (sum) => {
    let count = 0;
    for (let i = 0; i < nums.length;) {
      let cap = sum;
      while (i < nums.length) {
        if (cap < nums[i]) break;
        cap -= nums[i];
        i++;
      }
      count++
    }
    return count;
  }

  while (left < right) {
    const mid = left + ((right - left) >> 1);
    const count = getCount(mid);
    if (count <= m) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
  // 回溯 --- 会超时
  // const track = [];
  // let result = Number.MAX_SAFE_INTEGER;
  // const sum = (arr) => {
  //   let s = 0;
  //   for (let i = 0; i < arr.length; i++) {
  //     s+= arr[i];
  //   }
  //   return s;
  // }

  // const backtrack = (start) => {
  //   if (track.length > m + 1) return;
  //   // 必须为 m 个数组， 并且到了最后一个元素
  //   if (track.length === m && start === nums.length) {
  //     let maxSum = Number.MIN_SAFE_INTEGER;
  //     for (let i = 0; i < track.length; i++) {
  //       maxSum = Math.max(maxSum, sum(track[i]));
  //     }
  //     result = Math.min(result, maxSum);
  //     return;
  //   }

  //   for (let i = start; i < nums.length; i++) {
  //     track.push(nums.slice(start, i + 1))
  //     backtrack(i + 1);
  //     // 每次回溯后都退回当前的条件
  //     track.pop();
  //   }
  // }

  // backtrack(0);
  // return result;
};
// @lc code=end

