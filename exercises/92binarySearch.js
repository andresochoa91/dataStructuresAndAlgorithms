// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// Example 1:

// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4

// Example 2:

// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1




// // Recursion
// var search = function(nums, target) {    
//     const binarySearch = (left, right) => {
//         let mid = Math.floor((right + left) / 2);
        
//         if (left === mid) {
//             if (nums[left] === target) return left; 
//             if (nums[right] === target) return right;
//             return -1;
//         }
        
//         if (nums[left] === target) return left;
//         if (nums[mid] === target) return mid;
//         if (nums[right] === target) return right;
        
//         if (target > nums[left] && target < nums[mid]) {
//             return binarySearch(left + 1, mid - 1)
//         } else if (target > nums[mid] && target < nums[right]) {
//             return binarySearch(mid + 1, right - 1)
//         } else {
//             return -1;
//         }
        
//     }
//     return binarySearch(0, nums.length - 1);
// };

//Iterative
var search = function(nums, target) {    
  let left = 0;
  let right = nums.length - 1;
  
  while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (target === nums[left]) return left;
      if (target === nums[mid]) return mid;
      if (target === nums[right]) return right;
      if (target > nums[left] && target < nums[mid]) {
          right = mid - 1;
      } else if (target > nums[mid] && target < nums[right]) {
          left = mid + 1;
      } else {
          return -1
      }
  }
};

search([0,1,2,4,5,6,7,8,9], 3);