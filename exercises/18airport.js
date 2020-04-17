function sortTickets(list) {
  let nextAirport = {};
  for (let i = 0; i < list.length; i++) {
    nextAirport[list[i][0]] = list[i][1];
  }
  console.log(nextAirport);
  let startAndEnd = checkingNoRepeatedElement(list); // ["A", "D"]
  let outputArr = [];
  let currentAirport = startAndEnd[0]; // starting airport

  while (nextAirport[currentAirport]) {
    outputArr.push([currentAirport, nextAirport[currentAirport]]);
    currentAirport = nextAirport[currentAirport];
  }
  return outputArr;
}

function checkingNoRepeatedElement(list) {
  let obj = {};
  for (let i = 0; i < list.length; i++) {
    if (!obj[list[i][0]]) {
      obj[list[i][0]] = 0;
    } else {
      delete obj[list[i][0]];
    }    
    if (!obj[list[i][1]]) {
      obj[list[i][1]] = 1;
    } else {
      delete obj[list[i][1]];
    }
  }

  let airport = "";

  for (let key in obj) {
    if (obj[key] === 0) {
      airport = key;
    }
  }
  return airport;
}

let ticketConnections = [["D", "E"], ["A", "B"], ["C", "D"],["B", "C"]];
console.log(sortTickets(ticketConnections));
