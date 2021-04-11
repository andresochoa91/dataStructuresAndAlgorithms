// Given the head of a singly linked list, return true if it is a palindrome.

// Example 1:
// Input: head = [1,2,2,1]
// Output: true

// Example 2:
// Input: head = [1,2]
// Output: false


// // O(n) O(n)
// var isPalindrome = function(head) {
//   let newList = null;
//   let cloneHead = head;
  
//   while (cloneHead) {
//     newList = new ListNode(cloneHead.val, newList);
//     cloneHead = cloneHead.next;
//   }
  
//   while (head) {
//     if (head.val !== newList.val) return false;
//     head = head.next;
//     newList = newList.next;
//   }
  
//   return true;
// };


// // O(n) O(1)
var isPalindrome = function(head) {  
  let slow = head;
  let fast = head.next;
  
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }         
  
  let prev = null;
  let current = slow.next;

  while (current) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  
  while (prev) {
    if (prev.val !== head.val) return false 
    prev = prev.next;  
    head = head.next;  
  }
  return true;
};
