//Normal Fibonacci O(2^n) Horrible
let calculations = 0;

function fibonacci (num) {
  calculations++;
  if (num < 2) {
    return num;
  } else {
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
}
console.log(fibonacci(10));
console.log(`Calculations: ${calculations}`);

calculations = 0;


//Fibonacci with Dynamic Programming O(n) Extremely good
function fDP () {
  let cache = {};
  return function fib (num) {
    calculations++;
    if (num in cache) {
      return cache[num];
    } else {
      if (num < 2) {
        return num
      } else {
        cache[num] = fib(num - 1) + fib(num - 2);
        return cache[num];
      }
    }
  }
}
const fibonacciDP = fDP();
console.log(fibonacciDP(10));
console.log(`Calculations: ${calculations}`);
  

//Fibonacci with Bottom up approach
function fibonacciDP2 (num) {
  let answer = [0, 1];
  for (let i = 2; i <= num; i++) {
    answer.push(answer[i - 2] + answer[i - 1]);
  }
  return answer.pop();
}
console.log(fibonacciDP2(10));