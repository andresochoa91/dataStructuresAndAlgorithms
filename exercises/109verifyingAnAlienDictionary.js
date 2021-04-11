// In an alien language, surprisingly they also use english lowercase letters, but possibly in a different order. The order of the alphabet is some permutation of lowercase letters.
// Given a sequence of words written in the alien language, and the order of the alphabet, return true if and only if the given words are sorted lexicographicaly in this alien language.

// Example 1:
// Input: words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
// Output: true
// Explanation: As 'h' comes before 'l' in this language, then the sequence is sorted.

// Example 2:
// Input: words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz"
// Output: false
// Explanation: As 'd' comes after 'l' in this language, then words[0] > words[1], hence the sequence is unsorted.

// Example 3:
// Input: words = ["apple","app"], order = "abcdefghijklmnopqrstuvwxyz"
// Output: false
// Explanation: The first three characters "app" match, and the second string is shorter (in size.) According to lexicographical rules "apple" > "app", because 'l' > '∅', where '∅' is defined as the blank character which is less than any other character (More info).


// // O(n^2) worst case, O(n)
var isAlienSorted = function(words, order) {
  if (words.length === 1) return true;

  const chars = {};

  for (let i = 0; i < order.length; i++) {
    chars[order[i]] = i;
  }

  let p1 = 0;
  let p2 = 1;

  while (p2 < words.length) {
    let flag = false;
    for (let i = 0; i < Math.min(words[p1].length, words[p2].length); i++) {
      if (chars[words[p1][i]] < chars[words[p2][i]]) {
        flag = true;
        break;
      } else if (chars[words[p1][i]] > chars[words[p2][i]]) {
        return false;
      }
    }
    
    if (!flag && words[p1].length > words[p2].length) return false;
    
    p1++;
    p2++;
  }
  return true;
};