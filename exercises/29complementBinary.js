// //Manual solution
// var findComplement = function(num) {
//   let bin = (function convertIntoBinary(num, binary = []) {
//     if (num > 0) {
//       if (num % 2 === 0) {
//         binary.push("1");
//         return convertIntoBinary(num / 2, binary);
//       } else {
//         binary.push("0");
//         return convertIntoBinary(Math.floor(num / 2), binary);
//       }
//     } else {
//       return binary.reverse().join("");
//     }
//   })(num);
//   bin

//   return parseInt(bin, 2);  
// };
// console.log(findComplement(5));


//One line solution

var findComplement = function(num) {
  return parseInt(num.toString(2).split("").map(num => num === "1" ? "0" : "1").join(""), 2);
} 
console.log(findComplement(20));