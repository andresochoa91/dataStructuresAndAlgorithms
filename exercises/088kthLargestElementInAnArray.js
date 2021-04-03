// Given an integer array nums and an integer k, return the kth largest element in the array.

// Note that it is the kth largest element in the sorted order, not the kth distinct element.

// Example 1:

// Input: nums = [3,2,1,5,6,4], k = 2
// Output: 5

// Example 2:

// Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
// Output: 4

let array = [3,7,5,2,9,8,0,4,1];
let array2 = [3,7,5,2,9,8,0,6,11,4,1];
let array3 = [3,7,5,2,9,8,0,6,11,4,5,1];          
let array4 = [3,7];
let array5 = [7,3];
let array6 = [0];
let array7 = [3,2,3,1,2,4,5,5,6];
let array8 = [3,3,3,3,3,3];


// //First approach
// var findKthLargest = function(nums, k) {
//   nums.sort((a, b) => a - b);
//   let p = nums.length - 1;

//   while (p > -1) {
//     k--;
//     if (!k) return nums[p];
//     p--;
//   }
// };


// //Second approach
// var findKthLargest = function(nums, k) {
//   return nums.sort((a, b) => (b - a))[k - 1]
// };


//Using quick select
const findKthLargest = (arr, k) => {
  let kth = arr.length - k;
  
  const quickSelect = (arr, pos1=0, pos2=(arr.length - 1)) => { 
    let pivot = pos2;
    let p1 = pos1;
    let p2 = pivot - 1;
  
    while (true) {
      while ((arr[p1] <= arr[pivot]) && (p1 < pivot)) {
        p1++;
      }
      
      while ((arr[p2] >= arr[pivot]) && (p2 > p1)) {
        p2--;
      }
    
      if ((p1 === pivot) || (p1 === p2)) {
        if (p1 === p2) {
          let val = arr[p1];
          arr[p1] = arr[pivot];
          arr[pivot] = val;
        }      
        if (p1 === kth) {
          return arr[p1];
        } else {
          if ((kth >= pos1) && (kth <= (p1 - 1))) {
            return quickSelect(arr, pos1, p1 - 1);
          } else if ((kth >= (p1 + 1)) && (kth <= pos2)) {
            return quickSelect(arr, p1 + 1, pos2);  
          }
        }   
      } else {
        let val = arr[p1];
        arr[p1] = arr[p2];
        arr[p2] = val;
        p1 = pos1;
        p2 = pivot - 1;
      }
    }
  };
  return quickSelect(arr);
};

console.log(findKthLargest(array3, 9))
console.log(findKthLargest(array3,7))
console.log(findKthLargest(array7,4))
console.log(findKthLargest(array8,1))
console.log(findKthLargest([3,2,1,5,6,4], 2))
