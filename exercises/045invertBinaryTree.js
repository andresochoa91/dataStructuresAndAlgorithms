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
 * @return {TreeNode}
 */

// //Space: O(n)  :(
var invertTree = function(root) {
  return root === null ? null : new TreeNode(root.val, invertTree(root.right), invertTree(root.left));
};

// //Space: O(1)  :D
var invertTree = function(root) {
  if (!root) return null;
  let tempL = root.left;
  root.left = root.right;
  root.right = tempL;
  if (root.left) invertTree(root.left);
  if (root.right) invertTree(root.right);
  return root;
};
