// Consider all the leaves of a binary tree, from left to right order, the values of those leaves form a leaf value sequence.

// For example, in the given tree above, the leaf value sequence is (6, 7, 4, 9, 8).

// Two binary trees are considered leaf-similar if their leaf value sequence is the same.

// Return true if and only if the two given trees with head nodes root1 and root2 are leaf-similar.

// Example 1:

// Input: root1 = [3,5,1,6,2,9,8,null,null,7,4], root2 = [3,5,1,6,7,4,2,null,null,null,null,null,null,9,8]
// Output: true

// Example 2:

// Input: root1 = [1], root2 = [1]
// Output: true

// Example 3:

// Input: root1 = [1], root2 = [2]
// Output: false

// Example 4:

// Input: root1 = [1,2], root2 = [2,2]
// Output: true

// Example 5:

// Input: root1 = [1,2,3], root2 = [1,3,2]
// Output: false


var leafSimilar = function(root1, root2) {
  const stack = [];
  
  const leftDFS = (root) => {
    if (!root.left && !root.right) {
      stack.push(root.val);
    } else {
      if (root.left) leftDFS(root.left); 
      if (root.right) leftDFS(root.right);            
    }
  }
  leftDFS(root1);
  
  const rightDFS = (root) => {
    if (!root) return true; 
    if (!root.left && !root.right) {
      if (stack.pop() === root.val) return true;    
      return false;
    }
    return rightDFS(root.right) && rightDFS(root.left);  
  }
  return rightDFS(root2) && !stack.length;
};