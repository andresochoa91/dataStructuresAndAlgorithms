var containsDuplicate = function(nums) {
    const collection = new Set();
    
    for (let i = 0; i < nums.length; i++) {
        if (collection.has(nums[i])) return true;
        collection.add(nums[i]);
    }
    return false;
};

console.log(containsDuplicate([1, 2, 3, 2]));