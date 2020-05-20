//[1,3,2,2,5,2,3,7] => [3,2,2,2,3] => 5
//[2, 4, 4, 5, 7, 3, 6, 6] => [2, 3], [3, 4, 4], [4, 4, 5], [5, 6, 6], [6, 6, 7];

//{2: 0,  4: 2,  5: 1,  7: 1,  3: 1,  6: 2}

//2:     0 +                                                    
//2 + 1  1                                                                 
//       1                                                 

// //My first solution 
// var findLHS = function(nums) {
//   let helperObj = {};
//   let subsequences = 0;

//   for (let i = 0; i < nums.length; i++) {
//     if (!helperObj[nums[i]]) {
//       helperObj[nums[i]] = 1;
//     } else {
//       helperObj[nums[i]]++;
//     }
//   }

//   Object.keys(helperObj).forEach(key => {
//     let num = parseInt(key);
//     if (helperObj[num + 1]) {
//       let temp = helperObj[num] + helperObj[num + 1];
//       if (temp > subsequences) {
//         subsequences = temp;
//       }
//     }
//   })
//   return subsequences;    
// };
// console.log(findLHS([1,3,2,2,5,2,3,7]));


//My second solution 
var findLHS = function(nums) {
  let map = new Map();
  let subsequences = 0;

  for (let i = 0; i < nums.length; i++) {
    if (!map.get(nums[i])) {
      map.set(nums[i], 1);
    } else {
      map.set(nums[i], map.get(nums[i]) + 1);
    }

    if (map.get(nums[i] + 1) + map.get(nums[i]) > subsequences) {
      subsequences = map.get(nums[i] + 1) + map.get(nums[i]);
    }
    
    if (map.get(nums[i] - 1) + map.get(nums[i]) > subsequences) {
      subsequences = map.get(nums[i] - 1) + map.get(nums[i]);
    }
  }
  return subsequences;
};
console.log(findLHS([1,3,2,2,5,2,3,7]));


// //Third solution
// var findLHS = function(nums) {
//   let res = 0 
//   let map = new Map();
  
//   nums.forEach(n => map.has(n) ? map.set(n, map.get(n) + 1) : map.set(n, 1));
  
//   for (let key of map.keys()) {
//     if(map.has(key - 1)) {
//       res = Math.max(res, map.get(key) + map.get(key - 1));
//     }
//   }
//   return res;
// };
