/*
 * @lc app=leetcode.cn id=870 lang=javascript
 *
 * [870] 优势洗牌
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var advantageCount = function(nums1, nums2) {
  const result = [];

  const len = nums2.length;

  // nums2中元素的顺序不能改变，因为计算结果的顺序依赖nums2的顺序，所以不能直接对nums2进行排序，而是利用其它数据结构来辅助。
  const priorityQueue = new Array(len).fill(0).map((v, i) => i);
  priorityQueue.sort((x, y) => {
    return nums2[y] - nums2[x]; // 根据值降序排序 它的下标
  });

  nums1.sort((a, b) => b - a); // nums1 降序排序
  let left = 0;
  let right = nums1.length - 1;

  let i = 0;
  while (i < len) {
    let currentMaxIndex = priorityQueue[i];
    if (nums1[left] > nums2[currentMaxIndex]) {
      // 如果最大的大于，则直接放入对应的位置
      result[currentMaxIndex] = nums1[left];
      left++
    } else {
      // 如果最大的不如对方，则加入最小的值
      result[currentMaxIndex] = nums1[right];
      right--;
    }
    i++
  }
  return result;
};
// @lc code=end

