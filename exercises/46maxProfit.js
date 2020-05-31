// //First solution
// var maxProfit = function(prices) {
//   if (prices.length <= 1) {
//       return 0;
//   }
//   let min = prices[0];
//   let max = prices[0];
//   let memo = [];
//   for (let i = 1; i < prices.length; i++) {
//       if (prices[i] < min) {
//           min = prices[i];
//           max = prices[i];
//       } else if (prices[i] > max) {
//           max = prices[i];
//           memo.push(max - min);
//       }
//   }
//   return memo.length ? Math.max(...memo) : 0;
// };

// //Second solution
// var maxProfit = function(prices) {
//     if (prices.length <= 1) {
//         return 0;
//     }
//     let min = prices[0];
//     let max = prices[0];
//     let memo = 0;
//     for (let i = 1; i < prices.length; i++) {
//         if (prices[i] < min) {
//             min = prices[i];
//             max = prices[i];
//         } else if (prices[i] > max) {
//             max = prices[i];
//             memo = Math.max(memo, (max - min));
//         }
//     }
//     return memo ? memo : 0;
// };

//Third solution
var maxProfit = function(prices) {
    if (prices.length <= 1) {
        return 0;
    }
    let lenPrices = prices.length;
    let max = prices[lenPrices - 1];
    let min = max;
    let memo = [0];
    let lenMemo = 0;
    for (let i = lenPrices - 2; i >= 0; i--) {
      if (prices[i] > max) {
        max = prices[i];
        min = max;
      } else if (prices[i] < min) {
        min = prices[i];
        if ((max - min) > memo[lenMemo]) {
          memo.push(max - min);
          lenMemo++;
        }
      }
    }
    return memo[lenMemo];
  };

// //Shorter but slower solution
// var maxProfit = function(prices) {
//     if (prices.length <= 1) {
//         return 0;
//     }
//     let max = 0;
//     let temp;
//     for (let i = 0; i < prices.length; i++) {
//       temp = Math.max(...prices.slice((i + 1))) - prices[i];
//       max = (temp > max) ? temp : max;
//     }
//     return max;
// };


console.log(maxProfit([5, 10, 9, 4, 1, 7, 6, 8]));
console.log(maxProfit([5, 4, 3, 2, 1]));
console.log(maxProfit([1, 3, 7, 15, 2, 5, 9]));