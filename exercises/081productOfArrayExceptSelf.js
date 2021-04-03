// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// Example 1:
// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]

// Example 2:
// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]


// // Time: O(n^2) Space: O(n), very inefficient  
// var productExceptSelf = function(nums) {
//   let newNums = []

//   for (let i = 0; i < nums.length; i++) {
//     let acc = 1;
//     for (let j = 0; j < nums.length; j++) {
//       if (i !== j) {
//         acc *= nums[j];
//       }
//     }
//     newNums.push(acc);
//   }    
//   return newNums;
// };

// // Time: O(n), Space: O(1), very good
var productExceptSelf = function(nums) {    
  let ceroes = 0;
  let accMul = 1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      accMul *= nums[i];
    } else {
      ceroes++;
      if (ceroes > 1) break;
    }
  }
  
  for (let i = 0; i < nums.length; i++) {
    if (ceroes > 1) {
      nums[i] = 0;
    } else if (ceroes === 1) {
      if (nums[i] !== 0) {
        nums[i] = 0;
      } else {
        nums[i] = accMul;
      }
    } else {
      nums[i] = accMul / nums[i];
    }  
  }   
  return nums;
};