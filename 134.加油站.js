/*
 * @lc app=leetcode.cn id=134 lang=javascript
 *
 * [134] 加油站
 */

// @lc code=start
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
  // 暴力解法，超时
  // const n = gas.length;
  // for (let start = 0; start < n; start++) {
  //   let tank = 0;
  //   for (let step = 0; step < n; step++) {
  //     const i = (start + step) % n;
  //     tank += gas[i];
  //     tank -= cost[i];
  //     if (tank < 0) break;
  //     if (step === n - 1 && tank >= 0) {
  //       return start;
  //     }
  //   }
  // }
  // return -1;

  // 解法 2
  // const len = gas.length;
  // let sum = 0;
  // let start = 0;
  // let minVal = 0;
  // for (let i = 0; i < len; i++) {
  //   sum += gas[i] - cost[i];
  //   if (sum < minVal) {
  //     minVal = sum;
  //     start = i + 1;
  //   }
  // }
  
  // // 如果到终点，油量和小于 0 的肯定表示失败的
  // if (sum < 0) return -1;
  // return start === len ? 0 : start;

  // 解法 3 贪心算法，如果 i 无法到达 j，那么 i ~ j区间的也无法到 j
  const len = gas.length;
  let sum = 0;
  for (let i = 0; i < len; i++) {
    sum += gas[i] - cost[i];
  }

  if (sum < 0) return -1; // 无法到达
  
  let start = 0;
  let tank = 0;
  for (let i = 0; i < len; i++) {
    tank += gas[i] - cost[i];
    if (tank < 0) {
      start = i + 1;
      tank = 0;
    }
  }

  return start === len ? 0 : start;
};
// @lc code=end

