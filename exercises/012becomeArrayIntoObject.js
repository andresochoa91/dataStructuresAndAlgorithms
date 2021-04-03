var input = [
  [
      ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
  ],
  [
      ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
  ]
];

function transformEmployeeData(employeeData) {
  var result = [];
  for (let i = 0; i < employeeData.length; i++) {
    result.push(Object.fromEntries(employeeData[i]));
  }
  return result;
}

transformEmployeeData(input);