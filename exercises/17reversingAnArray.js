const reverse = (arr) => {
  let number = 0;    
  for (let i = arr.length - 1; i > Math.floor(arr.length/2 - 1); i--) {
    number = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = number;
  }
}

let array = [1, 2, NaN, 4, 5, 6];
reverse(array); 
console.log(array);  