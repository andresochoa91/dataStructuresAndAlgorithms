let array = [3,7,5,2,9,8,0,4,1];
let array2 = [3,7,5,2,9,8,0,6,11,4,1];
let array3 = [3,7,5,2,9,8,0,6,11,4,5,1];         
let array4 = [3,7];
let array5 = [7,3];
let array6 = [0];
let array7 = [3,2,3,1,2,4,5,5,6];
let array8 = [3,3,3,3,3,3];

const quickSort = (arr, pos1=0, pos2=(arr.length - 1)) => {
  let pivot = pos2;
  let p1 = pos1;
  let p2 = pivot - 1;
  let flag = true;

  while (flag) {
    while ((arr[p1] <= arr[pivot]) && (p1 < pivot)) {
      p1++;
    }
    
    while ((arr[p2] >= arr[pivot]) && (p2 > p1)) {
      p2--;
    }
  
    if ((p1 === pivot) || (p1 === p2)) {
      if (p1 === p2) {
        let val = arr[p1];
        arr[p1] = arr[pivot];
        arr[pivot] = val;
      }      
      if (pos1 < (p1 - 1)) quickSort(arr, pos1, p1 - 1);
      if (p1 + 1 < pos2) quickSort(arr, p1 + 1, pos2);  
      flag = false;    
    } else {
      let val = arr[p1];
      arr[p1] = arr[p2];
      arr[p2] = val;
      p1 = pos1;
      p2 = pivot - 1;
    }
  }
};

quickSort(array);
quickSort(array2);
quickSort(array3);
quickSort(array4);
quickSort(array5);
quickSort(array6);
quickSort(array7);
quickSort(array8);

console.log(array);
console.log(array2);
console.log(array3);
console.log(array4);
console.log(array5);
console.log(array6);
console.log(array7);
console.log(array8);
