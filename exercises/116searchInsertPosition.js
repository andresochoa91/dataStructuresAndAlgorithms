/* 
  Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
  You must write an algorithm with O(log n) runtime complexity.

  Example 1:

  Input: nums = [1,3,5,6], target = 5
  Output: 2

  Example 2:

  Input: nums = [1,3,5,6], target = 2
  Output: 1

  Example 3:

  Input: nums = [1,3,5,6], target = 7
  Output: 4

  Example 4:

  Input: nums = [1,3,5,6], target = 0
  Output: 0

  Example 5:

  Input: nums = [1], target = 0
  Output: 0
 */

var searchInsert = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let mid;

  if (target <= nums[left]) return left;
  if (target === nums[right]) return right;
  if (target > nums[right]) return right + 1;

  while (true) {
    if (target === nums[left]) return left;
    if (target === nums[right]) return right;
    
    mid = Math.floor((left + right) / 2);
        
    if (target === nums[mid]) return mid;
    if (mid === left) return right;
    
    
    if (target < nums[mid]) {
        right = mid;
    } else {
        left = mid;       
    }      
  }
}