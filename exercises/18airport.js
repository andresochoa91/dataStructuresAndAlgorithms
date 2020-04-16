let ticketConnections = [["C", "D"], ["A", "B"], ["B", "C"]];
sortTickets(ticketConnections); // [["A", "B"], ["B", "C"], ["C", "D"]];

function sortTickets(list) {
  let nextAirport = {};
  for (let i = 0; i < list.length; i++) {
  	nextAirport[list[i][0]] = list[i][1];
  }
  // {"A": "B", "B": "C", "C": "D"} (in maybe a different order)
  
  let startAndEnd = checkingNoRepeatedElement(list); // ["A", "D"]
  let outputArr = [];
  let currentAirport = startAndEnd[0]; // starting airport
  while (!nextAirport[currentAirport]) {
    outputArr.push([currentAirport, nextAirport[currentAirport]]);
    currentAirport = nextAirport[currentAirport];
  }
  return outputArr;
}

function checkingNoRepeatedElement(list) {
  let obj = {};
  for (let i = 0; i < list.length; i++) {
    if (!obj[list[i][0]]) {
      obj[list[i][0]] = 0
    } else {
      delete obj[list[i][0]];
    }
    if (!obj[list[i][1]]) {
      obj[list[i][1]] = 1
    } else {
      delete obj[list[i][1]];
    }
  }
  let keys = Object.keys(obj);  // ["A", "D"] (but it could be any order)
  let arr = ["", ""];
  for (let i = 0; i < keys.length: i++) {
    arr[obj[keys[i]]] = keys[i];
  }
  return arr; // obj = ["A", "D"]
}