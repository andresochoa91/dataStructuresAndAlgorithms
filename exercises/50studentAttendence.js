// You are given a string representing an attendance record for a student. The record only contains the following three characters:

//     'A' : Absent.
//     'L' : Late.
//     'P' : Present.

// A student could be rewarded if his attendance record doesn't contain more than one 'A' (absent) or more than two continuous 'L' (late).

// You need to return whether the student could be rewarded according to his attendance record.

// Example 1:

// Input: "PPALLP"
// Output: True

// Example 2:

// Input: "PPALLL"
// Output: False


// //First approach
// var checkRecord = function(s) {
//   let ls = 0;
//   let as = 0;
//   for (let i = 0; i < s.length; i++) {
//       if (s[i] === "A") {
//           as++;
//           ls = 0;
//           if (as === 2) return false; 
//       } else if (s[i] === "L") {
//           ls++;
//           if (ls === 3) return false;
//       } else {
//           ls = 0;
//       }
//   }
//   return true;
// };


//Short solution
var checkRecord = function(s) {
    as = s.split("").filter(char => char === "A").length;
    return as < 2 && !s.includes("LLL") ? true : false; 
};