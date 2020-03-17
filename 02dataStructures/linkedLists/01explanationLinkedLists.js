let obj1 = { a: true };
let obj2 = obj1;    //we are linking the value of obj1 in obj2
                    //there is an space in memore with value { a: true }

console.log(obj2);

obj1.a = "hello";
console.log(obj2);  //because obj1 is linked to obj2, obj2 receives the
                    //value of obj1

delete obj1;
console.log(obj2);  //even deleting obj1, the value of { a: "Hello" } in obj2
                    //remains somewhere in memory

obj2 = "hello";     
console.log(obj2);  //after we asign a new value for obj2, the value 
                    //{ a: "Hello" } dessapear in memory because there is no
                    //values or variables linked to it.