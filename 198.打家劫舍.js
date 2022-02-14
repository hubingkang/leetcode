/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    /**
    * 方法1
    */
    // if (!nums || !nums.length) return 0;

    // let len = nums.length;
    // let result = new Array(len);
    // for (let i = 0; i < len; i++) {
    //     result[i] = [0, 0];
    // };

    // // 表示不偷
    // result[0][0] = 0;
    // // 表示偷
    // result[0][1] = nums[0];
    // console.log(result);
    // for (let i = 1; i < len; i++) {
    //     // 这次不偷的情况，前面已偷的最大值
    //     result[i][0] = Math.max(result[i - 1][0], result[i - 1][1]);
    //     // 这次偷
    //     result[i][1] = result[i - 1][0] + nums[i];
    // }

    // console.log(result);
    // return Math.max(result[len - 1][0], result[len - 1][1]);

    /**
     * 方法2
     */
    // if (!nums || !nums.length) return 0;
    // if (nums.length === 1) return nums[0];

    // let len = nums.length;
    // let arr = new Array(len);

    // arr[0] = nums[0];
    // arr[1] = Math.max(nums[0], nums[1]);

    // let res = Math.max(arr[0], arr[1]);
    // for (let i = 2; i < len; i++) {
    //     // 判断当前偷， 和当前不能偷的大小。
    //     arr[i] = Math.max(arr[i - 1], arr[i - 2] + nums[i]);
    //     res = Math.max(res, arr[i]);
    // }
    // return res;

    /**
     * 方法3
     */
    // let prevMax = 0;
    // let currMax = 0;

    // for (let i = 0; i < nums.length; i++) {
    //     let temp = currMax;
    //     currMax = Math.max(prevMax + nums[i], currMax);
    //     prevMax = temp;
    // }
    // return currMax;

    /**
     * 方法4
     */
     let len = nums.length
     let dp_i_1 = 0, dp_i_2 = 0;
     let dp_i = 0;
     for (let i = len - 1; i >= 0; i--) {
         dp_i = Math.max(dp_i_1, dp_i_2 + nums[i]);
         dp_i_2 = dp_i_1;
         dp_i_1 = dp_i;
     }
     return dp_i;
};
// @lc code=end

