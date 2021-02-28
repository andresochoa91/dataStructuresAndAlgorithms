var isValid = function(s) {
    
    const collection = {
        ")" : "(",
        "]" : "[",
        "}" : "{"
    }
    
    const stack = [];
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] in collection) {
            if (!(collection[s[i]] === stack.pop())) return false;
        } else {
            stack.push(s[i]);
        }
    }
    return (!stack.length) ? true : false;    
};
// console.log(isValid("{[]}"))
// console.log(isValid("{[}]"))
console.log(isValid("{"))
//o(n * m)

