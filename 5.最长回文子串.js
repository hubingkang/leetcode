/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let len = s.length;
    let str = "";

    // dp[i][j] 表示 i ~ j 是否是回文子串
    let dp = new Array(len);
    for (let i = 0; i < len; i++) {
        dp[i] = new Array(len).fill(false);
    }

    for (let i = len - 1; i >= 0; i--) {
        for (let j = i; j < len; j++) {
            if (s[i] == s[j] && ((j - i) < 2 || dp[i + 1][j - 1])) {
                dp[i][j] = true;
            }

            if (dp[i][j] && (j - i + 1) > str.length) {
                str = s.substring(i, j + 1);
            }
        }
    }

    return str;
};
// @lc code=end

