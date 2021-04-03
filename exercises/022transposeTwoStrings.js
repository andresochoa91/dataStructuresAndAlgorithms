// You will be given an array that contains two strings. Your job is to create a function that will take those two strings and transpose them, so that the strings go from top to bottom instead of left to right.

// e.g. transposeTwoStrings(['Hello','World']);

// should return:
// H W  
// e o  
// l r  
// l l  
// o d


function transposeTwoStrings (words) {
  let obj = {};
  let num = 0;

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > num) {
      num = words[i].length;
    }
  }

  num;

  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < num; j++) {
      if (!obj[`${j}`]) {
        if (words[i][j]) {
          obj[`${j}`] = words[i][j];
        } else {
          obj[`${j}`] = ` `;  
        }
      } else if (!words[i][j]) {
        obj[`${j}`] += `  `;
      } else {
        obj[`${j}`] += ` ${words[i][j]}`;
      }
    } 
  }    
  let str = "";
  for (let key in obj) {
    str += obj[key] + "\n";
  }
  return str;
}

let act = (transposeTwoStrings(['Hello', 'World', "how", "are", "you", "doing"]));
let exp = "H W h a y d\ne o o r o o\nl r w e u i\nl l       n\no d       g\n";

function assertEqual (actual, expected, testName) {
  if (actual === expected) {
    console.log(`passed`);
  } else {
    console.log(`FAILED [${testName}], Expected ${expected} but got ${actual}`)
  }
}
assertEqual(act, exp, "Should return the same");
