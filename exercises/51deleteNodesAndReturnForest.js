// Given the root of a binary tree, each node in the tree has a distinct value.

// After deleting all nodes with a value in to_delete, we are left with a forest (a disjoint union of trees).

// Return the roots of the trees in the remaining forest.  You may return the result in any order.


function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

let newTree = new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3, new TreeNode(6), new TreeNode(7)));

var delNodes = function(root, to_delete) {
  let nodes = [];
  let queue = [root];
  function traverse (node) {
      if (node === null) {
          return null;            
      }
      if (to_delete.includes(node.val)) {
          queue.push(node.left);
          queue.push(node.right);
          return null;
      } 
      let newNode = new TreeNode(node.val);
      newNode.left = traverse(node.left);
      newNode.right = traverse(node.right);
      return newNode;
  }

  let nodeToAdd;
  while (queue.length > 0) {
    nodeToAdd = traverse(queue[0]);
    if (nodeToAdd !== null) {
        nodes.push(nodeToAdd);
    }
    queue.shift();
  }
  return nodes;
};

console.log(delNodes(newTree, [2, 3]));