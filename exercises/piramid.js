//console.time("test");
//const piramid = (num) => {
//    for (let i = 0; i < Math.floor(num/2); i++) {
//        console.log("#".repeat(i + 1) + "\n");
//    }
//    
//    for (let j = Math.floor(num/2); j > -1; j--) {
//        console.log("#".repeat(j + 1) + "\n");
//    }
//}
//
//piramid(10000)
//console.timeEnd("test");
////O(a + b)

console.time("test");
const piramid = (num) => {
    for (let i = 0; i < num; i++) {
        if(i < Math.floor(num/2)) {
            console.log("#".repeat(i + 1) + "\n");
        } else if (num % 2 === 0){
            console.log("#".repeat(num - i - 1) + "\n");
        } else {
            console.log("#".repeat(num - i) + "\n");
        }
    }
}

piramid(12)
console.timeEnd("test");
//O(n)