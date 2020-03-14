//console.time();
//const maxSubArray = (array) => {
//    let num = -Infinity;
//    for (let i = 0; i < array.length; i++) {
//        let sum = 0;
//        let arr = [];
//        for (let j = i; j < array.length; j++) {
//            arr.push(array[j]);
//            sum += array[j];
//            if (sum > num) {
//                num = sum;
//            }  
//        }
//    }
//    return num;
//}
//console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
//console.timeEnd();

//O(n^2); This is SOOOOO BAAAAADDD


console.time()
function maxSubArray(arr) {
    var prev = 0;
    var max = -Infinity;
  
    for (var i = 0; i < arr.length; i++) {
      prev = Math.max(prev + arr[i], arr[i]);
      max = Math.max(max, prev);
    }
    return max;
}
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
console.timeEnd()