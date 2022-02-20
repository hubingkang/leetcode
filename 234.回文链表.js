/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
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
 * @return {boolean}
 */
var isPalindrome = function(head) {
  // 方法 1 利用类似 树的 前中后续遍历，前后双指针进行比较
  // let left = head;

  // const traverse = (right) => {
  //   if (right === null) return true;
  //   let res = traverse(right.next);
  //   res = res && (left.val === right.val);
  //   left = left.next;
  //   return res;
  // }
  // return traverse(head)

  // 方法 2 利用快慢指针
  let fast = head;
  let slow = head;
  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
  }

  // 果fast指针没有指向null，说明链表长度为奇数，slow还要再前进一步：
  if (fast !== null) {
    slow = slow.next;
  }

  const reverse = (head) => {
    let previousHead = null;
    let current = head;
    while (current !== null) {
      const next = current.next;
      current.next = previousHead;
      previousHead = current;
      current = next;
    }
    return previousHead;
  }

  // 将 slow 后面的进行反转 然后进行比较
  let left = head;
  let right = reverse(slow);
  while (right !== null) {
    if (left.val !== right.val) return false;
    left = left.next;
    right = right.next;
  }
  return true;
};
// @lc code=end

