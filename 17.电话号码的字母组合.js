/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    if (!digits) return [];
    const map = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "qprs",
        "8": "tuv",
        "9": "wxyz"
    };

    if (digits.length === 1) return map[digits].split("");
    let result = [];

    // 方法一 递归
    //     const last = letterCombinations(digits.substring(1))
    //     let start = digits[0];
    //     for (let m = 0; m < map[start].length; m++) {
    //         for (let n = 0; n < last.length; n++) {
    //             result.push(map[start][m] + last[n])
    //         }
    //     }

    // 方法二 回溯
    const backtrack = (digits, combination) => {
        if (!digits.length) {
            result.push(combination);
        } else {
            const current = digits[0];
            const letters = map[current];
            for (let i = 0; i < letters.length; i++) {
                backtrack(digits.substring(1), combination + letters[i])
            }
        }
    }

    backtrack(digits, "")

    return result;
};
// @lc code=end

