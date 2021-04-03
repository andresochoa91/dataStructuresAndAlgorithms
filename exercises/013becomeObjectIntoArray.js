var input = {
  name: 'Holly',
  age: 35,
  role: 'producer'
}

function convertObjectToArray(input) {
  // your code here
  var arr = [];
  Object.keys(input).forEach((key) => {
    arr.push([key, input[key]]);
  })
  return arr;
}

console.log(convertObjectToArray(input));