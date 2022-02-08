/*
 * @lc app=leetcode.cn id=433 lang=javascript
 *
 * [433] 最小基因变化
 */

// @lc code=start
/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function (start, end, bank) {
    // 广度优先遍历
    // let bankSet = new Set(bank);
    // if (!bankSet.has(end)) return -1;

    // let queue = [[start, 0]];
    // let dna = ["A", "C", "G", "T"];

    // while (queue.length) {
    //     let [node, count] = queue.shift();
    //     if (node === end) return count;

    //     for (let i = 0; i < node.length; i++) {
    //         for (let j = 0; j < dna.length; j++) {
    //             let newNode = node.slice(0, i) + dna[j] + node.slice(i+1);
    //             if (bankSet.has(newNode)) {
    //                 queue.push([newNode, count + 1]);
    //                 // 匹配上的先删除。减少后续判断。如果注释，会运行超时
    //                 bankSet.delete(newNode);
    //             }
    //         }
    //     }
    // }
    // return -1;

    // 回溯
    let result = Number.MAX_SAFE_INTEGER;
    const dfs = (step, level, current, end, bank) => {
        if (current === end) {
            result = Math.min(level, result);
        }

        // 将基因库的字符和当前字符比较。
        for (let i = 0; i < bank.length; i++) {
            let diff = 0;
            // 判断基因库和当前的值是否只有一处不同
            for (let j = 0; j < bank[i].length; j++) {
                if (current[j] != bank[i][j]) {
                    if (++diff > 1) break;
                }
            }

            // 如果只有一处不同，而且未添加进去，则进行下面的递归
            if (diff == 1 && !step.has(bank[i])) {
                step.add(bank[i]);
                dfs(step, level + 1, bank[i], end, bank);
                step.delete(bank[i])
            }
        }
    }
    dfs(new Set(), 0, start, end, bank);
    return result == Number.MAX_SAFE_INTEGER ? -1 : result;
};
// @lc code=end

