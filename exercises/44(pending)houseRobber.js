//Can't pick adjacent houses(values)
//[1, 2, 3, 1] => 
//[2, 7, 9, 3, 1] => 12
//[2, 1, 1, 2] => 4
//[10, 1, 3, 8, 9, 6] =>  24

var rob = function(nums) {
  let memo = [];
  
  let recur = function(i) {
    debugger;
      if (i >= nums.length) {
        return 0;
      }

      if (memo[i] != null) {
        return memo[i];
      } 
      
      memo[i] = Math.max(recur(i+2) + nums[i], recur(i+1))
      return memo[i];
  }
  return recur(0);
};
console.log(rob([1, 2, 3, 1]));


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


