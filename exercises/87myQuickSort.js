let array = [3,7,5,2,9,8,0,4,1];
let array2 = [3,7,5,2,9,8,0,6,11,4,1];
let array3 = [3,7,5,2,9,8,0,6,11,4,5,1];
let array4 = [3,7];
let array5 = [7,3];
let array6 = [0];

const quickSort = (arr, pos1=0, pos2=(arr.length - 1)) => {
  
  if ((pos1 === pos2) || (pos1 === pos2 + 1)) return; 

  let pivot = pos2;
  let p1 = pos1;
  let p2 = pivot - 1;
  let flag = true;

  while (flag) {
    while (arr[p1] < arr[pivot]) {
      p1++;
      if (p1 === pivot) break;
    }
    
    while (arr[p2] > arr[pivot]) {
      p2--;
      if (p2 < p1) {
        p2 = p1;
        break;
      }
      if (p2 === p1) break;
    }
  
    if ((p1 === pivot) || (p1 === p2)) {
      if (p1 === p2) {
        let val = arr[p1];
        arr[p1] = arr[pivot];
        arr[pivot] = val;
      }      
      quickSort(arr, pos1, p1 - 1);
      quickSort(arr, p1 + 1, pos2);  
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

quickSort(array)
quickSort(array2)
quickSort(array3);
quickSort(array4);
quickSort(array5);
quickSort(array6);
console.log(array)
console.log(array2)
console.log(array3)
console.log(array4)
console.log(array5)
console.log(array6)