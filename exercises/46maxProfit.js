var maxProfit = function(prices) {
  if (prices.length <= 1) {
      return 0;
  }
  let min = prices[0];
  let max = prices[0];
  let memo = [];
  for (let i = 1; i < prices.length; i++) {
      if (prices[i] < min) {
          min = prices[i];
          max = prices[i];
      } else if (prices[i] > max) {
          max = prices[i];
          memo.push(max - min);
      }
  }
  return memo.length ? Math.max(...memo) : 0;
};

console.log(maxProfit([5, 10, 9, 4, 1, 7, 6, 8]));
console.log(maxProfit([5, 4, 3, 2, 1]));
console.log(maxProfit([1, 3, 7, 15, 2, 5, 9]));