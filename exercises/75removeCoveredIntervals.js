// Given a list of intervals, remove all intervals that are covered by another interval in the list.

// Interval [a,b) is covered by interval [c,d) if and only if c <= a and b <= d.

// After doing so, return the number of remaining intervals.

// Example 1:

// Input: intervals = [[1,4],[3,6],[2,8]]
// Output: 2
// Explanation: Interval [3,6] is covered by [2,8], therefore it is removed.


// Example 2:

// Input: intervals = [[1,4],[2,3]]
// Output: 1


// Example 3:

// Input: intervals = [[1,2],[1,4],[3,4]]
// Output: 1


// First approach O(n^2), surprisingly not that bad
// var removeCoveredIntervals = function(intervals) {
    
//     let count = intervals.length;
//     count
    
//     let mySet = new Set();

//     for (let i = 0; i < intervals.length; i++) {
//       if (mySet.has(i)) continue;
//       for (let j = i + 1; j < intervals.length ; j++) {
//         if (mySet.has(j)) continue;
//         if (intervals[j][0] >= intervals[i][0] && intervals[j][1] <= intervals[i][1]) {
//           count--;
//           mySet.add(j);
//         } else if (intervals[j][0] <= intervals[i][0] && intervals[j][1] >= intervals[i][1]) {
//           count--;
//           mySet.add(i);
//           break;
//         }
//       }
//     }
//     return count;
// };


// Second approach O(nlog(n)), better
var removeCoveredIntervals = function(intervals) {
  intervals.sort((a, b) => {
    return a[0] === b[0] ? b[1] - a[1] : a[0] - b[0];
  });

  let max = 0;
  let result = 0;

  for (let i = 0; i < intervals.length; i++) {
    if (intervals[i][1] > result) {
      result = intervals[i][1];
      max++;
    }
  }

  return max;
}

// console.log(removeCoveredIntervals([[1,4],[3,6],[2,8]]));
// //                                 [[1,4],[2,8],[3,6]]
// //                                           ^
// console.log(removeCoveredIntervals([[1,4],[2,3]]));
// console.log(removeCoveredIntervals([[0,10],[5,12]]));
// console.log(removeCoveredIntervals([[3,10],[4,10],[5,11]]));
// console.log(removeCoveredIntervals([[1,2],[1,4],[3,4]]));
//                                 [[1,2],[1,4],[3,4]]
//                                                 ^   
//max 1
//result  
//[1, 4]
