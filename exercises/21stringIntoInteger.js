// let f = (x) => {
//   let sign = 1;
//   let start = 0;
// 	if (x[0] === "-") {
// 		sign = -1;
//     start = 1;
//   }
  
//   let charNumbers = {
//     "0": 0,
//     "1": 1,
//     "2": 2,
//     "3": 3,
//     "4": 4,
//     "5": 5,
//     "6": 6,
//     "7": 7,
//     "8": 8,
//     "9": 9
//   }

//   let number = 0;
//   let times10 = 1;

//   for (let i = x.length - 1; i >= start; i--) {
//     number += (charNumbers[x[i]] * times10);
//     console.log(number);
//     times10 *= 10;
//   }
  
//   return number * sign;
// };

// var x = "-4000000";
// console.log(f(x)); //42


//Cleaner solution

let f = (x) => {
  let sign = 1;
  let start = 0;
	if (x[0] === "-") {
		sign = -1;
    start = 1;
  }
  
  let charNumbers = {
    "0": 0,
    "1": 1,
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9
  }

  // x = 452
  
  let number = 0;
  for (let i = start; i < x.length; i++) {
    number = number * 10 + charNumbers[x[i]];
  }
  
  return number * sign;
};

var x = "-4000000";
console.log(f(x));