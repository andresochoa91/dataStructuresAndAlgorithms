function randomizeArray(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let randomIndex = Math.floor((Math.random() * array.length - i) + i);
    let val1 = array[i];
    let val2 = array[randomIndex];
    array[i] = val2;
    array[randomIndex] = val1    
  }
  return array;
}
let numbers = [10, 25, 30, 45, 50, 65, 70];
console.log(randomizeArray(numbers));
