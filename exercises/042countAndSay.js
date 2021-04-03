//1
//11
//21
//1211
//111221

// //My first approach (With recursion)
// var countAndSay = function(n, seq = "1") {
//     if (n === 1) {
//       return seq;
//     }

//     let newSeq = "";
//     let count = 0;
//     let temp = seq[0]
//     for (let i = 0; i < seq.length + 1; i++) {
//       if (seq[i] === temp) {
//         count++;      
//       } else {
//         newSeq += count.toString() + temp.toString();
//         temp = seq[i];
//         count = 1;
//       }
//     }
//     return countAndSay(n - 1, newSeq);
// };
// console.log(countAndSay(5));


//Iterative solution
var countAndSay = function(n) {
  let seq = "1";
  let newSeq;
  let count;
  let temp;
  while (n > 1) {
    newSeq = "";
    count = 1;
    temp = seq[0];
    for (let i = 1; i < seq.length + 1; i++) {
      if (seq[i] === temp) {
        count++;      
      } else {
        newSeq += count.toString() + temp.toString();
        temp = seq[i];
        count = 1;
      }
    }
    n--;
    seq = newSeq
  }
  return seq;
};
console.log(countAndSay(5));
