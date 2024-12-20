// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

// The number of elements initialized in nums1 and nums2 are m and n respectively. You may assume that nums1 has a size equal to m + n such that it has enough space to hold additional elements from nums2.

// Example 1:

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]

// Example 2:

// Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]

// //My first approach

// var merge = function(nums1, m, nums2, n) {
//   let p1 = 0;    
//   let p2 = 0;
//   let newArr = [];
  
//   if (!m) p1++; 
//   if (!n) p2++;
  
//   while ((p1 < m) || (p2 < n)) {
//       if (p1 < m) {
//           if (nums1[p1] <= nums2[p2] || (p2 >= n)) {
//               newArr.push(nums1[p1]);
//               p1++;
//           }            
//       }
//       if (p2 < n) {
//           if (nums2[p2] <= nums1[p1] || (p1 >= m)) {
//               newArr.push(nums2[p2]);
//               p2++;
//           }            
//       }
//   }  
//   return newArr.forEach((num, i) => nums1[i] = num);
// };


// //Better solution

let nums1 = [1,2,3,0,0,0];
let nums2 = [2,5,6];

var merge = function(nums1, m, nums2, n) {
  let p = (m + n) - 1;
  let p1 = m - 1;
  let p2 = n - 1;

  while (p2 >= 0) {
    if (nums1[p1] >= nums2[p2]) {
      nums1[p] = nums1[p1];
      p1--;
    } else {
      nums1[p] = nums2[p2];
      p2--
    }
    p--;
  }
};