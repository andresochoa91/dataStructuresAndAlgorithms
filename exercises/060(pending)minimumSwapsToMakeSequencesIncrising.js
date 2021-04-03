/* We have two integer sequences A and B of the same non-zero length.

We are allowed to swap elements A[i] and B[i].  Note that both elements are in the same index position in their respective sequences.

At the end of some number of swaps, A and B are both strictly increasing.  (A sequence is strictly increasing if and only if A[0] < A[1] < A[2] < ... < A[A.length - 1].)

Given A and B, return the minimum number of swaps to make both sequences strictly increasing.  It is guaranteed that the given input always makes it possible.

Example:
Input: A = [1,3,5,4], B = [1,2,3,7]
Output: 1
Explanation: 
Swap A[3] and B[3].  Then the sequences are:
A = [1, 3, 5, 7] and B = [1, 2, 3, 4]
which are both strictly increasing.
 */

var minSwap = function(A, B) {
  let noSwap = 0; 
  let swap = 1;
  for (let i = 1; i < A.length; i++) {
      let nxtNoSwapNum = Math.min(A[i] > B[i - 1] && B[i] > A[i - 1] ? swap : Infinity,
                                  A[i] > A[i - 1] && B[i] > B[i - 1] ? noSwap : Infinity)
      let nxtSwapNum = Math.min(A[i] > B[i - 1] && B[i] > A[i - 1] ? noSwap + 1 : Infinity,
                                A[i] > A[i - 1] && B[i] > B[i - 1] ? swap + 1 : Infinity)
                      
      noSwap = nxtNoSwapNum
      swap = nxtSwapNum
  } 
  return Math.min(noSwap, swap)
};


let testCases = [
  [[0,4,4,5,9], [0,1,6,8,10]],
  [[1, 5, 7, 6], [4, 3, 4, 8]]
]

for (let i = 0; i < testCases.length; i++) {
  console.log(minSwap(testCases[i][0], testCases[i][1]));
}
