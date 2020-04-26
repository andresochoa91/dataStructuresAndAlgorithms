//  let numbers = [1, 3, 16, 22, 31, 33, 34, 40]
//  let target = 1; 

// //Recursive solution

// function binarySearch (array, number, index = Math.floor(array.length / 2)) {
//   let midPoint = Math.floor(array.length / 2);
//   let pos = array.slice(midPoint + 1);
//   let neg = array.slice(0, (midPoint));

//   if (target === array[midPoint]) {
//     return index;
//   } else if (target > array[midPoint] && array[midPoint] !== 0) {
//     index += Math.ceil(pos.length / 2)
//     return binarySearch(pos, number, index);
//   } else if (target < array[midPoint] && array[midPoint] !== 0) {
//     index -= Math.ceil(neg.length / 2);
//     return binarySearch(neg, number, index);
//   } else {
//     return null;
//   }
// }

// let act = binarySearch(numbers, target);
// let exp = 0;
// let test1 = "Position of 1 is 0";


//Iterative solution

let numbers = [1, 3, 16, 22, 31, 33, 34, 40]
let target = 1; 

function binarySearch (array, number) {
  let min = 0;
  let max = array.length - 1;
  let midPoint = Math.floor((min, max) / 2);

  while (min <= max) {
    if (number === array[midPoint]) {
      return midPoint
    } 
    if (number < array[midPoint]) {
      max = midPoint - 1;
    }
    if (number > array[midPoint]) {
      min = midPoint + 1;
    }
    midPoint = Math.floor((max + min) / 2);
  }
  return null;
}

let numbers = [1, 3, 16, 22, 31, 33, 34, 40]
let target = 1; 

let act = binarySearch(numbers, target);
let exp = 0;
let test1 = "Position of 1 is 0";


function assertEqual (actual, expected, testName) {
  if (actual === expected) {
    console.log(`passed`);
  } else {
    console.log(`FAILED [${testName}], Expected ${expected}, but got ${actual}!`);
  }
}
assertEqual(act, exp, test1);