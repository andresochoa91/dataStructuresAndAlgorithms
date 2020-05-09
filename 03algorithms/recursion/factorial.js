// const factorial = (number) => {
//   if (number > 1) {
//     return number * factorial(number - 1);
//   }
//   return number;
// }
//console.log(factorial(5));

const factorial2 = (number) => {
  let facNum = number;
  while (number > 1) {
    number--;
    facNum *= number;
  }
  return facNum;
};
console.log(factorial2(3));