var climbStairs = function(n) {
  let memo = {};
  function recursive (steps) {
    if (steps === 0) {
      return 1;
    }
    if (steps < 0) {
      return 0;
    }
    if (memo[steps]) {
      return memo[steps];
    } else {
      memo[steps] = recursive(steps - 1) + recursive(steps - 2);
      return memo[steps];
    }
  }
  return recursive(n);
};

console.log(climbStairs(6))