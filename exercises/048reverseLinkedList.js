class ListNode {
  constructor(val, next) {
    this.val = val;
    this.next = next ? next : null;
  }
}
  
let head1 = new ListNode(5)
let head2 = new ListNode(4, head1);
let head3 = new ListNode(3, head2);
let head4 = new ListNode(2, head3);
let head5 = new ListNode(1, head4);
  
console.log(head5);
  
// // First Approach using recursion and creating new head (Not bad)
// var reverseList = function(head) {    
  // if (!head) return null;
  // const traverse = (node, nextNode) => {
  //     if (node === null) {
  //         return nextNode;    
  //     }
  //     let newNode = new ListNode(node.val, nextNode);
  //     return traverse(node.next, newNode)
  // }
  // return traverse(head, null);
// }

// // Second Approach, iterative, creating new head (Not bad)
// var reverseList = function(head) {    
//     if (!head) return null;
  
//     let newNode = new ListNode(head.val);
//     head = head.next;
  
//     while (head !== null) {
//         newNode = new ListNode(head.val, newNode);
//         head = head.next;
//     }
//     return newNode;
// }


// // Efficient solution mutating the head into the desired result :) (Creating helper linked list) 
// var reverseList = function (head) {
//   let next = new ListNode(head.val, head.next);
//   let prev = null;

//   while (next) {
//     head.val = next.val;
//     head.next = prev;
//     prev = new ListNode(head.val, head.next);
//     next = next.next;
//   }
//   return head;
// }


// //Most efficient solution without creating new Linked List, but it mutates the linked list into a NOT desired result >:(
// var reverseList = function (head) {
//   let prev = null;
//   // let current = head;

//   while (head) {
//     let next = head.next;
//     head.next = prev;
//     prev = head;
//     head = next;
//   }
//   return prev;
// }


// //Mutating original using stack
var reverseList = function (head) {
  if (!head) return null;
  let stack = [];
  let newHead = head;

  while (newHead) {
    stack.push(newHead.val);
    newHead = newHead.next;
  }

  newHead = head;
    
  while (newHead) {
    newHead.val = stack.pop();
    newHead = newHead.next;
  }

  return head;
}


console.log(reverseList(head5));