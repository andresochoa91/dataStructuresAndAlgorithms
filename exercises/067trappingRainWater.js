// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.

// // Good Solution
// var trap = function(height) {
//   let p1 = 0;
//   let p2 = 1;
//   let p3 = 1;
//   let min = Math.min(p1, p3);
//   let water = 0;

//   while (p3 < height.length) {
//     while (height[p1] <= height[p3] || p2 >= height.length) {
//       water += (min - height[p1]) > 0 ? (min - height[p1]) : 0;
//       p1++;
//       if (p1 === p3) break;
//     }

//     p2 = p1 + 1;
//     p3 = p1 + 1;

//     while ((height[p1] > height[p2]) && (p2 < height.length) ) {
//       p2++;
//       if (height[p2] >= height[p3]) p3 = p2;
//     } 
//     min = Math.min(height[p1], height[p3]);
//   }
//   return water;
// };


// //More optimal solution

var trap = function(height) {

  if (height.length < 3) return 0;

  let p1 = 0;
  let p2 = height.length - 1;
  let maxLeft = height[p1];
  let maxRight = height[p2];
  let min = Math.min(p1, p2);
  let total = 0;

  while (p1 !== p2) {
    if (height[p1] > height[p2]) {
      total += (((min - height[p2]) > 0) ? (min - height[p2]) : 0);
      p2--;
      if (height[p2] > maxRight) {
        maxRight = height[p2];
      }
    } else {
      total += (((min - height[p1]) > 0) ? (min - height[p1]) : 0);
      p1++;
      if (height[p1] > maxLeft) {
        maxLeft = height[p1];
      }
    }
    min = Math.min(maxLeft, maxRight);
  }
  return total;
};

const testCases = [
  [0,1,0,2,1,0,1,3,2,1,2,1],
  [4,2,0,3,2,5],
  [0,1,3,1,0,1,2,1,0],
  [],
  [1],
  [1, 2],
  [1, 2, 1],
  [1, 2, 1, 2],
  [2, 1, 2, 1],
  [2, 1, 2],
];

testCases.forEach((testCase) => {
  console.log(trap(testCase))
});