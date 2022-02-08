/*
 * @lc app=leetcode.cn id=127 lang=javascript
 *
 * [127] 单词接龙
 */

// @lc code=start
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
    /**
     * BFS
     */
    // let len = wordList.length;
    // if (len === 0 || wordList.indexOf(endWord) < 0) return 0;


    // let visited = new Array(len).fill(false);

    // let queue = [beginWord];
    // let depth = 0;

    // while (queue.length) {
    //     depth++;
    //     // 注意 这里先取出长度。不然下面遍历，长度一直在改变
    //     let size = queue.length;
    //     // 每次执行完一轮队列
    //     for (let i = 0; i < size; i++) {
    //         let node = queue.pop();
    //         for (let j = 0; j < len; j++) {
    //             let next = wordList[j];

    //             // 如果访问过了，则跳过。
    //             if (visited[j]) {
    //                 continue;
    //             }

    //             // 判断能否通过变换一个单词到一下单词
    //             if (!canTransform(node, next)) {
    //                 continue;
    //             }

    //             // 如果下一个为目标，直接返回
    //             if (next == endWord) {
    //                 return depth + 1;
    //             }

    //             visited[j] = true;
    //             // 队列从前加
    //             queue.unshift(next);
    //         }
    //     }
    // }

    // // 通过charCodeAt 表示不同点
    // function canTransform(node, next) {
    //     let count = 0;
    //     for (let i = 0; i < node.length; i++) {
    //         if (node[i].charCodeAt() != next[i].charCodeAt()) {
    //             count++
    //         }
    //     }
    //     return count === 1;
    // };

    // return 0;

    /**
     * 双向BFS
     */

    let len = wordList.length;
    if (len === 0 || wordList.indexOf(endWord) < 0) return 0;

    let visited1 = new Array(len).fill(false);
    let queue1 = [beginWord];

    let visited2 = new Array(len).fill(false);
    let queue2 = [endWord];

    // 因为从后BFS 第一个自身肯定是被访问的，先设置被访问。
    visited2[wordList.indexOf(endWord)] = true;

    let depth = 0;
    while (queue1.length && queue2.length) {
        // 从前面执行，从后执行。哪个执行的少，就执行哪个。
        if (queue1.length > queue2.length) {
            // 后面执行少，前面和后面队列调换位置。
            [queue1, queue2] = [queue2, queue1];
            [visited1, visited2] = [visited2, visited1];
        }

        // queue1 始终是执行最少的哪个
        depth++;
        let size1 = queue1.length;

        while (size1-- > 0) {
            let node = queue1.pop();
            for (let i = 0; i < len; i++) {
                let next = wordList[i];

                // 如果访问过了，则跳过。
                if (visited1[i]) continue;

                // 判断能否通过变换一个单词到一下单词
                if (!canTransform(node, next)) continue;

                // 如果下一个为目标，直接返回
                if (visited2[i]) return depth + 1;

                visited1[i] = true;
                // 队列从前加
                queue1.unshift(next);
            }
        }
    }

    // 通过charCodeAt 表示不同点
    function canTransform(node, next) {
        let count = 0;
        for (let i = 0; i < node.length; i++) {
            if (node[i].charCodeAt() != next[i].charCodeAt()) {
                count++
                if (count > 1) return false;
            }
        }
        return count === 1;
    };

    return 0;
};
// @lc code=end

