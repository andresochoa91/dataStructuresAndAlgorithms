//Long solution
// var binaryGap = function(N) {
//   N = N.toString(2);
//   let counter = 0;
//   let maxSum = 0;
//   for (let i = 0; i < N.length; i++) {
//     if (N[i] === "1") {
//       if (counter === 0) {
//         counter++;
//       } else {
//         if (counter > maxSum) {
//           maxSum = counter;
//         }
//         counter = 1;
//       }
//     } else {
//       counter++;
//     }
//   }
//   return maxSum;
// };
// console.log(binaryGap(22));


//One line solution
const binaryGap = N => Math.max(0, ...N.toString(2).split('1').slice(1, -1).map(gap => gap.length + 1));
console.log(binaryGap(22))  

let bin = "100001011001"
let arr = bin.split("1");
console.log(arr);
console.log(arr.slice(1, -1));
console.log(arr.slice(1, -1).map(gap => gap.length + 1));