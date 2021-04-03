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

var isUnivalTree = function(root, v = root.val) {
  if (root === null) {
      return true;
  }
    
  if (root.val === v) {
      return isUnivalTree(root.left, v) && isUnivalTree(root.right, v);
  } else {
      return false;
  }
  return isUnivalTree(root, root.val);
};

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