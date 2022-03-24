/*
 * @lc app=leetcode.cn id=1024 lang=javascript
 *
 * [1024] 视频拼接
 */

// @lc code=start
/**
 * @param {number[][]} clips
 * @param {number} time
 * @return {number}
 */
var videoStitching = function(clips, time) {
  // 先排序
  clips.sort((a,b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1]
    }
    return a[0] - b[0];
  })

  const len = clips.length;
  let i = 0;
  let currentEnd = 0;
  let nextEnd = 0;
  let res = 0;

  // 当前的开始必须小于之前的结束
  while (i < len && clips[i][0] <= currentEnd) {
    while (i < len && clips[i][0] <= currentEnd) {
      nextEnd = Math.max(nextEnd, clips[i][1]);
      i++;
    }
    res++;
    currentEnd = nextEnd;
    if (nextEnd >= time) {
      return res;
    }
  }
  return -1;
};
// @lc code=end

