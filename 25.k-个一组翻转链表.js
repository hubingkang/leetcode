/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
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
var reverseKGroup = function(head, k) {
  if (head == null) return null;

  /** 反转区间 [a, b) 的元素，注意是左闭右开 */
  const reverse = (a, b) => {
    let previousHead = null;
    let current = a;
    let next = a;

    while(current !== b) {
      next = current.next;
      current.next = previousHead;
      previousHead = current;
      current = next;
    }

    return previousHead;
  }

  let a = head;
  let b = head;
  for (let i = 0; i < k; i++) {
    // 如果不足 k 个元素，则原样返回
    if (b === null) return head;
    b = b.next;
  };

  // newHead 都是每次递归的头节点
  const newHead = reverse(a, b)
  // a 节点经过上面的反转后成为尾结点，尾结点连接新的头结点
  a.next = reverseKGroup(b, k);
  return newHead;
};
// @lc code=end

