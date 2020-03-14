//const rev = (word) => {
//    let c = [];
//    for (let i = word.length; i > -2; i--) {
//        c.push(word[i]);
//    }
//    console.log (c.join(""))    
//}
//rev("hello my baby, hello my honey, hello my ragtal gal");


//const rev = (word) => console.log(word.split("").reverse().join(""));
//rev("hello my baby, hello my honey, hello my ragtal gal")


const rev = word => console.log([...word].reverse().join(""))
rev("hello my baby, hello my honey, hello my ragtal gal")
