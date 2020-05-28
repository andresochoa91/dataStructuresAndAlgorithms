//Can't pick adjacent houses(values)
//[1, 2, 3, 1] => 
//[2, 7, 9, 3, 1] => 12
//[2, 1, 1, 2] => 4
//[10, 1, 3, 8, 9, 6] =>  24


//My solution
var rob = function(nums) {  
  if (!nums.length) {
    return 0;
  }
  if (nums.length <= 2) {
    return Math.max(...nums);
  }  
  let memo = [0, 0, nums[0]];
  for (let i = 1; i < nums.length; i++) {
    memo.push(Math.max((nums[i] + memo[i]), memo[i + 1]));
  }
  return memo[memo.length - 1];
};

let testCases = [
  [1, 2],
  [],
  [5, 1, 9, 15, 8, 3],
  [1, 2, 3, 0],
  [1, 4, 3, 2],
  [1, 2, 10, 20, 12, 3, 5],
  [3, 5, 4, 1, 2, 6],
  [226,174,214,16,218,48,153,131,128,17,157,142,88,43,37,157,43,221,191,68,206,23,225,82,54,118,111,46,80,49,245,63,25,194,72,80,143,55,209,18,55,122,65,66,177,101,63,201,172,130,103,225,142,46,86,185,62,138,212,192,125,77,223,188,99,228,90,25,193,211,84,239,119,234,85,83,123,120,131,203,219,10,82,35,120,180,249,106,37,169,225,54,103,55,166,124]
];

for (let i = 0; i < testCases.length; i++) {
  console.log(rob(testCases[i]));
}


// var rob = function(nums) {
//   let memo = [];
  
//   let recur = function(i) {
//     debugger;
//       if (i >= nums.length) {
//         return 0;
//       }

//       if (memo[i] != null) {
//         return memo[i];
//       } 
      
//       memo[i] = Math.max(recur(i+2) + nums[i], recur(i+1))
//       return memo[i];
//   }
//   return recur(0);
// };
// console.log(rob([1, 2, 3, 1]));


// var rob = function(nums) {
//   let memo = [];
//   memo[0] = 0;
//   memo[1] = nums[0];
  
//   for (let i = 1; i < nums.length; i++) {
//       memo[i + 1] = Math.max(memo[i], memo[i - 1] + nums[i]);
//   }
  
//   return memo[nums.length];   
// }
// console.log(rob([1, 2, 3, 1]));

// //[1, 2, 3, 1]


