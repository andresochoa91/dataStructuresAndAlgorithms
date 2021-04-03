let rotate = function (nums, k) {
    let val = 0;
    let arr = [];
    let num = k;
    for (let i = 0; i < nums.length; i++) {
        if (i < k) {
            arr.push(nums[nums.length - num]);
            num--;
        } else {
            arr.push(nums[val]);
            val++
        }
    }
    nums = arr;
    return nums;
}
console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
