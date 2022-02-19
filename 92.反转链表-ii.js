/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
  let successor = null;
  // 反转以 head 为起点的 n 个节点，返回新的头结点
  const reverseN = (head, n) => {
    if (n === 1) {
      // 相当于反转的开始节点
      successor = head.next;
      return head;
    }

    const last = reverseN(head.next, n - 1);
    head.next.next = head;
    head.next = successor;
    return last;
  }

  // base case
  if (left == 1) {
    return reverseN(head, right);
  };
  head.next = reverseBetween(head.next, left - 1, right - 1);
  return head;
};
// @lc code=end

