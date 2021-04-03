// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// var maxDepth = function(root) {
//   if (!root) return 0;    
//   let max = 0
//   const recursive = (root, count) => {
//     count++;
//     if (!root.left && !root.right) max = Math.max(count, max);
//     if (root.left) recursive(root.left, count);
//     if (root.right) recursive(root.right, count);
//   }
//   recursive(root, max);
//   return max;
// };

// //Nicer
var maxDepth = function(root, count=0) {
  if (!root) return count;    
  return Math.max(
    maxDepth(root.left, count + 1), 
    maxDepth(root.right, count + 1)
  );
};