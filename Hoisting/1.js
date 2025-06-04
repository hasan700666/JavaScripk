//you can first insealisd vareable then decleard
//Ex

x = 20;
console.log(x);
var x;


//you can do this, but in var variable, NOT let and const variable
//Ex                      //you can not do this🔴🔴

// carName = "Volvo";         
// let carName;

// carName2 = "Volvo";
// const carName2;

//JavaScript Initializations are Not Hoisted
//JavaScript only hoists declarations, not initializations.
//Example 1 does not give the same result as Example 2:

//Ex 1

var x = 5; // Initialize x
var y = 7; // Initialize y

console.log(x + " " + y);

//Ex 2
var x2 = 5; // Initialize x

console.log(x2 + " " + y2);

var y2 = 7; // Initialize y


