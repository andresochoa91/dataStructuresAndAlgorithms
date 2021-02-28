var singleNumber = function(nums) {

    const collection = new Set();
    
    for (let i = 0; i < nums.length; i++) {
        if (collection.has(nums[i])) {
            collection.delete(nums[i]);
        } else {
            collection.add(nums[i]);
        }
    };  
    return collection.values().next().value;
};

console.log(singleNumber([1, 1, 2, 3, 2, 4, 4, 5, 3]))

const myset = new Set();

myset.add(1)
myset.add(2)

console.log(myset.values().next().value)