//Input: [0,1,0,3,12]
//Output: [1,3,12,0,0]


//const moveZeroes = (array) => {
//    let zeroes = 0;
//    let arr = [];
//    for (let i = 0; i < array.length; i++) {
//        if (array[i] !== 0) {
//            arr.push(array[i]);
//        } else {
//            zeroes++;
//        }
//    }
//    for (i = 0; i < zeroes; i++) {
//        arr.push(0);
//    }
//    console.log(arr);
//}
//moveZeroes([0,1,0,3,12]);


const moveZeroes = (array) => {
    let zeroes = (array.length - 1);
    let num = 0;
    let arr = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== 0) {
            arr[num] = (array[i]);
            num++;
        } else {
            arr[zeroes] = 0;
            zeroes--;
        }
    }
    console.log(arr)
}
moveZeroes([0,1,0,3,12]);
