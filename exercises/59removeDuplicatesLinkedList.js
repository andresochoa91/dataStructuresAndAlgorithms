/* Given a sorted linked list, delete all duplicates such that each element appear only once.

Example 1:

Input: 1->1->2
Output: 1->2

Example 2:

Input: 1->1->2->3->3
Output: 1->2->3

 */

var deleteDuplicates = function(head, temp) {
  if (!head) return null;   
  if (head.val === temp) {
      return deleteDuplicates(head.next, temp);
  }
  head.next = deleteDuplicates(head.next, head.val);
  return head;
};