//Given [2, 3 ,1 ,2 ,3 ,5, 1, 2, 4]
//is should return 2 (first number recurring)

//Given [2, 1 ,1 ,2 ,3 ,5, 1, 2, 4]
//is should return 1 (first number recurring)

//Given [2, 3, 4, 5]
//is should return undefined

//const reChar = (array) => {
//    let obj = {};
//    for (let i = 0; i < array.length; i++) {
//        obj[array[i]] = 0;    
//    }   
//    for (i = 0; i < array.length; i++) {
//        if (obj[array[i]] !== 2) {
//            obj[array[i]]++;
//        }
//        if (obj[array[i]] === 2) {
//            return array[i];
//        }
//    }
//}
//console.log(reChar([2, 3, 1, 4, 5, 2, 1, 2, 4]));
////O(n), not bad, better than nesting loops


//better solution

const reChar = (array) => {
    let obj = {};
    for (let i = 0; i < array.length; i++) {
        if(obj[array[i]] !== undefined) {
            return array[i];
        } else {
            obj[array[i]] = i;
        }    
    }
}
console.log(reChar([2, 3, 1, 4, 5, 2, 1, 2, 4]));
//O(n), very efficient

