//Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.

// 8   -         -
// 7   -         -   -
// 6   - -       -   -
// 5   - -   -   -   -
// 4   - -   - - -   -
// 3   - -   - - - - -
// 2   - - - - - - - -
// 1 - - - - - - - - -
// --------------------
//   1 8 6 2 5 4 8 3 7

// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.


var maxArea = function(height) {
    if (height.length < 2) return null;
    let left = 0;
    let right = height.length - 1;
    let max = 0;

    while (left !== right) {
        let min = Math.min(height[left], height[right]);
        let total = min * (right - left);
        if (total > max) max = total;

        if (height[left] > height[right]) {
            right--;
        } else {
            left++;
        } 
    }
    return max;
};

let testCases = [
    [6, 9, 8, 7, 1, 3, 2, 7, 8, 8, 6], //64
    [1,8,6,2,5,4,8,3,7], //49
    [1,1], //1
    [4,3,2,1,4], //16 
    [1,2,1], //2
    [], //null
    [1, 2], //1 
    [1] //null
];

for (let i = 0; i < testCases.length; i++) {
    console.log(maxArea(testCases[i]));
}