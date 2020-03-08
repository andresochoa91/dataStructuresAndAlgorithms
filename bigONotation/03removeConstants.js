function fun(items) { 
    console.log(items[0]); //O(1)
    
    var middleIndex = Math.floor(items.length/2); //O(1)
    var index = 0; //O(1)

    while(index < middleIndex) { //O(n/2)
        console.log(items[index]); //O(n)
        index++; //O(n)
    }

    for(var i = 0; i < 100; i++) { //O(100)
        console.log('Hi'); //O(100) 
    }
}

//O(203 + n/2 + 2n) Now we delete the constants
//O(n/2 + 2n) More constants
//O(n + n) More constants
//O(2n) More constants
//O(n) Because we only care what scales, not simple constants, 
//     it doesn't matter how big is the value 