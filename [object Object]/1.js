//Converting Strings to Numbers

//These will convert:
console.log(Number("3.1416"));      //3.1416
console.log(Number(Math.PI));       //3.141592653589793
console.log(Number(" "));           //0
console.log(Number(""));            //0

//These will not convert:
console.log(Number("544 47382"));   //NaN
console.log(Number("Hasan"));       //NaN


//The Unary + Operator

let a = "5";         //this is a string
let b = + a;         //this is a number

let c = "Hasan";     //this is a string 
let d = + c;         //this is a NaN

//Converting Numbers to Strings

console.log(String(100));
console.log(String(100+123));

//toString dosethe same thing

console.log((12999).toString());
console.log((100+65784).toString());

//Converting Dates to Numbers

console.log(Number(new Date()));

//getTime() does the same thing

console.log(new Date().getTime());

//Converting Dates to Strings

console.log(String(new Date()));

//toString() does the same thing

console.log((new Date().toString()));

//Converting Booleans to Numbers

console.log(Number(false));   // 0
console.log(Number(true));    // 1

//Converting Booleans to Strings

console.log(String(false));    // false
console.log(String(true));     // true

console.log((false).toString());    // false
console.log((true).toString());     // true


//Automatic Type Conversion

//read the document sir, Please!

