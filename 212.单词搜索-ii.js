/*
 * @lc app=leetcode.cn id=212 lang=javascript
 *
 * [212] 单词搜索 II
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
 var findWords = function(board, words) {
    const Trie = function() {
        this.root = new TrieNode();
    }

    const TrieNode = function() {
        this.children = {};
        this.data = '';
        this.isEndingChar = false;
    }

    Trie.prototype.insert = function(word) {
        let node = this.root;
        for (let i = 0; i < word.length; i++) {
            const letter = word[i];
            if (!node.children[letter]) {
                const newNode = new TrieNode();
                newNode.data = node.data + letter;
                node.children[letter] = newNode;
            }
            node = node.children[letter];
        }
        node.isEndingChar = true;
    }


    const result = [];
    const x = [-1, 1, 0, 0];
    const y = [0, 0, -1, 1];

     // 构建单词 Trie 树
    const wordsTrie = new Trie();
    const len = words.length;
    for (let i = 0; i < len; i++) {
        wordsTrie.insert(words[i]);
    }

    let row = board.length;
    let col = board[0].length;
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            search(wordsTrie.root, i, j)
        }
    }

    function search (node, i, j) {
        if (node.isEndingChar) {
            result.push(node.data);
            node.isEndingChar = false;
        }
        // 越界退出
        if (i < 0 || i >= row || j < 0 || j >= col) return;

        const letter = board[i][j];
        if (!node.children[letter]) return;

        board[i][j] = '#';
        for (let d = 0; d < x.length; d++) {
            search(node.children[letter], i+y[d], j+x[d]);
        }
        board[i][j] = letter;
    }

    return result;
};
// var findWords = function (board, words) {
//     let res = [];
//     // 上下左右四个方位，便于多个方向查找
//     const x = [-1, 1, 0, 0];
//     const y = [0, 0, -1, 1];

//     function buildTrie() {
//         const root = {};
//         for (let w of words) {
//             let node = root;
//             for (let c of w) {
//                 if (!node[c]) node[c] = {};
//                 node = node[c];
//             };
//             // 在节点的末尾村上单词
//             node.word = w;
//         }
//         return root;
//     }

//     function search(node, i, j) {
//         if (node.word) {
//             res.push(node.word);
//             node.word = null; // 找到word 后设置为null
//         }

//         // 越界的情况，直接返回
//         if (i < 0 || i >= board.length || j < 0 || j >= board[i].length) return;
//         //  如果首字母在trie 中找不到
//         if (node[board[i][j]] == null) return;

//         const c = board[i][j];
//         // 防止重复查找，先设置#后面赋值回来
//         board[i][j] = "#";
//         for (let d = 0; d < x.length; d++) {
//             search(node[c], i + y[d], j + x[d]);
//         }

//         board[i][j] = c;
//     }

//     // 将单词源变成trie
//     const root = buildTrie();
//     for (let i = 0; i < board.length; i++) {
//         for (let j = 0; j < board[i].length; j++) {
//             search(root, i, j);
//         }
//     }

//     return res;
// };
// @lc code=end

