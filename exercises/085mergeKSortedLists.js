// // You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.
// 
// // Merge all the linked-lists into one sorted linked-list and return it.
// 
// // Explanation:
// // [
//   // 1->4->5,
//   // 1->3->4,
//   // 2->6
// // ]
// 
// // Merged: 
// // 1->1->2->3->4->4->5->6



// const mergeTwoLists = (node1, node2) => {
//   if (!node1) return node2; 
//   if (!node2) return node1;
//   if (node1.val <= node2.val) {
//     node1.next = mergeTwoLists(node1.next, node2);
//     return node1;
//   } 
//   node2.next = mergeTwoLists(node1, node2.next);
//   return node2;    
// }

// var mergeKLists = function(lists) {
//   if (!lists.length) return null;
//   let pointer = lists.length - 1;
//   let current = lists[pointer];
//   pointer--;   
//   while (pointer > -1) {
//     current = mergeTwoLists(current, lists[pointer]);
//     pointer--;
//   }
//   return current;
// };


var mergeKLists = function(lists) {
  let countNulls = 0;
  let newNode = null;
  let ref1 = null;
  let ref2 = null;
  
  while (countNulls !== lists.length) {
    let min = Infinity;
    countNulls = 0;
    for (let i = 0; i < lists.length; i++) {
      if (lists[i] === null) {
        countNulls++;
        continue;
      }
      if (lists[i].val < min) min = lists[i].val;
    }
    for (let i = 0; i < lists.length; i++) {
      if (lists[i] !== null && lists[i].val === min) {           
        if (newNode) {
          ref1 = new ListNode(lists[i].val, null);
          ref2.next = ref1;
          ref2 = ref1;
        } else {
          newNode = new ListNode(lists[i].val, null);   
          ref1 = newNode;   
          ref2 = newNode;
        }
        lists[i] = lists[i].next;
        break;
      }
    }
  }
  return newNode;
}

