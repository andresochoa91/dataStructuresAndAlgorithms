// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:
// Input: s = "rat", t = "car"
// Output: false

const isAnagram = (str1, str2) => {
	if (!str1.length || !str2.length || (str1.length !== str2.length)) return false;
	str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  const collection = {};

	for (let i = 0; i < str1.length; i++) {
		if (str1[i] in collection) {
			collection[str1[i]]++;
    } else {
      collection[str1[i]] = 1;
    }
  }

  for (let i = 0; i < str2.length; i++) {
    if (collection[str2[i]]) {
      collection[str2[i]]--;
    } else {
      return false;
    }
  }
	return true;
}