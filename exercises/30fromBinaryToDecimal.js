//Long solution
let bin = "10000111"

// const binToInt = (bNum) => {
//   let sum = 0;
//   for (let i = 0; i < bNum.length; i++) {
//     if (bNum[i] === "1") {
//       sum += (2 ** (bNum.length - i - 1));
//     } 
//   }
//   return sum;
// }
// console.log(binToInt(bin));


//One line solution
const binToInt = (bNum) => bNum.split("").reduce((count, num, i) => num === "1" ? count + (2 ** (bNum.length - i - 1)) : count, 0);
console.log(binToInt(bin));
