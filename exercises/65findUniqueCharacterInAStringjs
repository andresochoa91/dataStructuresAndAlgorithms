//Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.

var firstUniqChar = function(s) {

    if (s === "") return -1;
    
    const collection = {};
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] in collection) {
            collection[s[i]]++;    
        } else {
            collection[s[i]] = 1;       
        }
    }
    
    for (let i = 0; i < s.length; i++) {
        if (collection[s[i]] === 1) {
            return i;
        }
    }
    
    return -1;
};

console.log(firstUniqChar('leetcode'));