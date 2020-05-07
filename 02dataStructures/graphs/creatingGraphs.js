//     2---------0
//    / \
//   /   \
//  1-----3
//

//Edge list
const graph = [[0, 2], [2, 3], [2, 1], [1, 3]];

//Adjecent List
const graph = [[2], [2, 3], [0, 1, 3], [1, 2]];
//  index of    0      1        2         3     in the graph

//Adjecent Matrix
const graph = {
  0: [0, 0, 1, 0],
  1: [0, 0, 1, 1],
  2: [1, 1, 0, 1],
  3: [0, 1, 1, 0] 
//    0  1  2  3  
}