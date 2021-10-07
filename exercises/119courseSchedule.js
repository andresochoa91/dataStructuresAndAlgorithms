/* 
There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

    For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.

Return true if you can finish all courses. Otherwise, return false.


Example 1:

Input: numCourses = 2, prerequisites = [[1,0]]
Output: true
Explanation: There are a total of 2 courses to take. 
To take course 1 you should have finished course 0. So it is possible.

Example 2:

Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
Output: false
Explanation: There are a total of 2 courses to take. 
To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.

*/

var canFinish = function(numCourses, prerequisites) {
  const graph = {};
  
  prerequisites.forEach(numCourse => {
    if (!(numCourse[1] in graph)) graph[numCourse[1]] = [];
    graph[numCourse[1]].push(numCourse[0]);
  })
  
  const globalSeen = new Set();
  
  for (let i = 0; i < numCourses; i++) {
    if (!(i in graph)) continue;
    globalSeen.add(i);
    const queue = [i];
    const seen = new Set();
      
    while (queue.length) {
      const ver = queue.shift();
      seen.add(ver);
      if (ver in graph) {
        for (vertex of graph[ver]) {
          if (vertex === i) return false;
          if (globalSeen.has(vertex)) continue;
          if (!seen.has(vertex)) queue.push(vertex);  
        }                 
      }
    }
  }  
  return true;
};