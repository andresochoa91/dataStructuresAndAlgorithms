// Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

// Find all the elements of [1, n] inclusive that do not appear in this array.

// Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

// Example:

// Input:
// [4,3,2,7,8,2,3,1]

// Output:
// [5,6]


var findDisappearedNumbers = function(nums) {
  let p = 0
  while (p < nums.length) {
    if ((nums[p] === p + 1)) {
      nums[p] = 0;
      p++;
    } else if (nums[nums[p] - 1]) {
      let temp = nums[nums[p] - 1];
      nums[nums[p] - 1] = 0;
      nums[p] = temp;
    } else {
      p++;
    }
  }

  return nums.reduce((acc, num, i) => {
    if (num) acc.push(i + 1);
    return acc;
  }, [])
}
findDisappearedNumbers([4,3,2,7,8,2,3,1]);