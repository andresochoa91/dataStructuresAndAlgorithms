//Palindrome

const pal = (w) => {
    if(w.split("").reverse().join("") === w) {
        console.log(`${w} is a palindrome`)
    } 
    else {
        console.log(`${w} is not a palindrome`)
    }
}
pal("sama")

/*
const pal = (w) => {
    let letter = [];
    let rword = "";
    for(let i = 0; i < w.length; i++) {
        letter.push(w[i])
    }
    
    for(let i = 0; i < w.length; i++) {
        rword += letter.pop();
    }
    if (rword === w) {console.log(`${w} is a palindrome`);}
    else {console.log(`${w} is not a palindrome`);}
}

pal("level")
*/
