// Skeleton

// FUNCTION DEFINITION(S)
function findLongestPalindrome(sentence) {
  let palindromes = [];
  let words = sentence.replace(/[,.{}><!?;:"'¿]/g, " ").split(" ");

  words.forEach(word => {
    if (isPalindrome(word)) {
      palindromes.push(word);
    } 
  })
  return palindromes.sort(sortAscendingByLength).pop();
}

function reverseString(string) {
  let arr = [];
  for (let i = string.length; i >= 0; i--) {
    arr.push(string[i]);
  }
  return arr.join("");
}

function isPalindrome(word) {
  if (word.toLowerCase() === reverseString(word).toLowerCase()) {
    console.log(word);
    return true;
  }
  return false;
}

function sortAscendingByLength(a, b) {
  if (a.length > b.length) {
    return 1;
  } else if (a.length < b.length) {
    return -1;
  }
  return 0;
}

// ASSERTION FUNCTION(S) TO BE USED

function assertEqual (actual, expected, testName) {
  console.log(actual.toLowerCase(), expected.toLowerCase())
  if (actual.toLowerCase() === expected.toLowerCase()) {
    console.log("passed");
  } else {
    console.log(`FAILED [${testName}], expected ${expected}, but got ${actual}`);
  }
}

// TESTS CASES
let a = findLongestPalindrome("madam radar, is, madam, kayak, RoTAToR");
let b = "RoTAToR";
assertEqual(a, b, "Palindrome");