// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

// Notice that the solution set must not contain duplicate triplets.

// Example 1:
// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]

// Example 2:
// Input: nums = []
// Output: []

// Example 3:
// Input: nums = [0]
// Output: []


var threeSum = function(nums) {
  nums.sort((a, b) => a - b);
  const result = [];
  
  for(let i = 0; i < nums.length; i++) {
    let low = i + 1; 
    let high = nums.length - 1;
    let sum = 0;
    
    while(low < high) {
      sum = nums[i] + nums[low] + nums[high];
      
      if (sum === 0) {
        result.push([nums[i], nums[low], nums[high]]);
        while(nums[low + 1] === nums[low]) low++;
        while(nums[high - 1] === nums[high]) high--;
        low++;
        high--;
      } else if (sum < 0) {
        low++;
      } else {
        high--;
      }
    }
    while (nums[i + 1] === nums[i]) i++;
  }
  return result;    
};

//result [-3,1,2], [-2,0,2], [-1,-1,2], [-1,0,1], [0,0,0]
//i = 0
//low = 1
//high = 12
//sum = 0

//[-3,-2,-1,-1,-1,0,0,0,0,1,1,2]
//     ^                  ^ ^                                                                             
