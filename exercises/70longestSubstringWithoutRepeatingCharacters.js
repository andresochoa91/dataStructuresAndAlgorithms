// // Given a string s, find the length of the longest substring without repeating characters.

// // Input: s = "abcabcbb"
// // Output: 3
// // Explanation: The answer is "abc", with the length of 3.


// // First approach, inefficient solution O(nˆ2)
// var lengthOfLongestSubstring = function(s) {
//   if (s.length <= 1) return s.length;
//   let p1 = 0;
//   let p2 = 0;
//   let max = 0;
//   let count = 0;
//   let mySet = new Set();

//   while (p2 < s.length) {
//     if (mySet.has(s[p2])) {
//       if (count > max) max = count;
//       p1++;
//       p2 = p1;
//       mySet = new Set();
//       count = 0;
//     } else {
//       mySet.add(s[p2]);
//       count++;
//       p2++;
//       if (count > max) max = count;
//     }
//   }
//   return max;
// };

// //More efficient solution. O(n)
var lengthOfLongestSubstring = function(s) {

  if (s.length < 2) return s.length;

  let p1 = 0;
  let p2 = 0;
  let max = 0;
  //Using a map with its methods is faster
  let collection = new Map();

  while (p2 < s.length) {
    if (collection.get(s[p2]) >= p1) {
      if ((p2 - p1) > max) max = (p2 - p1);
      p1 = collection.get(s[p2]) + 1;
    }
    collection.set(s[p2], p2);
    p2++;
  }
  if ((p2 - p1) > max) max = (p2 - p1);
  return max;
};

const testCases = [
  "abcadehcbadftfd",
  "",
  "a",
  "aaaa",
  "abba"
];

testCases.forEach((testCase) => {
  console.log(lengthOfLongestSubstring(testCase));
});