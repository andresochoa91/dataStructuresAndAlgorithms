/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/*
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

var addTwoNumbers = function(l1, l2) {
  if (!l1 && !l2) {
      return null;
  }
  function recursive (head1, head2, acc="", t = 0) {
      if (!head1 && !head2 && !t) {
          return acc;
      }
      if (!head1) {
          head1 = new ListNode(0);
      } 
      if (!head2) {
          head2 = new ListNode(0);
      } 
      let sum = (Number(head1.val) + Number(head2.val) + t).toString(); 
      t = 0;
      if (sum.length === 2) {
          sum = sum[1];
          t = 1;
      }
      acc = `${sum}${acc}`;
      return recursive(head1.next, head2.next, acc, t);
  }
  let num = recursive(l1, l2);
  let newNode = new ListNode(num[0]);
  for (let i = 1; i < num.length; i++) {
      newNode = new ListNode(num[i], newNode);
  }
  return newNode;
};
