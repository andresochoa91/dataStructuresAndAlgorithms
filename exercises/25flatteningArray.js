let arr = [1, [2], [3, [4, [[5]], [6]]]]; //[1, 2, 3, 4, 5, 6];

function flattenArray (array, newArr = []) {
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "number") {
      newArr.push(array[i]);
    } else {
      flattenArray(array[i], newArr);
    }
  }
  return newArr;
}

console.log(flattenArray(arr));

