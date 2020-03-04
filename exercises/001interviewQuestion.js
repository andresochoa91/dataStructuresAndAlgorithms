//Given 2 arrays, create a function that lets a user know (true/false)
// whether these two arrays contain any common items. For Example

const array1 = new Array(10000).fill("Hi");
const array2 = new Array(2000).fill("Hello");


//const array1 = ["a", "b", "c", "x"];
//const array2 = ["z", "y", "i"];
////Should return false

//let array1 = ["a", "b", "c", "x"];
//let array2 = ["z", "y", "x"];
//Should return true

//console.time("Experiment");
//const match = (arr1, arr2) => {
//    for(let i = 0; i < arr1.length; i++) {
//        for(let j = 0; j < arr2.length; j++) {
//            if(arr1[i] === arr2[j]) {
//                return true;
//            }
//        }
//    }
//    return false;
//}
//
//console.log(match(array1, array2))
//console.timeEnd("Experiment");
//
////O(a * b) time complexity
////O(1) space complexity


////Different solution
//console.time("Experiment");
//const match = (arr1, arr2) => {
//    let obj = {};
//
//    arr1.forEach(char => {
//        obj[char] = true;
//    })
//
//    for(let i = 0; i < arr2.length; i++) {
//        if(obj[arr2[i]]) {
//            return true;
//        }
//    }
//    return false;
//}
//
//console.log(match(array1, array2))
//console.timeEnd("Experiment");
////O(a + b) time complexity
////O(a) space complexity    


//Another solution, shorter and more effective in memory complexity, but not in time complexity

console.time("Experiment");
const match = (arr1, arr2) => {
    return arr1.some(char => arr2.includes(char) )
}
console.log(match(array1, array2));
console.timeEnd("Experiment");

//O(n^2) time complexity in worst case
//O(1) space complexity 