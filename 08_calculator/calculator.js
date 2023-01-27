const add = function(a,b) {
	let sum = a + b;
  return sum;
};

const subtract = function(a,b) {
	let difference = a - b;
  return difference;
};

const sum = function(a) {
  let total = 0;
	a.forEach(item => {
    total +=item;
  });
  return total;
};

const multiply = function(a) {
  let product = 1;
	a.forEach(item => {
    product *=item;
  });
  return product;
};

const power = function(a,b) {
	// let result = Math.pow(a,b);
  // return result;

//alternate solution
  let result = 1;
  for (let i=0; i<b;i++) {
    result *= a;
  }
  return result;
};

const factorial = function(a) {
  if (a==0) return 1;
	let result = 1;
  for (let i=a; i>0; i--) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
