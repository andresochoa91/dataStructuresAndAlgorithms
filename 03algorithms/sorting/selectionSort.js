const selectionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let smallerNumber = array[i];
    let index = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < smallerNumber) {
        smallerNumber = array[j];
        index = j;
      }
    }
    array[index] = array[i];
    array[i] = smallerNumber;
  }
  return array;  
}

let numbers = [6, 3, 8, 1, 6, 3, 5, 3];
console.log(selectionSort(numbers));