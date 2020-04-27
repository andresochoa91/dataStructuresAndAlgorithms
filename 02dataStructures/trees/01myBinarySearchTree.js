class Node {
  constructor (value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor () {
    this.root = null;
  }

  // //INSERT RECURSIVE 
  // insert (value) {
  // if (this.root === null) {
  //     this.root = new Node(value);
  //   } else {
  //     function recursive (node, value) {
  //       if (value === node.value) {
  //         console.log("value already exists");
  //         return this;
  //       }
  //       let direction = (value > node.value) ? "right" : "left";
  //       if (node[direction] === null) {
  //         node[direction] = new Node(value);
  //         return node[direction];
  //       } else {
  //         return recursive(node[direction], value);
  //       }      
  //     }
  //     recursive(this.root, value);
  //   }
  // }

  //INSERT ITERATIVE
  insert (value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value === currentNode.value) {
          console.log("value already exists");
          return this;
        } else {
          let direction = (value < currentNode.value) ? "left" : "right";
          if (!currentNode[direction]) {
            currentNode[direction] = newNode;
            return this;
          } 
          currentNode = currentNode[direction];
        }
      }
    }
  }
  
  // //LOOKUP RECURSIVE
  // lookup (value) {
  //   function recursive (node, value) {
  //     if (node === null) {
  //       console.log(null);
  //       return null;
  //     } else {
  //       if (value === node.value) {
  //         return node;
  //       } else {
  //         let direction = (value < node.value) ? "left" : "right";
  //         return recursive(node[direction], value);
  //       }
  //     }
  //   }
  //   return recursive(this.root, value);
  // }

  //LOOKUP ITERATIVE
  lookup (value) {
    let node = this.root;
    while (true) {
      if (node === null) {
        console.log(null);
        return null;
      } else if (value === node.value) {
        return node;
      } else {
        let direction = (value < node.value) ? "left" : "right";
        node = node[direction];
      }
    }
  }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(15);
tree.insert(1);
tree.insert(15);
tree.insert(170);
tree.insert(18);
tree.insert(100);
console.log(JSON.stringify(tree.lookup(9)))
console.log(JSON.stringify(tree));
//            9
//     4          20
// 1      6    15         170
//                18   100
