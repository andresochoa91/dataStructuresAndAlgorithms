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


// //DFS

var levelOrder = function(root) {
  const collection = [];
  if (!root) return collection;
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

// //BFS

// var levelOrder = function(root) {
//   const collection = [];
//   if (!root) return collection;
//   const queue = [root];
//   let count = 0;
//   while (queue.length) {
//     count = queue.length;
//     let arr = [];
//     while (count) {
//       let r = queue.shift();
//       arr.push(r.val);
//       count--;
//       if (r.left) queue.push(r.left);
//       if (r.right) queue.push(r.right);                        
//     }
//     collection.push(arr);
//   }
//   return collection;   
// };
