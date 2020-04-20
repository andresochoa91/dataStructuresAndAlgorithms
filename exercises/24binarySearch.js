let numbers = [1, 3, 16, 22, 31, 33, 34, 40]
let target = 1; 

function lookFor (array, number, index = Math.floor(array.length / 2)) {
  let midInd = Math.floor(array.length / 2);
  
  if (target === array[midInd]) {
    return index;
  } else if (target > array[midInd] && array[midInd] !== 0) {
    index += Math.ceil(array.slice((midInd + 1)).length / 2)
    return lookFor(array.slice((midInd + 1)), number, index);
  } else if (target < array[midInd] && array[midInd] !== 0) {
    index -= Math.ceil(array.slice(0, (midInd)).length / 2);
    console.log(index);
    return lookFor(array.slice(0, (midInd)), number, index);
  } else {
    return null;
  }
}

let act = lookFor(numbers, target);
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