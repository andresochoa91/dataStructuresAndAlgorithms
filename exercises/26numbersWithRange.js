function solution (array) {
  let temp = [];
  let str = "";
  for (let i = 0; i < array.length; i++) {    
    if (array[i] + 1 === array[i + 1]) {
      if (temp.length === 0) {
        temp.push(array[i]);
      }
      temp.push(array[i + 1]); 
    } else {
      if (temp.length > 2) {
        str += `${temp[0]}-${temp[temp.length - 1]},`;
      } else if (temp.length > 0) {
        for (let i = 0; i < temp.length; i++) {
          str += `${temp[i]},`;
        }
      } else {
        str += `${array[i]},`;
      }
      temp = [];
    }
  }
  return str.slice(0, str.length - 1);    
}

solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);