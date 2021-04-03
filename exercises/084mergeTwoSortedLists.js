// Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.

// Node 1: 1 -> 2 -> 4 
// Node 2: 1 -> 3 -> 4
// Output: 1 -> 1 -> 2 -> 3 -> 4 -> 4

const mergeTwoLists = (node1, node2) => {
  if (!node1) return node2; 
  if (!node2) return node1;
  if (node1.val <= node2.val) {
    node1.next = mergeTwoLists(node1.next, node2);
    return node1;
  } 
  node2.next = mergeTwoLists(node1, node2.next);
  return node2;    
}
