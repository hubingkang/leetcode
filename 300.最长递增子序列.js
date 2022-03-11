/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  // // 因为 size 大于 1, 即至少长度为 1
  // const dp = new Array(nums.length + 1).fill(1);

  // for (let i = 0; i < nums.length; i++) {
  //   // 每次遍历的值和前面的比较
  //   for (let j = 0; j < i; j++) {
  //     if (nums[i] > nums[j]) {
  //       dp[i] = Math.max(dp[i], dp[j] + 1);
  //     }
  //   }
  // }

  // return Math.max(...dp);


  // 根据分扑克牌算法原理 - 二分
  // 最顶部元素的大小
  const top = new Array(nums.length);
  let piles = 0;
  for (let i = 0; i < nums.length; i++) {
    // 当前要处理的扑克
    const poker = nums[i];
    /***** 搜索左侧边界的二分查找 *****/
    let left = 0;
    let right = piles;
    while (left < right) {
      let mid = left + ((right - left) >> 1);
      if (top[mid] >= poker) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }

    // 找到最后一个都没有找到合适的牌堆，新建一堆
    if (left === piles) piles++;
    // 把这张牌放到牌堆顶
    top[left] = poker;
  }
  // 牌堆数就是 LIS 长度
  return piles;
};
// @lc code=end

