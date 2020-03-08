const strings = ["a", "b", "c", "d"];
//4*4 = 16 bytes of storages

////push
//strings.push("e"); //O(1)
//console.log(strings); //Explanation below
////["a", "b", "c", "d"];
////  0    1    2    3      and adding e
////["a", "b", "c", "d", "e"];
////  0    1    2    3    4  we don't move anything, just create a value in the last  


////pop
//strings.pop(); //O(1) Remove last item
//console.log(strings);
////["a", "b", "c", "d"];
////  0    1    2    3      and adding e
////["a", "b", "c"];
////  0    1    2    we don't move anything, just delete the last value  


////unshift
//strings.unshift("x"); //O(n)
//console.log(strings);
////["a", "b", "c", "d"];
////  0    1    2    3      and adding x
////["x", "a", "b", "c", "d"];
////  0    1    2    3    4  we need to reasign every value (looping)  


//splice
strings.splice(2, 1, "x"); //O(n/2) --> O(n)
console.log(strings);
//["a", "b", "c", "d"];
//  0    1    2    3      and adding x
//[a", "b", "x", "c", "d"];
// 0    1    2    3    4  we need to reasign values after insertion (looping)  

