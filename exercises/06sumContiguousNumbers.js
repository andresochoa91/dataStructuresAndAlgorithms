const maxSubArray = (array, num) => {
    for (let i = 0; i < array.length; i++) {
        let arr = [];
        let sum = 0;
        if (array[i] === num) {
            return [array[i]]
        }

        for (let j = i; j < array.length; j++) {
            arr.push(array[j]);
            sum += array[j];
            if (sum === num) {
                return arr;
            }
        } 
    }
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4], 6));

//O(n);
