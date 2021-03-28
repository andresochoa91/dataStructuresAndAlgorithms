// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

// Example 1:

// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[9,20],[15,7]]

// Example 2:

// Input: root = [1]
// Output: [[1]]

// Example 3:

// Input: root = []
// Output: []


var levelOrder = function(root) {
  if (!root) return [];
  const collection = [];
  const DFS = (r, level) => {        
    if (!collection[level]) collection[level] = [];
    collection[level].push(r.val);
    if (!r.left && !r.right) return;  
    if (r.left) DFS(r.left, level + 1);
    if (r.right) DFS(r.right, level + 1);
  }
  DFS(root, 0);  
  return collection;   
};