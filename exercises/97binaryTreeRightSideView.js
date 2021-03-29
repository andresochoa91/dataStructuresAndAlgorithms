// Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

// Example 1:

// Input: root = [1,2,3,null,5,null,4]
// Output: [1,3,4]

// Example 2:

// Input: root = [1,null,3]
// Output: [1,3]

// Example 3:

// Input: root = []
// Output: []


// //DFS
var rightSideView = function(root) {
  const values = [];
  if (!root) return values;
  const DFS = (root, level) => {
    values[level] = root.val;            
    if (root.left) DFS(root.left, level + 1); 
    if (root.right) DFS(root.right, level + 1); 
  }
  DFS(root, 0);
  return values;
};


// //BFS
// var rightSideView = function(root) {
//   const values = [];
//   if (!root) return values;
//   const queue = [root];
//   while (queue.length) {
//     let count = queue.length;
//     let temp;
//     while (count) {
//       let current = queue.shift();
//       temp = current.val;
//       if (current.left) queue.push(current.left); 
//       if (current.right) queue.push(current.right); 
//       count--;    
//     }
//     values.push(temp);
//   }
//   return values;
// };