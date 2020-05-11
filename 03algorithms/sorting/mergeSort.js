let arr = [10, 1, 2, 3, 9, 7, 8, 6];

const merge = (left, right) => {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

const mergeSort = (array) => {    
  if (array.length === 1) {
    return array;
  }

  let left = array.slice(0, Math.floor(array.length / 2));
  let right = array.slice(Math.floor(array.length / 2));
  return merge(mergeSort(left), mergeSort(right));
}
console.log(mergeSort(arr));

//Explanation
//[10, 1, 2, 3, 9, 7, 8, 6];

//[10, 1, 2, 3],         [9, 7, 8, 6]
//[10, 1]    [2, 3]      [9, 7]    [8, 6]
//[10]  [1]  [2]  [3]    [9]  [7]  [8]  [6]

//[]
//[1]
// ^
//[1, 10]
//[1, 10]    [2, 3]
//     ^            ^
//[1]
//[1, 2]
//[1, 2, 3]
//[1, 2, 3, 10] with the return.concat
//[1, 2, 3, 10]    [6, 7, 8, 9]
//          ^                   ^ 
//[]
//[1]
//[1, 2]
//[1, 2, 3]
//[1, 2, 3, 6]
//[1, 2, 3, 6, 7]
//[1, 2, 3, 6, 7, 8]
//[1, 2, 3, 6, 7, 8, 9]
//[1, 2, 3, 6, 7, 8, 9, 10]  with the return.concat


