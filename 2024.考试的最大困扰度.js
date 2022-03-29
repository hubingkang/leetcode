/*
 * @lc app=leetcode.cn id=2024 lang=javascript
 *
 * [2024] 考试的最大困扰度
 */

// @lc code=start
/**
 * @param {string} answerKey
 * @param {number} k
 * @return {number}
 */
var maxConsecutiveAnswers = function(answerKey, k) {
  // 双指针
  const maxConsecutiveChar = (answerKey, k, letter) => {
    const len = answerKey.length;
    let res = 0;
    let left = 0;
    let right = 0;
    while (right < len) {
      if (answerKey[right] !== letter) k--;
      while (k < 0) {
        if (answerKey[left] !== letter) k++;
        left++;
      }
      res = Math.max(res, right - left + 1);
      right++;
    }
    return res;
  };

  return Math.max(maxConsecutiveChar(answerKey, k, 'T'), maxConsecutiveChar(answerKey, k, 'F'));
};
// @lc code=end

