/* function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
 */

//My solution
var mergeTrees = function(t1, t2) {
    if (t1 && t2) {
        return new TreeNode((t1.val + t2.val),
                            (mergeTrees(t1.left, t2.left)),
                            (mergeTrees(t1.right, t2.right))); 
    } else if (t1 && !t2) {
        return t1;
    } else {
        return t2;
    }
};

// //Another solution
// var mergeTrees = function(t1, t2, root) {   
//   if (!t1){
//       root = t2; 
//       return root;
//   }
  
//   if (!t2){
//       root = t1; 
//       return root;
//   }
  
//   root = new TreeNode(t1.val + t2.val);
//   root.left = mergeTrees(t1.left, t2.left, root);
//   root.right = mergeTrees(t1.right, t2.right, root);  
//   return root;
// };



//Tree 1                     Tree 2                  
//          1                         2                             
//         / \                       / \                            
//        3   2                     1   3                        
//       /                           \   \                      
//      5                             4   7        
//
//
//Merged tree:
//         3
//        / \
//       4   5
//      / \   \ 
//     5   4   7  