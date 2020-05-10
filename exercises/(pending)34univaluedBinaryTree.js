//  A binary tree is univalued if every node in the tree has the same value.
//  Return true if and only if the given tree is univalued.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/*
 * @param {TreeNode} root
 * @return {boolean}
*/

var isUnivalTree = function(root) {
  return preOrder(root, root.val);
};

function preOrder(node, prevVal) {
  if (node === null) {
    return true;
  }  
  if (node.val !== prevVal) {
    return false;
  } 
  return preOrder(node.left, node.val) && preOrder(node.right, node.val);
}

//    1
//   / \
//  1   1
// / \   \
//1   1   1
//
//Input: [1,1,1,1,1,null,1]
//Output: true

//    2
//   / \
//  2   2
// / \   
//5   2   
//Input: [2,2,2,5,2]
//Output: false