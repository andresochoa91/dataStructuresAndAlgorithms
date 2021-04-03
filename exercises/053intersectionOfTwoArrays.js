// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]

var intersection = function(nums1, nums2) {
  if (!nums1.length || !nums2.length) {
      return [];
  }
  let mySet = new Set();
  for (let i = 0; i < nums1.length; i++) {
      if (!mySet.has(nums1[i])) {
          mySet.add(nums1[i]);
      }
  }
  let newSet2 = new Set();
  let newArr = [];
  for (let i = 0; i < nums2.length; i++) {
      if (mySet.has(nums2[i])) {
          if (!newSet2.has(nums2[i])) {
              newSet2.add(nums2[i]); 
              newArr.push(nums2[i]);
          }
      }
  }
  return newArr;
};