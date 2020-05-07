class Graph {
  constructor () {
    this.numberOfNodes = 0;
    this.adjecentList = {};
  }
  addVertex (node) {
    this.adjecentList[node] = [];
    this.numberOfNodes++;
    return this;
  }
  
  addEdge(node1, node2) {
    if (this.adjecentList[node1] && this.adjecentList[node2]) {
      if (this.adjecentList[node1].includes(node2)) {
        console.log("this edge already exists");
        return this;
      }      
      this.adjecentList[node1].push(node2);
      this.adjecentList[node2].push(node1);
      return this;
    }
    console.log(null);
    return null;
  }
  showConnections (node) {
    console.log(`${node} --> ${this.adjecentList[node]}`);
    return 
  }
}
let myGraph = new Graph();
myGraph.addVertex(0);
myGraph.addVertex(1);
myGraph.addVertex(2);
myGraph.addVertex(3);
myGraph.addVertex(4);
myGraph.addVertex(5);
myGraph.addVertex(6);
myGraph.addEdge(6, 5);
myGraph.addEdge(5, 4);
myGraph.addEdge(4, 3);
myGraph.addEdge(4, 2);
myGraph.addEdge(3, 1);
myGraph.addEdge(1, 0);
myGraph.addEdge(1, 2);
myGraph.addEdge(2, 0);
myGraph.showConnections(1);
console.log(myGraph);


// 3-----4-----5
// |     |     |
// |     |     |
// 1-----2     6
//  \   /
//   \ /
//    0