// Given the head of a linked list, remove the nth node from the end of the list and return its head.

// Follow up: Could you do this in one pass?

// Input: head = 1 -> 2 -> 3 -> 4 -> 5 -> null,  n = 2
// Output: 1 -> 2 -> 3 -> 5 -> null


var removeNthFromEnd = function(head, n) {
  let headClone1 = head;
  let headClone2 = head;
  let p1 = 0;
  let p2 = 0;//3
  
  while (headClone1) {
      headClone1 = headClone1.next;
      if ((p2 - p1 - 1) === n) {
          p1++;
          headClone2 = headClone2.next;
      }
      p2++;
  }
  if ((p2 - p1 - 1) !== n) return head.next; 
  headClone2.next = headClone2.next.next;
  return head;
};

// var removeNthFromEnd = function(head, n) {
//     let headClone = head;
//     let count = 0;
//     let lists = [];
  
//     while (headClone) {
//         count++;
//         lists.push(headClone);
//         headClone = headClone.next;
//     }
//     if ((count - n - 1) < 0) return head.next;    
  
//     let toAlter = lists[count - n - 1];
//     toAlter.next = toAlter.next.next;
//     return head;
// };