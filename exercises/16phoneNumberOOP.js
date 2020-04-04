// Skeleton

// FUNCTION DEFINITION(S)
function PhoneNumberFormatter(numbers) {
  this.numbers = numbers;
}

PhoneNumberFormatter.prototype.render = function() {
  var string = `${this.parenthesize(this.getAreaCode())} ${this.getExchangeCode()}-${this.getLineNumber()}`;
  // your code here
  return string;
};

PhoneNumberFormatter.prototype.getAreaCode = function() {
  // your code here
  return this.slice(0, 3);
};

PhoneNumberFormatter.prototype.getExchangeCode = function() {
  // your code here
  return this.slice(3, 6);

};

PhoneNumberFormatter.prototype.getLineNumber = function() {
  // your code here
  return this.slice(6);
};

PhoneNumberFormatter.prototype.parenthesize = function(string) {
  return '(' + string + ')';
};

PhoneNumberFormatter.prototype.slice = function(start, end) {
  return this.numbers.slice(start, end).join('');
};

// ASSERTION FUNCTION(S) TO BE USED

function assertEqual (actual, expected, testName) {
  if (actual === expected) {
    console.log("passed");
  } else {
    console.log(`FAILED [${testName}], Expected ${expected}, but got ${actual}`);
  }
}

// TESTS CASES
let number = new PhoneNumberFormatter([6, 5, 0, 8, 3, 5, 9, 1, 7, 2]);
assertEqual(number.render(), "(650) 835-9172", "Correct number");
