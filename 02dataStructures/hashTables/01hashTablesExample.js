let user = {
    age: 54,
    name: "Kylie",
    magic: true,
    scream: function () {
        console.log("ahhhh!")
    }
}

console.log(user.age); //O(1)
user.spell = 'abra kadabra'; //O(1)
user.scream(); //O(1)