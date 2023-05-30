/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  let m = nums1.length;
  let n = nums2.length;
  let i = 0;
  let j = 0;

  let arr = new Array(m + n);
  let index = 0;

  if (m === 0) {
    arr = nums2;
    return (arr[Math.floor((n + 1) / 2) - 1] + arr[Math.floor((n + 2) / 2) - 1]) / 2
  }
  if (n === 0) {
    arr = nums1;
    return (arr[Math.floor((m + 1) / 2) - 1] + arr[Math.floor((m + 2) / 2) - 1]) / 2
  }

  while(index < m + n) {
    if (i === m) {
      while (j < n) {
        arr[index] = nums2[j];
        j++;
        index++;
      }
      break;
    }

    if (j === n) {
      while (i < m) {
        arr[index] = nums1[i];
        i++;
        index++
      }
      break;
    }

    if (nums1[i] < nums2[j]) {
      arr[index] = nums1[i];
      i++;
    } else {
      arr[index] = nums2[j];
      j++;
    }

    index++;
  }

  return (arr[Math.floor((m + n + 1) / 2) - 1] + arr[Math.floor((m + n + 2) / 2) - 1]) / 2
};
// @lc code=end

