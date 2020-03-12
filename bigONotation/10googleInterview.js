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
//
//console.log(hasPairWithSum([6,4,3,2,1,7], 11));


// Better

function hasPairWithSum(arr, sum){
  const mySet = new Set();
  for (let i = 0; i < arr.length; i++){
    if (mySet.has(arr[i])) {
      return true;
    }
    mySet.add(sum - arr[i]);
  }
  return false;
}

console.log(hasPairWithSum([6,4,3,2,1,7], 11));