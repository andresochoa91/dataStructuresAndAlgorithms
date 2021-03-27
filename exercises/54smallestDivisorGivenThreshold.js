// //First approach
// var smallestDivisor = function(nums, threshold) {
//   let newNums = [];
//   const memo = {};
//   let max = Math.max(...nums);   
//   for (let i = 1; i <= max; i++) newNums.push(i);     

//   const divide = (div) => nums.reduce((acc, num) => acc + Math.ceil(num / div), 0);

//   if (divide(1) <= threshold) return 1;
  
//   let left = 0;
//   let right = newNums.length - 1;
  
//   while (left < right - 1) {
//     let mid = Math.floor((left + right) / 2); 
//     if (!memo[mid]) memo[mid] = divide(newNums[mid]);  
//     let dMid = memo[mid];
//     if (threshold >= dMid) {
//       right = mid;
//     } else {
//       left = mid;
//     }
//   }
//   return newNums[right];
// };


//Efficient recursive

// var smallestDivisor = function(nums, threshold) {
//   let max = nums.reduce((acc, num) => acc + num, 0);
//   let min = 1;
  
//   const bs = (left, right) => {
//     if (left > right) return left;    
//     let mid = Math.floor((left + right) / 2);
    
//     let tem = nums.reduce((acc, num) => acc + Math.ceil(num / mid), 0);
    
//     if (tem > threshold){
//       return bs(mid + 1, right);
//     } else {
//       return bs(left, mid - 1);
//     }  
//   };    
//   return bs(min, max);
// };
  

//Efficient iterative
var smallestDivisor = function(nums, threshold) {
  let right = nums.reduce((acc, num) => acc + num, 0);
  let left = 1;
  
  while (true) {
    if (left > right) return left
    let mid = Math.floor((left + right) / 2);    
    let tem = nums.reduce((acc, num) => acc + Math.ceil(num / mid), 0);
    
    if (tem > threshold){
      left = mid + 1;
    } else {
      right = mid - 1;
    }  
  };    
};

let res1 = smallestDivisor([3,2,4,1,5,11,6,6,6,6,5,5,5,5,4,4,4,4,3,3,3,3,2,2,2,2,7,7,7,7,4,5,4,3,2,3,4,5,6,7,8,9,6,9,8,7,6,5,4,3,2,1], 54);
    
let res2 = smallestDivisor([3,2,4,1,5,11], 8);
    
console.log(res1);
console.log(res2);
