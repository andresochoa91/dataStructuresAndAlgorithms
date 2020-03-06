let n = [1, 2, 3, 4, 5];

function printNumbers(numbers) {

    console.log("These are the numbers")
    numbers.forEach(num => {
        console.log(num);
    }); 

    console.log("And these are their sums")
    numbers.forEach(firstNumber => {
        numbers.forEach(secondNumber => {
            console.log(firstNumber + secondNumber);
        });    
    });
}
printNumbers(n)

//O(n + n^2) we just keep the dominant term, in this case m^2
//O(n^2) 

//If for example we have O(x^2 + 3x + 100 + x/2), we just have
//O(n^2) because is the most relevant when scaling