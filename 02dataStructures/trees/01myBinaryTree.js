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
  insert(value) {
    if (this.root === null) {
      this.root = new Node(value);
    } else {
      recursive(this.root, value);
    }
  }

  lookup(value) {

  }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(6);
tree.insert(6);
tree.insert(20);
tree.insert(15);
tree.insert(1);
tree.insert(15);
tree.insert(170);

console.log(JSON.stringify(tree));
//         9
//     4       20
//   1   6   15  170


function recursive (node, value) {
  if (value === node.value) {
    return "value already exists";
  }
  let direction = (value > node.value) ? "right" : "left";
  if (node[direction] === null) {
    node[direction] = new Node(value);
    return node[direction];
  } else {
    return recursive(node[direction], value);
  }      
}