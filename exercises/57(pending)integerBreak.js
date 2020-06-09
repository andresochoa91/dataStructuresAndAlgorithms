// Given a positive integer n, break it into the sum of at least two positive integers and maximize the product of those integers. Return the maximum product you can get.

// Example 1:

// Input: 2
// Output: 1
// Explanation: 2 = 1 + 1, 1 × 1 = 1.

// Example 2:

// Input: 10
// Output: 36
// Explanation: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36.

// Note: You may assume that n is not less than 2 and not larger than 58.


var integerBreak = function(n) {
  const dp = {};
  const recursive = n => {
    if (n in dp) return dp[n];
    let maxN = 1;
    for (let j = 1; j < n; ++j) {
      const a = Math.max(recursive(j), j);
      const b = Math.max(recursive(n - j), n - j);
      maxN = Math.max(maxN, a * b);
    }

    return (dp[n] = maxN);
  };

  return recursive(n);
};