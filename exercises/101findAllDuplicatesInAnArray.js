// Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

// Find all the elements that appear twice in this array.

// Could you do it without extra space and in O(n) runtime?

// Example:
// Input:
// [4,3,2,7,8,2,3,1]

// Output:
// [2,3]


var findDuplicates = function(nums) {
  nums.push(0);
  for (let i = 0; i < nums.length; i++) {
    while (nums[i] !== -1 && nums[nums[i]] !== -1) {
      if (i === nums[i]) {
        nums[i] = -1;
        break;
      }
      let temp = nums[nums[i]];
      nums[nums[i]] = -1;
      nums[i] = temp;
    }
  } 
  
  let p = 0;
  for (let i = nums.length - 1; i > -1; i--) {
    if (nums[i] !== -1) {
      while (nums[p] !== -1 && p < nums.length) p++;    
      nums[p] = nums[i];
    } 
    nums.pop();
  }
  return nums;
};