/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/*
 * @param {ListNode} head
 * @return {ListNode}
 */

 //Iterative
var reverseList = function(head) {
  if (!head) {
      return null;
  }
  let node = new ListNode(head.val);
  while (head) {
      head = head.next;
      if (head) {
          node = new ListNode(head.val, node);
      }
  }
  return node;
} 

// //Recursive
// var reverseList = function(head) {
//     if (!head) {
//         return null;
//     }
//     let node = new ListNode(head.val);    
//     function recursive (n) {
//         if (!n) {
//             return node;    
//         }
//         node = new ListNode(n.val, node);
//         return recursive(n.next);
//     }
//     return recursive(head.next);
// };