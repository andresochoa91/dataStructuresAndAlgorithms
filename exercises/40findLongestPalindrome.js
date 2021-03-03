//carraceseseca
//^                   

//Inefficient solution
//word = "jglknendplocymmvwtoxvebkekzfdhykknufqdkntnqvgfbahsljkobhbxkvyictzkqjqydczuxjkgecdyhixdttxfqmgksrkyvopwprsgoszftuhawflzjyuyrujrxluhzjvbflxgcovilthvuihzttzithnsqbdxtafxrfrblulsakrahulwthhbjcslceewxfxtavljpimaqqlcbrdgtgjryjytgxljxtravwdlnrrauxplempnbfeusgtqzjtzshwieutxdytlrrqvyemlyzolhbkzhyfyttevqnfvmpqjngcnazmaagwihxrhmcibyfkccyrqwnzlzqeuenhwlzhbxqxerfifzncimwqsfatudjihtumrtjtggzleovihifxufvwqeimbxvzlxwcsknksogsbwwdlwulnetdysvsfkonggeedtshxqkgbhoscjgpiel"

// var longestPalindrome = function(s) {

//   if (s === "") {
//     return "";      
//   }
    
//   function isPalindrome (st) {
//     if (st.split("").reverse().join("") === st) {
//       return true;
//     }
//     return false;
//   }

//   for (let i = 0; i < s.length; i++) {
//     for (let j = 0; j < i + 1; j++) {
//       let newStr = s.slice(j, s.length - i + j)
//       if (isPalindrome(newStr)) {
//         return newStr;
//       }
//     }
//   }    
// };
// console.log(longestPalindrome(word));


//More efficient (Iterative)
var longestPalindrome = function(s) {
  if (s.length === 1) return s;

  let lp = s[0];
  let p1 = 0;
  let p2 = 1;

  // const memo = new Set;  
    
  const isPalindrome = (word) => {
    // if (memo.has(word)) return true;
    for (let i = 0; i < word.length / 2; i++) {
      if (!(word[i] === word[word.length - 1 - i])) return false
    }
    // memo.add(word);  
    return true;
  };

  const getPalindrome = (left, right) => {
    while ((s[left] === s[right]) && s[left] && s[right]) {
      left--;
      right++;
    }
    
    p1 = left + 1;
    p2 = right - 1;

    if ((s.slice(p1, p2 + 1)).length > lp.length) {
      lp = s.slice(p1, p2 + 1);
    }
  };

  while (s[p2]) {
    if (isPalindrome(s.slice(p1, p2 + 1))) {
      getPalindrome(p1, p2);
    } 
    if (isPalindrome(s.slice(p1 - 1, p2 + 1))) {
      getPalindrome(p1 - 1, p2, s.slice(p1 - 1, p2));
    }
    p1++;
    p2++;        
  };
  return lp;
};


//More efficient (Recursive)
var longestPalindrome = function(s) {
  
  if (s.length < 2) {
    return s;
  }

  let lp = s[0];

  function recursive (left, right) {
    if (left < 0) {
      return null;
    }

    if (s[left] === s[right]) {
      if (s.slice(left, right + 1).length > lp.length) {
        lp = s.slice(left, right + 1);
      }
      
      recursive(left - 1, right + 1);
    } else {
      return null;
    }
  }
  
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      if (s.slice(i, i + 2).length > lp.length) {
        lp = s.slice(i, i + 2)
      }
      recursive(i, (i + 1));
    }
    if (s[i - 1] === s[i + 1]) {
      if (s.slice(i - 1, i + 2).length > lp.length) {
        lp = s.slice(i - 1, i + 2)
      }
      recursive((i - 1), (i + 1));
    }
  }
  return lp;
}

let testCases = [
  "",
  "cbbd",
  "jglknendplocymmvwtoxvebkekzfdhykknufqdkntnqvgfbahsljkobhbxkvyictzkqjqydczuxjkgecdyhixdttxfqmgksrkyvopwprsgoszftuhawflzjyuyrujrxluhzjvbflxgcovilthvuihzttzithnsqbdxtafxrfrblulsakrahulwthhbjcslceewxfxtavljpimaqqlcbrdgtgjryjytgxljxtravwdlnrrauxplempnbfeusgtqzjtzshwieutxdytlrrqvyemlyzolhbkzhyfyttevqnfvmpqjngcnazmaagwihxrhmcibyfkccyrqwnzlzqeuenhwlzhbxqxerfifzncimwqsfatudjihtumrtjtggzleovihifxufvwqeimbxvzlxwcsknksogsbwwdlwulnetdysvsfkonggeedtshxqkgbhoscjgpiel",
  "hello",
  "a",
  "bb",
  "ccc",
  "aaaa",
  "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
];

for (let i = 0; i < testCases.length; i++) {
  console.log(longestPalindrome(testCases[i]))
}