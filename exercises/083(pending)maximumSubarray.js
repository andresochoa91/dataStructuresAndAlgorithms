// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

// Example 2:

// Input: nums = [1]
// Output: 1

// Example 3:

// Input: nums = [5,4,-1,7,8]
// Output: 23


var maxSubArray = function(nums) {
  var sum = nums[0];
  var max = sum;
  for (let i = 1; i < nums.length; i++) {
    sum = ((sum + nums[i]) > nums[i]) ? (sum + nums[i]) : nums[i];
    max = sum > max ? sum : max;
  }
  return max;
};

//sum = 4
//max = -1

//[-2,1,-3,4,-1,2,1,-5,4]
//            ^