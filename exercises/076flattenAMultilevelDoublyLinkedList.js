// You are given a doubly linked list which in addition to the next and previous pointers, it could have a child pointer, which may or may not point to a separate doubly linked list. These child lists may have one or more children of their own, and so on, to produce a multilevel data structure, as shown in the example below.

// Flatten the list so that all the nodes appear in a single-level, doubly linked list. You are given the head of the first level of the list.

// Ex


// Input
// 1 <-> 2 <-> 3 <->  4 <-> 5 <-> 6  
//             |
//             7 <->  8 <-> 9 <-> 10
//                    |
//                   11 <-> 12

// Result: 
// 1 <-> 2 <-> 7 <-> 8 <-> 11 <-> 12 <-> 9 <-> 10 <-> 4 <-> 15 <-> 16


// Time: O(n), space: 0(n) 
// var flatten = function(head) {
//   let stack = [];
//   let headCopy = head;
//   while (headCopy) {
//     if (headCopy.child) {
//       if (headCopy.next) stack.push(headCopy.next);
//       headCopy.next = headCopy.child;
//       headCopy.child = null;
//       headCopy.next.prev = headCopy;
//     }
//     if (!headCopy.next && stack.length) {
//       headCopy.next = stack.pop();
//       if (headCopy.next) headCopy.next.prev = headCopy;
//     }
//     headCopy = headCopy.next;
//   }
//   return head;
// };


// // Time: O(n), space: 0(1)
var flatten = function(head) {
  let headCopy = head;
  let tail = null;
  while (headCopy) {
    if (headCopy.child) {
      tail = headCopy.next;
      headCopy.next = headCopy.child;
      headCopy.next.prev = headCopy;
      headCopy.child = null;
      let headCopy2 = headCopy;
      
      while (headCopy2.next) {
        headCopy2 = headCopy2.next;       
      }
      
      headCopy2.next = tail;
      if (headCopy2.next) headCopy2.next.prev = headCopy2;
      tail = null;
    }
    headCopy = headCopy.next;
  }
  return head;
};