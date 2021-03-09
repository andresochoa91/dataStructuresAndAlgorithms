// Given a non-empty string s, you may delete at most one character. Judge whether you can make it a palindrome. 

// Input: "aba"
// Output: True

// Input: "abca"
// Output: True
// Explanation: You could delete the character 'c'.

// //First solution. Very good

// var validPalindrome = function(s) {
//   let p1 = 0;
//   let p2 = s.length - 1;
//   let count = 0;

//   while (p1 < p2) {
//     if (s[p1] !== s[p2]) {
//       if (count > 0) {
//         return false;
//       } 
//       if (s[p1 + 1] === s[p2] && s[p1 + 2] === s[p2 - 1]) {
//         p1++;
//       } else {
//         p2--
//       }
//       count++;
//     } else {
//       p1++;
//       p2--;
//     }
//   }
//   return true;
// };


// //Second solution. Very good

var validPalindrome = function(s) {
  let p1 = 0;
  let p2 = s.length - 1;
  
  const checkIsPalindrome = (str, left, right) => {
    while (left < right) {
      if (str[left] !== s[right]) {
        return false;
      }
      left++;
      right--;
    }
    return true;
  }

  while (p1 < p2) {
    if (s[p1] !== s[p2]) {
      return checkIsPalindrome(s, p1 + 1, p2) || checkIsPalindrome(s, p1, p2 - 1) 
    }
    p1++;
    p2--;
  }
  return true;
};

console.log(validPalindrome("aba"));
console.log(validPalindrome("abca"));
console.log(validPalindrome("abcagagcba"));
console.log(validPalindrome("abcagaggcba"));
//                           ^  ^                                                            
console.log(validPalindrome("lcupuufxoohdfpgjdmysgvhmvffcnqxjjxqncffvmhvgsymdjgpfdhooxfuupucul"));
console.log(validPalindrome("lcucuaucul"));
//                            ^ ^                                                            

