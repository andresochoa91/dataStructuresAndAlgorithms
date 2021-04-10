// Given head, the head of a linked list, determine if the linked list has a cycle in it.
// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.
// Return true if there is a cycle in the linked list. Otherwise, return false.

// Example 1:
// Input: head = [3,2,0,-4], pos = 1
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).

// Example 2:
// Input: head = [1,2], pos = 0
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.

// Example 3:
// Input: head = [1], pos = -1
// Output: false
// Explanation: There is no cycle in the linked list.


// O(n) O(n)
// var hasCycle = function(head) {
//   if (!head) return false;
//   const lists = new Set();
  
//   while (head) {
//     if (lists.has(head)) return true;
//     lists.add(head);
//     head = head.next;
//   }
//   return false;  
// };


// O(n) O(1)
var hasCycle = function(head) {
  if (!head || !head.next) return false;
  
  let t = head.next;
  let h = head.next.next;
  
  while (h) {
    if (t === h) return true;
    
    if (t) {
      t = t.next;
    } else {
      return false;
    }
    
    if (h.next) {
      h = h.next.next;
    } else {
      return false;
    }
    
  }
  return false;  
};