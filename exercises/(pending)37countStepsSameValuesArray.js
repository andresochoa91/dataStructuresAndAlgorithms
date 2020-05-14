//[1,2,3]  =>  [2,3,3]  =>  [3,4,3]  =>  [4,4,4]
//[5, 2, 1, 4] => [5, 3, 2, 5] => [5, 4, 3, 6] => [6, 5, 4, 6] => [7, 6, 5, 6] => [7, 7, 6, 7] => [7, 8, 7, 8] => [8, 9, 8, 8] => [9, 9, 9, 9]
//min = 2           min = 1            min = 1   
//sum = 5 + 2 = 7   sum = 7 + 1 = 8    sum = 8 + 4 = 12  

//return 12 - (1 * (4))


// //Inefficient solution
// var minMoves = function(nums, count = 0) {
//   if (Math.min(...nums) !== Math.max(...nums)) {
//     let temp = nums.indexOf(Math.max(...nums));
//     for (let i = 0; i < nums.length; i++) {
//       if (i !== temp) {
//         nums[i]++;
//       }
//     }
//     count++;
//   } else {
//     return count;
//   }
//   return minMoves(nums, count);
// };
// console.log(minMoves([1,2,3,4]));


//Efficient solution
var minMoves = function(nums) {
  var sum = nums[0];
  var min = nums[0];
  for(var i = 1; i < nums.length; i++){
      min = Math.min(min, nums[i]);
      sum += nums[i];
  }
  return sum - (min * (nums.length));
};
console.log(minMoves([5, 10, 6, 6, 6]));
