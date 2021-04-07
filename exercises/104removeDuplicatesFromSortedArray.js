// Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// Clarification:

// Confused why the returned value is an integer but your answer is an array?

// Note that the input array is passed in by reference, which means a modification to the input array will be known to the caller as well.

// Internally you can think of this:

// Example 1:
// Input: nums = [1,1,2]
// Output: 2, nums = [1,2]
// Explanation: Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively. It doesn't matter what you leave beyond the returned length.

// Example 2:
// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4]
// Explanation: Your function should return length = 5, with the first five elements of nums being modified to 0, 1, 2, 3, and 4 respectively. It doesn't matter what values are set beyond the returned length.



// var removeDuplicates = function(nums) {
//     for (let i = nums.length - 1; i > -1; i--) {
//       if (nums[i - 1] === nums[i]) {
//         nums[i] = 0;
//       }
//     }
//     return nums.length;
// };


var removeDuplicates = function(nums) {

  let refCero = -1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      nums[i] = "r";
      if (refCero === -1) {
        refCero = i;    
      } 
    } else if (refCero !== -1) {
        [nums[i], nums[refCero]] = [nums[refCero], nums[i]];
        refCero++;
    }
  }

  for (let i = nums.length - 1; i > -1; i--) {
    if (nums[i] !== "r") return nums.length;
    nums.pop();
  }   
};
