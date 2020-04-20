let arr = [7, 6, 10, 11, 5, 4, 2, 1];
let tar = 3;
//should return [4, 5, 1, 2, 3];

function rotateArray (array, target) {
  let newArr = [...array.slice(target), ...array.slice(0, target)];
  for (let i = 0; i < array.length; i++) {
    array[i] = newArr[i];
  }
  return array
}

function rotateString(str, number) {
  let newStr = str + str; //hello worldhello world
  newStr = newStr.slice((str.length - number), (newStr.length - number));
  return newStr
}

//Assert Equal
function assertEqual (actual, expected, testName) {
  if (Array.isArray(actual)) {
    if (JSON.stringify(actual) === JSON.stringify(expected)) {
      console.log(`passed`);
    } else {
      console.log(`FAILED [${testName}], Expected ${expected}, but got ${actual}!`);
    }
  } else if (actual === expected) {
    console.log(`passed`);
  } else {
    console.log(`FAILED [${testName}], Expected ${expected}, but got ${actual}!`);
  }
} 

let act = rotateString("hello world", 4);
let exp = 'orldhello w';
let test1 = "It should move from the 4th position";

let act2 = rotateArray(arr, tar); 
let exp2 = [11, 5, 4, 2, 1, 7, 6, 10];
let test2 = "It should move from the 3rd positions";

assertEqual(act2, exp2, test2);