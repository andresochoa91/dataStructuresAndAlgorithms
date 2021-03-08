// Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.

// Note that after backspacing an empty text, the text will continue empty.

// Example 1:

// Input: S = "ab#c", T = "ad#c"
// Output: true
// Explanation: Both S and T become "ac".


// Not that efficient
// var backspaceCompare = function(S, T) {
//     function loop (char) {
//         let newChar = "";
//         let len = 0;
//         for (let i = 0; i < char.length; i++) {
//             if (char[i] === "#") {
//                 if (newChar !== "") {
//                     newChar = newChar.slice(0, len - 1);
//                     len--;
//                 }
//             } else {
//                 newChar += char[i];
//                 len++;
//             }
//         }
//         return newChar;
//     }
//     return loop(S) === loop(T);
// };

// // More efficient
// var backspaceCompare = function(S, T) {
//     let stack1 = [];
//     let stack2 = [];
    
//     const buildStrings = (str, stack) => {
//         if (str !== undefined) {
//             if (str !== "#") {
//                 stack.push(str);
//             } else {
//                 stack.pop();
//             }
//         }
//     };
    
//     for (let i = 0; i < Math.max(S.length, T.length); i++) {
//         buildStrings(S[i], stack1);
//         buildStrings(T[i], stack2);
//     }
//     return stack1.join("") === stack2.join("");
// };

// The most efficient time complexity: O(n) , space complexity: O(1)
var backspaceCompare = function(S, T) {
    let pS = S.length - 1;
    let pT = T.length - 1;
    while (pS >= 0 || pT >= 0) {
        
        const getNextChar = (word, pointer) => {
            let count = 0;
            while (word[pointer] === "#" || count !== 0) {
                if (word[pointer] === "#") {
                    count++;
                } else {
                    count--;
                }
                pointer--;
            }
            return pointer;
        };

        pS = getNextChar(S, pS)
        pT = getNextChar(T, pT)

        if (S[pS] === T[pT]) {
            pS--;
            pT--;
        } else {
            return false;
        }
    }
    return true;
};
