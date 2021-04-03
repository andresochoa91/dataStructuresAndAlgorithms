function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

var sortedArrayToBST = function(nums) {
  if (nums.length) {
      let midPoint = Math.floor(nums.length / 2);
      let leftSide = sortedArrayToBST(nums.slice(0, midPoint));
      let rightSide = sortedArrayToBST(nums.slice(midPoint + 1));
      return new TreeNode(nums[midPoint], leftSide, rightSide);
  }
  return null;
};
