function bubbleSort (arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let value = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = value;
      }
    }
  }
  return arr;
}

console.log(bubbleSort([4, 8, 5, 4, 3, 2, 10, 43, 0, -50]));

