/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  if (k === 0 || !head || !head.next) {
    return head;
  }

  let current = head;
  let len = 1;
  while (current.next) {
    current = current.next;
    len++
  }

  let add = len - k % len;
  if (add === len) {
    return head
  }

  current.next = head
  while(add--) {
    current = current.next;
  }

  const result = current.next;
  current.next = null;
  return result;

};
// @lc code=end

