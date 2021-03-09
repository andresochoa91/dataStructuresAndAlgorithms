// Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.


// //First approach. Not bad!!!

// var isPalindrome = function(s) {
//   const regex = /[a-zA-Z0-9]/g;

//   let p1 = 0;
//   let p2 = s.length - 1;

//   while (p1 < p2) {
//     while (!(s[p1].match(regex))) {
//       if (p1 >= p2) break;
//       p1++;
//     }
//     while (!(s[p2].match(regex))) {
//       if (p1 >= p2) break;
//       p2--;
//     }
//     if (s[p1].toLowerCase() !== s[p2].toLowerCase()) return false;
//     p1++;
//     p2--; 
//   }
//   return true;
// };

// console.log(isPalindrome("A man, a plan, a canal: Panama"));
// console.log(isPalindrome("aca"));
// console.log(isPalindrome("abc.,,cba,"));
// console.log(isPalindrome(",."));


// //Second approach. A little better;

var isPalindrome = function(s) {
  s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

  let p1 = 0;
  let p2 = s.length - 1;

  while (p1 < p2) {
    if (s[p1] !== s[p2]) return false;
    p1++;
    p2--; 
  }
  return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("aca"));
console.log(isPalindrome("abc.,,cba,"));
console.log(isPalindrome(",."));


