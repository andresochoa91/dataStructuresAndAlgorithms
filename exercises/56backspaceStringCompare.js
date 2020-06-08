// Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.

// Note that after backspacing an empty text, the text will continue empty.

// Example 1:

// Input: S = "ab#c", T = "ad#c"
// Output: true
// Explanation: Both S and T become "ac".


var backspaceCompare = function(S, T) {
  function loop (char) {
      let newChar = "";
      let len = 0;
      for (let i = 0; i < char.length; i++) {
          if (char[i] === "#") {
              if (newChar !== "") {
                  newChar = newChar.slice(0, len - 1);
                  len--;
              }
          } else {
              newChar += char[i];
              len++;
          }
      }
      return newChar;
  }
  return loop(S) === loop(T);
};
