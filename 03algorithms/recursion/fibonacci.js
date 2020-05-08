//0, 1, 1, 2, 3, 5, 8, 13, 21

//const fibonacciIterative = (index) => {
//  index--;
//  let n1 = 0;
//  let n2 = 1;
//  let temp = 0;
//  while (index) {
//    temp = n1 + n2;
//    n1 = n2;
//    n2 = temp;
//    index--;
//  }
//  return n2;
//}
//console.log(fibonacciIterative(7));


const fibonacciRecursive = (n) => {
  if (n < 2) {
    return n;
  } 
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}
console.log(fibonacciRecursive(7));