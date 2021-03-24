// Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// Follow up: Could you write an algorithm with O(log n) runtime complexity?


// Example 1:

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]

// Example 2:

// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]

// Example 3:

// Input: nums = [], target = 0
// Output: [-1,-1]



// //O(n) Solution :(
// const searchRange = (nums, target) => {
//   let indeces = [-1, -1];

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === target) {
//       if (indeces[0] === -1) indeces[0] = i;
//       indeces[1] = i;
//     } else if (indeces[1] !== -1) {
//       break;
//     }
//   }
//   return indeces;
// }


//O(logn) Solution :)
const searchRange = (nums, target) => {
  let indeces = [-1, -1];

  const binarySearch = (left, right) => {
    if (!(target >= nums[left] && target <= nums[right])) return -1;
    let mid = Math.floor((right + left) / 2);
    if (indeces[0] === -1) {  
      if (target >= nums[left] && target <= nums[mid]) {
        if (left === mid) {          
          if (nums[left] === target) {
            return left
          } 
        } else {
          return binarySearch(left, mid);
        }
      } else if (target >= nums[mid + 1] && target <= nums[right]) {
        return binarySearch(mid + 1, right);
      } 
    } 

    if (indeces[0] === -1) return -1;
    
    if (indeces[1] === -1) {
      if (target >= nums[mid] && target <= nums[right]) {
        if (left === mid) {
          if (nums[right] === target) {
            return right
          } else {
            return left;
          }
        } else {
          return binarySearch(mid, right);
        }
      } else {
        return binarySearch(left, mid - 1);
      }
    }
  }
  indeces[0] = binarySearch(0, nums.length - 1);
  if (indeces[0] !== -1) {
    indeces[1] = binarySearch(indeces[0], nums.length - 1);
  }
  return indeces;
}

let arr = [1,1,1,1,1,1,2,2,2,3];
let arr2 = [5,7,7,8,8,10]; 
let arr3 = [1];
let arr4 = [];

console.log(searchRange(arr, 2));
console.log(searchRange(arr, 1));
console.log(searchRange(arr2, 6));
console.log(searchRange(arr2, 8));
console.log(searchRange(arr3, 1));
console.log(searchRange(arr4, 0));

