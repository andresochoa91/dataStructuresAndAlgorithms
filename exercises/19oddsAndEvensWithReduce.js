const isOdd = (number) => {
  if (number % 2 === 1) {
    return true;
  }
  return false; 
}

var numbers = [5, 3, 8, 6, 9, 1, 0, 2, 2];
var oddEvenCounts = numbers.reduce(function(counts, number) {
  if (isOdd(number)) {
    if ("odd" in counts) {
      counts.odd++;
    } else {
      counts.odd = 1;
    }
  } else {
    if ("even" in counts) {
      counts.even++;
    } else {
      counts.even = 1;
    }
  }
  return counts;
}, {});

console.log(oddEvenCounts);