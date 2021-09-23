/* 
  Given the root of a binary tree, return the sum of values of nodes with an even-valued grandparent. If there are no nodes with an even-valued grandparent, return 0.

  A grandparent of a node is the parent of its parent if it exists.

  Example: https://leetcode.com/problems/sum-of-nodes-with-even-valued-grandparent/
*/

var sumEvenGrandparent = function(root) {
  const gc = [];
  const dfs = (node, ancestors, current) => {
    ancestors[current] = node.val % 2 === 0 ? "even" : "odd";
    
    if (current >= 3 && ancestors[current - 2] === "even") {
      gc.push(node.val);    
    }
    
    if (node.left) dfs(node.left, {...ancestors}, current + 1);
    if (node.right) dfs(node.right, {...ancestors}, current + 1);
  };
  dfs(root, {}, 1);
  
  return gc.reduce((acc, val) => acc + val, 0);
};