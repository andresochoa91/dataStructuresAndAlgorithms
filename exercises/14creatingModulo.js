function modulo (num1, num2) {
  if (num2 === 0 || isNaN(num1) || isNaN(num2)) {
    return NaN;
  }

  let val = Math.abs(num2);
  
  while (val < Math.abs(num1)) {
    val += Math.abs(num2);
  }

  function oper (num) {
      if (num1 < 0) {
          return -num;
      }
      return num
  }

  if (val === Math.abs(num1)) {
    return oper(0);
  } else {
    return oper(Math.abs(num1) - (val - Math.abs(num2)));
  }
}

console.log (modulo(14, -3));

console.log(14 % -3)