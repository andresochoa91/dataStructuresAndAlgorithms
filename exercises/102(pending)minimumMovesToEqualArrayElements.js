// Given an integer array nums of size n, return the minimum number of moves required to make all array elements equal.

// In one move, you can increment n - 1 elements of the array by 1.

// Example 1:
// Input: nums = [1,2,3]
// Output: 3
// Explanation: Only three moves are needed (remember each move increments two elements):
// [1,2,3]  =>  [2,3,3]  =>  [3,4,3]  =>  [4,4,4]

// Example 2:
// Input: nums = [1,1,1]
// Output: 0

// // Inefficient
var minMoves = function(nums) {
  let min = Math.min(...nums);
  let max = Math.max(...nums);
  let count = 0;
  
  while (min !== max) {
    let diff = max - min
    let ref = -1;
    
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === max && ref === -1) {
        ref = i;
      } else {
        nums[i] += diff;     
      }
    }
    
    min = Math.min(...nums);
    max = Math.max(...nums);
    count += diff;
  }
  return count;
};

// // Efficient

// var minMoves = function(nums) {
//   var min = nums[0];
//   var sum = min;
//   var len = nums.length;
//   for (let i = 1; i < len; i++){
//     sum += nums[i];
//     min = Math.min(min, nums[i]);
//   }
//   return sum - (len * min);
// };