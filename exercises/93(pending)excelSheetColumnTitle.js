let a = '0ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// let a = a.split('');

var convertToTitle = function(n) {
  if (n < 27) {
    return a[n];
  } else {
    let temp = Math.ceil(n / 26) - 1;
    return convertToTitle(temp) + convertToTitle(n - (temp * 26));
  }
};

console.log(convertToTitle(2147483647));