// Given two strings s and t, return the minimum window in s which will contain all the characters in t. If there is no such window in s that covers all characters in t, return the empty string "".

// Note that If there is such a window, it is guaranteed that there will always be only one unique minimum window in s.

// Example 1:

// Input: s = "ADOBECODEBANC", t = "ABC"
// Output: "BANC"


// Example 2:

// Input: s = "a", t = "a"
// Output: "a"

var minWindow = function(s, t) {

  const collection = {};
  let min1 = 0;
  let min2 = s.length;

  let ref = false;

  for (let i = 0; i < t.length; i++) {
    if (t[i] in collection) {
      collection[t[i]]++;
    } else {
      collection[t[i]] = 1;
    }
  }

  let count = t.length;

  let p1 = 0;
  let p2 = -1;

  while (p2 < s.length) {
    if (count > 0) {
      p2++;
      if (s[p2] in collection) {
        if (collection[s[p2]] > 0) count--;  
        collection[s[p2]]--;
      }
    } else {
      if ((p2 - p1) < (min2 - min1)) {
        min1 = p1;
        min2 = p2 + 1;
        ref = true;
      }
      if (s[p1] in collection) {
        collection[s[p1]]++;
        if (collection[s[p1]] > 0) count++;
      } 
      p1++;
    }
  }
  return ref ? s.slice(min1, min2) : ""; 
};

console.log(minWindow("aaffhkksemckelloe", "fhea"));
console.log(minWindow("ahffaksfajeeubsne", "jefaa"));