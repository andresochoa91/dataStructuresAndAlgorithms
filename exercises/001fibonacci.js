//Fibinacci

/*const add = (a, b) => {
    return a + b;
}

const sub = (a, b) => {
    return a - b;
}

const op = (a, b, callback) => {
    return callback(a, b);
}

console.log(op(3, 4, add));*/

const fib = (a, b, c) => {
    if (a === 0 && b === 1) {console.log(`${a}\n${b}`);} 
    if (a + b < c) {
        console.log(a + b);
        fib(b, (a + b), c)
    }  
}
fib(0, 1, 200)


