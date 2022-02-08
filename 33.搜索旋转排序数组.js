/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    /**
     * 二分法
     */
    if (!nums.length) return -1;

    let left = 0,
        right = nums.length - 1;

    while (left <= right) {
        let mid = left + ((right - left) >> 1);

        if (nums[mid] == target) return mid;
        // 判断前面是否是升序
        if (nums[0] <= nums[mid]) {
            // 是否在前面升序的区间内
            if (nums[0] <= target && target <= nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            // 是否在后面一段的升序区间内
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    return -1;
};
// @lc code=end

