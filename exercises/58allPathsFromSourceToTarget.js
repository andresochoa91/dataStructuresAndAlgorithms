// Given a directed, acyclic graph of N nodes.  Find all possible paths from node 0 to node N-1, and return them in any order.

// The graph is given as follows:  the nodes are 0, 1, ..., graph.length - 1.  graph[i] is a list of all nodes j for which the edge (i, j) exists.

// Example:
// Input: [[1,2], [3], [3], []] 
// Output: [[0,1,3],[0,2,3]] 
// Explanation: The graph looks like this:
// 0--->1
// |    |
// v    v
// 2--->3
// There are two paths: 0 -> 1 -> 3 and 0 -> 2 -> 3.



var allPathsSourceTarget = function(graph) {
  let graphs = [];
  let last = graph.length - 1;

  function recursive (node, acc = [0]) {
    for (let i = 0; i < node.length; i++) {
      if (node[i] === last) {
        graphs.push([...acc, node[i]]); 
      } else {
        recursive(graph[node[i]], [...acc, node[i]]);  
      }
    }
  }
  recursive(graph[0]);
  return graphs
};

let a = allPathsSourceTarget([[1, 2], [3, 6], [], [2, 4], [7, 5], [7], [4], []]);
a