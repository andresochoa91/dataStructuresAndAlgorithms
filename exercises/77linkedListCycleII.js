// Given a linked list, return the node where the cycle begins. If there is no cycle, return null.

// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

// Notice that you should not modify the linked list.


// Input: head = [3,2,0,-4], pos = 1

// 3 -> 2 --> 0
//      ^    /
//       \  /
//        4

// Output: tail connects to node index 1
// Explanation: There is a cycle in the linked list, where tail connects to the second node.


// // Time O(n), Space O(n)
// var detectCycle = function(head) {
//     const myNodes = new Set();
//     myNodes.add(head);
//     while (head) {
//         head = head.next;
//         if (myNodes.has(head)) {
//             return head; 
//         }
//         myNodes.add(head);
//     }
//     return null;
// };

// Time O(n), Space O(1) 
// Using Floyd's Tortoise and Hare algorithm
var detectCycle = function(head) {
  let hare = head;
  let tortoise = head;
  
  while (hare) {
      tortoise = tortoise.next;
      if (!hare.next) return null;
      hare = hare.next.next;
      if (tortoise === hare) {
          while (head !== tortoise) {
              head = head.next;
              tortoise = tortoise.next;
          }
          return head;
      }
  }
  return null;    
};
