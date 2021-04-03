//Find the longest increasing subsequence of digits
//123456 return 6
//123121 return 3
//654321 return 1
//654521 return 2 


//Inefficient solution
const findLongestIncreasingSubsequenceDigits = (num) => {
  var numIntoString = Number(num).toString();
  var maxDigits = 1; 
  for (let i = 0; i < numIntoString.length; i++) {
    var incSub = 1;
    for (let j = i + 1; j < numIntoString.length; j++) {
      if (numIntoString[j - 1] < numIntoString[j]) {
        incSub++;
      } else {
        break;
      }
    }
    if (incSub > maxDigits) {
      maxDigits = incSub;
    }
  }
  return maxDigits;
}
console.log(findLongestIncreasingSubsequenceDigits(129874568901));
//O(n2)


//Efficient solution
const findLongestIncreasingSubsequenceDigits2 = (number) => {
  let arr = number.toString().split("");
  let count = 1;
  let innerCount = 1;
  for (let i = 0; i < (arr.length - 1); i++) {
    if (arr[i] < arr[i + 1]) {
      innerCount++;
    } else {
      innerCount = 1;
    }
    if (innerCount > count) {
      count = innerCount;
    }
  }
  return count;
}
console.log(findLongestIncreasingSubsequenceDigits2(129874568901));
//O(n)


