/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  if (head === null) return false;
  let fast = head, slow = head;
  while (fast.next !== null && fast.next.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
      if (slow === fast) return true;
  }
  return false
};
// @lc code=end

