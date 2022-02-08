/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    // // 方法1
    // const arr = [[]];
    // for (let i = 0; i < nums.length; i++) {
    //     const newArr = [];
    //     for (let j = 0; j < arr.length; j++) {
    //         newArr.push([...arr[j], nums[i]]);
    //     }

    //     arr.push(...newArr);
    // }

    // return arr;

    // 使用回溯
    const result = [];

    const fn = (i, nums, temp) => {
        // 每次组合符合条件都添加到结果集中
        result.push([...temp]);
        for (let j = i; j < nums.length; ++j) {
            temp.push(nums[j]);
            // 进行下一层查找
            fn(j + 1, nums, temp);
            // 走到头删除，重新找
            temp.pop();
        }
    }

    fn(0, nums, []);
    return result;
};
// @lc code=end

