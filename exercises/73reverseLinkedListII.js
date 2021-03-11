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
console.log(JSON.stringify(head5));

// var reverseBetween = function(head, left, right) {
        
//   let position = 1;
  
//   const reverseList = (head) => {
//     let newList = new ListNode(head.val);
//     let newListRef = newList;
//     let newHead = head;
        
//     while (position !== right) {
//       newHead = newHead.next;
//       newList = new ListNode(newHead.val, newList);
//       position++;
//     }
//     newHead = newHead.next;
//     newListRef.next = newHead; 
//     return newList;
//   }
  
//   const traverse = (head) => {
//     if (position === left) {
//       return reverseList(head);        
//     }
//     position++;
//     head.next = traverse(head.next);                        //Mutating the head 
//     return head;                                            //Mutating the head         
//     // return new ListNode(head.val, traverse(head.next));  //Not mutating the head
//   }
//   return traverse(head);  
// };


// var reverseBetween = function(head, left, right) {
        
//   let position = 1;
  
//   const reverseList = (h) => {
//     let hCopy = h;
//     h = h.next;
//     hCopy.next = null
//     let ref = hCopy;

//     while (position < right) {
//       position++;
//       let next = h.next;
//       h.next = hCopy;
//       hCopy = h;
//       h = next;
//     }
//     ref.next = h;
//     return hCopy
//   }
  
//   const traverse = (head) => {
//     if (position === left) {
//       return reverseList(head);        
//     }
//     position++;
//     head.next = traverse(head.next);
//     return head;
//   }
//   return traverse(head);  
// };

//Iterative solution


var reverseBetween = function(head, m, n) {
  let currentPos = 1
  let currentNode = head;
  let start = head;
  
  while(currentPos < m) {
    start = currentNode;
    currentNode = currentNode.next;
    currentPos++;
  }
  
  let newList = null 
  let   tail = currentNode;
  
  while(currentPos >= m && currentPos <= n) {
    const next = currentNode.next;
    currentNode.next = newList;
    newList = currentNode;
    currentNode = next;
    currentPos++;
  }
  
  start.next = newList;
  tail.next = currentNode;
  
  if(m > 1) {
    return head
  } else {
    return newList;
  }
};


console.log(JSON.stringify(reverseBetween(head5, 2, 4)))
console.log(JSON.stringify(head5))
console.log(JSON.stringify(reverseBetween(head1, 1, 1)))
console.log(JSON.stringify(reverseBetween(head2, 1, 1)))



