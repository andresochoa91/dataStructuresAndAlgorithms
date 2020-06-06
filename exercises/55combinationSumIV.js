// Given an integer array with all positive numbers and no duplicates, find the number of possible combinations that add up to a positive integer target.

// Example:

// nums = [1, 2, 3]
// target = 4

// The possible combination ways are:
// (1, 1, 1, 1)
// (1, 1, 2)
// (1, 2, 1)
// (1, 3)
// (2, 1, 1)
// (2, 2)
// (3, 1)

// Note that different sequences are counted as different combinations.

// Therefore the output is 7.


var combinationSum4 = function(nums, target) {
  let memo = {};

  function helper (n, curr) {
    if (curr - n === 0) return 1;
    if (curr - n < 0) return 0; 
    return loop(curr - n)
  }

  function loop (t) {
    if (!(t in memo)) {
      memo[t] = nums.reduce((acc, n) => {
        return acc + helper(n, t); 
      }, 0);
    }
    return memo[t];
  }

  return loop(target);
};

let nums = [6, 3, 7, 8, 100, 54, 27, 2, 7];
let target = 50;
console.log(combinationSum4(nums, target));