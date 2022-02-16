/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  const result = [];
  const track = [];
  let index = 0;

  const backtrack = () => {
    const sumRuslt = sum(track);
    if (sumRuslt === target) {
      result.push([...track]);
    } else if (sumRuslt > target) {
      return;
    }

    for (let i = index, len = candidates.length; i < len; i++) {
      // 目的是不要再从头开始找，这样会有重复的值，进入下次回溯的时候从当前位置开始查找
      index = i;
      track.push(candidates[i]);
      backtrack();
      track.pop();
    }
  }

  const sum = (arr) => {
    let res = 0;
    for (let i = 0; i < arr.length; i++) {
      res += arr[i];
    }
    return res;
  }

  backtrack()
  return result;
};
// @lc code=end

