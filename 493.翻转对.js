/*
 * @lc app=leetcode.cn id=493 lang=javascript
 *
 * [493] 翻转对
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function (nums) {
    function mergeSort(nums, left, right) {
        if (right <= left) return 0;

        let mid = left + ((right - left) >> 1);
        let count = mergeSort(nums, left, mid) + mergeSort(nums, mid + 1, right);

        // 左边逐个和右边对比，左右都是上一轮排好序的
        for (let i = left, j = mid + 1; i <= mid; i++) {
            // 如果左边num[i] * 2 不大于右边num[j]的数，后面的数更大，就不用对比了。
            while (j <= right && (nums[i] / 2) > nums[j]) j++;
            count += j - (mid + 1);
        }

        let temp = [],
            i = left, // 注意这个i 是从 left 开始的。
            j = mid + 1,
            k = 0;

        while (i <= mid && j <= right) {
            temp[k++] = nums[i] <= nums[j] ? nums[i++] : nums[j++];
        }

        while (i <= mid) temp[k++] = nums[i++];
        while (j <= right) temp[k++] = nums[j++];

        for (let m = 0; m < temp.length; m++) {
            nums[left + m] = temp[m];
        }

        return count;
    };
    return mergeSort(nums, 0, nums.length - 1);
};
// @lc code=end

