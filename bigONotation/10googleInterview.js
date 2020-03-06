//function hasPairWithSum(arr, sum){
//    var len = arr.length;
//    for(var i =0; i<len-1; i++){
//       for(var j = i+1;j<len; j++){
//          if (arr[i] + arr[j] === sum)
//              return true;
//       }
//    }
//    return false;
//}
  
//// Better
//
//function hasPairWithSum(arr, sum){
//  const mySet = new Set();
//  const len = arr.length;
//  for (let i = 0; i < len; i++){
//    if (mySet.has(arr[i])) {
//      return true;
//    }
//    mySet.add(sum - arr[i]);
//    console.log(mySet.has([i]));
//  }
//  return false;
//}
//
//console.log(hasPairWithSum([6,4,3,2,1,7], 11));

let mySet = new Set([1, 2, 3]);
mySet.add(4).add(5).add(6);
console.log(mySet)
console.log(mySet.has(2));
console.log(mySet.size)
