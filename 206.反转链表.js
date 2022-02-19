/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
 * @return {ListNode}
 */
var reverseList = function(head) {
  // 方法 1 通过新增链表
  // let current = head;
  // let previous = null;
  // while(current) {
  //   const node = current.next;
  //   current.next = previous;
  //   previous = current;
  //   current = node;
  // }

  // return previous;

  // 方法 2 通过递归实现
  const reverse = (head) => {
    if (head === null || head.next === null) return head;
    const node = reverse(head.next);
    head.next.next = head;
    head.next = null;
    return node;
  }
  return reverse(head)
};
// @lc code=end

