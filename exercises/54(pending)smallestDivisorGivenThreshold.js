// //First approach
// var smallestDivisor = function(nums, threshold) {
//     let temp = 1;
//     let actual = nums.reduce((count, num) => count + Math.ceil(num / temp), 0);
//     while (actual > threshold) {
//         temp++;
//         actual = nums.reduce((count, num) => count + Math.ceil(num / temp), 0);    
//     }
//     return temp;
// };


//Second approach
// var smallestDivisor = function(nums, threshold) {
//   let temp = 0;
//   let accum = Infinity;
//   let counter = 1;
//   let helper = nums;
  
//   while (accum > threshold) {
//       accum = 0;
//       helper = helper.reduce((count, num) => {
//           if (num / counter === 1) {
//               temp++;
//               return count;
//           } else {
//               count.push(num);
//               accum += Math.ceil(num / counter);
//               return count;
//           }
//       }, []);
//       accum += temp;
//       counter++;
//   }
//   return counter - 1;
// };



//Efficient solution

var smallestDivisor = function(nums, threshold) {
  let max = nums.reduce((a, b) => a + b, 0);
  let min = 1;
  
  const bs = (left, right) => {
    if(left > right) return left;
    
    let mid = Math.floor((left + right) / 2);
    
    let tem = nums.reduce((a, b) => {
      return a + Math.ceil(b / mid);
    }, 0);
    
    if(tem > threshold){
      return bs(mid+1, right);
    } else {
      return bs(left, mid-1);
    }  
  };    
  return bs(min, max);
};
    
let res1 = smallestDivisor([3, 2, 4, 1, 5, 11, 6, 6, 6, 6, 5, 5, 5, 5, 4, 4, 4,4, 3, 3, 3, 3, 2, 2, 2, 2, 7, 7, 7, 7, 4, 5, 4, 3, 2, 3, 4, 5, 6, 7, 8, 9, 6, 9, 8, 7, 6, 5, 4, 3, 2, 1], 54);
    
let res2 = smallestDivisor([3, 2, 4, 1, 5, 11], 8);
    
console.log(res1)
console.log(res2)
