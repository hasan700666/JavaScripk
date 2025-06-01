//making a const array

const arr = [47337,543,564,6574];

//you don't do this 

//arr = [5674890,76589,67589];  //error

//But you can do this to change array
//ex

arr[0] = "HAsan";

console.log(arr);

arr.push("husain");

console.log(arr);

//we can not do this

//const cars;
//cars = ["Saab", "Volvo", "BMW"];  /Error

//Const Block Scope for array

const a1 = ["hasan", "Musain"];

console.log(a1[0]);  //here a1[0] value is hasan

{
    const a1 = ["HUSAIN", "Musain"];
    
    console.log(a1[0]);  //here a1[0] value is HUSAIN
    
}

console.log(a1[0]);  //here a1[0] value is hasan


//Redeclaring Arrays

var cars = ["Volvo", "BMW"];   // Allowed
var cars = ["Toyota", "BMW"];  // Allowed
cars = ["Volvo", "Saab"];      // Allowed



var cars = ["Volvo", "BMW"];     // Allowed
const cars = ["Volvo", "BMW"];   // Not allowed
{
  var cars = ["Volvo", "BMW"];   // Allowed
  const cars = ["Volvo", "BMW"]; // Not allowed
}