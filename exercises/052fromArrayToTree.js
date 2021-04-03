class TreeNode {
  constructor(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let numbers = [1, 2, 3, null, null, 4, 5]

function arrayToTree (array) {
  function recursive (index, dif) {
    if (array[index] === undefined || array[index] === null) return null;
    let node = new TreeNode(array[index]);
    node.left = recursive(index + dif, dif * 2);
    node.right = recursive(index + dif + 1, (dif * 2) + 1);
    return node;
  }
  return recursive(0, 1);
}
console.log(JSON.stringify(arrayToTree(numbers)));
