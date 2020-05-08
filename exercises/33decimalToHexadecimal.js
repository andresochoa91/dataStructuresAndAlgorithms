var toHex = function(num) {
  if (num < 0) {
    num += Math.pow(2, 32);  //The complement ONLY in negative numbers
  }
  let hexNumbers = "0123456789abcdef";
  let rem = hexNumbers[num % 16];
  let hex = rem;
  num = Math.floor(num / 16);
  while (num > 0) {
    rem = hexNumbers[num % 16];
    hex = `${rem}${hex}`;
    num = Math.floor(num / 16);  
  }
  return hex;
};
console.log(toHex(4294966093));