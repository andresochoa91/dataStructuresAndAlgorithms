/*
  There is a bi-directional graph with n vertices, where each vertex is labeled from 0 to n - 1 (inclusive). The edges in the graph are represented as a 2D integer array edges, where each edges[i] = [ui, vi] denotes a bi-directional edge between vertex ui and vertex vi. Every vertex pair is connected by at most one edge, and no vertex has an edge to itself.

  You want to determine if there is a valid path that exists from vertex start to vertex end.

  Given edges and the integers n, start, and end, return true if there is a valid path from start to end, or false otherwise.

  Example 1

  Input: n = 3, edges = [[0,1],[1,2],[2,0]], start = 0, end = 2
  Output: true
  Explanation: There are two paths from vertex 0 to vertex 2:
  - 0 → 1 → 2
  - 0 → 2

  Example 2

  Input: n = 6, edges = [[0,1],[0,2],[3,5],[5,4],[4,3]], start = 0, end = 5
  Output: false
  Explanation: There is no path from vertex 0 to vertex 5.
*/

var validPath = function(n, edges, start, end) {
  if (start === end) return true;
  const graph = {};
  edges.forEach(edge => {
    if (!(edge[0] in graph)) {
      graph[edge[0]] = [];         
    } 
    graph[edge[0]].push(edge[1]);
    if (!(edge[1] in graph)) {
      graph[edge[1]] = [];         
    } 
    graph[edge[1]].push(edge[0]);
  });
  
  let visited = new Set();
  let pathExist = false;
  
  function traverse (node) {
    if (node === end) {
      pathExist = true;
    } else {
      loop(node);
    }
  }
  
  function loop (node) {
    visited.add(node);
    for (let n of graph[node]) {
      if (!visited.has(n)) traverse(n);
      if (pathExist) return;
    }    
  }
  
  traverse(start);
  
  return pathExist;
};
