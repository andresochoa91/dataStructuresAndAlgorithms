/*
const boxes = [1, 2, 3, 4, 5];

function logAllPairs(array) {
    for(let i = 0; i < array.length; i++) {
        for(let j = 0; j < array.length; j++) {
            console.log(array[i], array[j])
        }
    }
}

logAllPairs(boxes)

//O(n * n)
//O(n^2)
*/


const boxes = [1, 2, 3, 4, 5]; 
const boxes2 = [2, 3, 4, 5, 6];

function logAllPairs(array, array2) {
    for(let i = 0; i < array.length; i++) { 
        for(let j = 0; j < array2.length; j++) {
            console.log(array[i], array2[j])
        }
    }
}

logAllPairs(boxes, boxes2)

//O(n * m) (Different arrays in nested loops)