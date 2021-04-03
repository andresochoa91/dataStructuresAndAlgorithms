// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.


// Example 1:
// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

// Example 2:
// Input: nums = [0]
// Output: [0]


// //O(n), O(n)
// var moveZeroes = function(nums) {
//     const values = [];
//     nums.forEach((num) => {
//         if (num) {
//             values.push(num);            
//         } 
//     });

//     nums.forEach((num, i) => {
//         if (values[i]) {
//             nums[i] = values[i];
//         } else {
//             nums[i] = 0;
//         }     
//     });
    
//     return nums;
// };


// //O(n) O(1)
var moveZeroes = function(nums) {
    let firstZero = -1;
        
    for (let i = 0; i < nums.length; i++) {
        if (!nums[i]) {
            if (firstZero === -1) firstZero = i;
        } else if (firstZero !== -1) {
            [nums[firstZero], nums[i]] = [nums[i], nums[firstZero]];
            firstZero++;
        }
    }     
    return nums;
};