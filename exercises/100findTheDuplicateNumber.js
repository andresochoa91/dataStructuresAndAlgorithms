// Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

// There is only one repeated number in nums, return this repeated number.

// Example 1:
// Input: nums = [1,3,4,2,2]
// Output: 2

// Example 2:
// Input: nums = [3,1,3,4,2]
// Output: 3

// Example 3:
// Input: nums = [1,1]
// Output: 1

// Example 4:
// Input: nums = [1,1,2]
// Output: 1


// //First approach O(n) O(n)
// var findDuplicate = function(nums) {
//   let collection = new Set();
//   for (let i = 0; i < nums.length; i++) {
//     if (collection.has(nums[i])) {
//       return nums[i];
//     } else {
//       collection.add(nums[i]);
//     }
//   }
// };


// //Second approach O(nlogn) O(1)
// var findDuplicate = function(nums) {
//   nums.sort((a, b) => a - b);
//   for (let i = 0; i < nums.length - 1; i++) {
//     if (nums[i] === nums[i + 1]) return nums[i];    
//   }
// };


// //Second approach O(nlogn) O(1)
var findDuplicate = function(nums) {
  nums.sort((a, b) => a - b);
  let traverse = (left, right) => {
    let mid = Math.floor((left + right) / 2);
    if (nums[left] === nums[right]) return nums[left];
    if (left === mid) return 0;
    let r1 = traverse(left, mid);
    if (r1) return r1;
    return traverse(mid, right);                   
  }
  return traverse(0, nums.length - 1);
};
