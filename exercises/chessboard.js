var a = "";
var b = ""

const chessboard = (num1, num2) => {
    for(let i = 0; i < num1; i++) {
        if(i % 2 === 0) {
            a += "#";
        } else {
            a += " ";
        }
    }

    for(let j = 0; j < num2; j++) {
        if(j % 2 === 0) {
            b += " " + a + "\n";     
        } else {
            b += a + "\n";
        }
    }
}

chessboard(7, 9)
console.log(b);

