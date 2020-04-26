/* write a function called same
accepts two arrays 
should return true if every value in the corresponding array is squared in the second array. The frequency of values must also be the same.
*/

//[1, 2, 3, 4, 3] :: [1, 4, 9, 16, 9] true 
//[1, 2, 3] :: [4, 1, 9] true
//[1, 2, 3] :: [1, 9] true
//[1, 2] :: [1, 4, 3] false
//[1, 2, 3] :: [2, 3, 4] false
//[1,2,1] :: [4, 4, 1] false
//[1, 2, 2, 1, 1] :: [1, 1, 2] false

function same(arr1, arr2) {
  let helperHash = createHelperHash(arr1, arr2);

  if (!helperHash) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {    
    const currentKeyValue = arr1[i] ** 2;
    if (helperHash[currentKeyValue] || helperHash[currentKeyValue] === 0) {
      helperHash[currentKeyValue]--;
      if (helperHash[currentKeyValue] < 0) {
        return false;
      }
    } 
  }

  return true;
}

function createHelperHash (arr1, arr2) {
  let helperHash = {};
  for (let i = 0; i < arr2.length; i++) {
    if (helperHash[arr2[i]]) {
      helperHash[arr2[i]]++;
    } else {
      if (arr1.includes(Math.sqrt(arr2[i]))) {
        helperHash[arr2[i]] = 1;
      } else {
        return false;
      }
    }
  }
  return helperHash;
}
 
const {log} = console;
const examples = [
  [[1, 2, 3, 4, 3], [1, 4, 9, 16, 9]], 
  [[1, 2, 3], [4, 1, 9]],
  [[1, 2, 3], [1, 9]],
  [[1, 2], [1, 4, 3]], 
  [[1, 2, 3], [2, 3, 4]], 
  [[1,2,1], [4, 4, 1]], 
  [[1, 2, 2, 1, 1], [1, 1, 2]]
];

examples.forEach((example, idx) => {
  log(same(...example), ':' + idx)
  log(example);
})
