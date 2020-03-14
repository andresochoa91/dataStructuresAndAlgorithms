const everyone = ['Dory', 'Bruce', 'Marlin', 
                  'Nemo', 'Hank', 'Gill', 
                  'Bloat', 'Nigel', 'Squirt', 'Darla']; //O(1)

function findNemo(array) {
    for(let i = 0; i < array.length; i++) { //O(n)
        console.log("running"); //O(n)
        if(array[i] === "Nemo") { //O(n)
            console.log("Nemo"); //O(n)
            break;  //The loop is going to stop here //O(n)
        }        
    }
}
findNemo(everyone) //O(n) Because it iterates in every value of "everyone"

//BigO (1 + 6n) 