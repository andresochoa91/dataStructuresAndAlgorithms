const twoSum = (nums, target) => {
    const comp = {};
    for (let i = 0; i < nums.length; i++){
        if (comp[nums[i]] >= 0) {
            return [comp[nums[i]] , i];
        }
        comp[target-nums[i]] = i;
        console.log(comp);
    }
};
console.log(twoSum([12, 13, 3, 2, 11, 4], 6));
