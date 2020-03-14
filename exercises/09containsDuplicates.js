//const containsDuplicates = (array) => {
//    array.sort((a, b) => a - b);
//    for (let i = 0; i < array.length; i++) {
//        if (array[i] === array[i + 1]) {
//            return true;
//        }  
//    }
//    return false;
//}
//console.log(containsDuplicates([1, 2, 3, 2]));


var containsDuplicate = function(nums) {
    return nums.length !== new Set(nums).size;
};
console.log(containsDuplicate([1, 2, 3, 2]));