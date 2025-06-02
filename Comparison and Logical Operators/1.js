//(Ternary) Operator

//Syntax
//variablename = (condition) ? value1:value2 

//ex
let age = 10;
let voteable = (age < 18) ? "Too young":"Old enough";

console.log(voteable);

//The Nullish Coalescing Operator (??)

let x = "hasan";
let y = "Husain";

console.log(x ?? y);

//but 

let x2 = null;
let y2 = "Husain";

console.log(x2 ?? y2);

//anather ex

let x3 = null;
let y3 = null;

console.log(x3 ?? y3);

//anather ex

let x4 = "Hasan";
let y4 = null

console.log(x4 ?? y4);


//Optional Chaining Operator (?.)

// Create an object:
const car = {type:"Fiat", model:"500", color:"white"};
// Ask for car name:
console.log(car?.name);  //The ?. operator returns undefined if an object is undefined or null (instead of throwing an error).

//anather ex

// Create an object:
const car2 = {name:"TOYOTA" , type:"Fiat" , model:"500" , color:"white" };
// Ask for car name:
console.log(car2?.name);  //TOYOTA
