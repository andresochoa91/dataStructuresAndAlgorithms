// Given a string s of '(' , ')' and lowercase English characters. 

// Your task is to remove the minimum number of parentheses ( '(' or ')', in any positions ) so that the resulting parentheses string is valid and return any valid string.

// Formally, a parentheses string is valid if and only if:

//     It is the empty string, contains only lowercase characters, or
//     It can be written as AB (A concatenated with B), where A and B are valid strings, or
//     It can be written as (A), where A is a valid string.


// Input: s = "lee(t(c)o)de)"
// Output: "lee(t(c)o)de"
// Explanation: "lee(t(co)de)" , "lee(t(c)ode)" would also be accepted.


var minRemoveToMakeValid = function(s) {
  let stack = [];
  s = s.split("");
  
  for (let i = 0; i < s.length; i++) {
      if (s[i] === "(") {
          stack.push(i);
          s[i] = "";
      } else if (s[i] === ")") {
          if (stack.length) {
              s[stack.pop()] = "(";
              s[i] = ")";
          } else {
              s[i] = "";
          }
      } 
  }
  return s.join("");
};

console.log(minRemoveToMakeValid("lee(t(c)o)de)"));