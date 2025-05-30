

let num1 = 100;   // A number with decimals
let num2 = 100;   // A number without decimals

let num3 = 123e5;    // 12300000

console.log("Number 3 value is = "+num3);

let num4 = 123e-5;   // 0.00123

console.log("Number 4 value is = "+num4);

//JavaScripk number are Always 64-bit

//Integer Precision

let num5 = 999999999999999;   // x will be 999999999999999
let num6 = 9999999999999999;  // y will be 10000000000000000

console.log("Number 5 value is = "+num5);
console.log("Number 6 value is = "+num6);

//Floating Precision

let num7 = 0.2 + 0.1;  //the real ans is 0.3, but in js the ans is  0.30000000000000004

console.log("Number 7 value is = "+num7);
console.log((0.2*10 + 0.1*10)/10);

//Adding Numbers and Strings

let num8 = 10;
let num9 = 10;
let str = "30";

console.log(num8 + str);         //1030
console.log(str + num9);         //3010
console.log(str + num8 + num8);  //301010
console.log(num8 + num9 + str);  //2030

//Numeric Strings

let num10 = "100";
let num11 = "10";

console.log(num10 + num11);  //the ans is 10010

//But Except plus(+) JavaScript will try to convert strings to numbers in all numeric operations

console.log(num10 - num11);  //the ans is 90
console.log(num10 * num11);  //the ans is 1000
console.log(num10 / num11);  //the ans is 10

//NaN - Not a Number

let num12 = 100 / "Apple";
console.log(num12);  //NaN

//JavaScript function isNaN() to find out if a value is a number or not!

console.log(isNaN(num12));  //true

//Watch out for NaN. If you use NaN in a mathematical operation, the result will also be NaN

let num13 = NaN;
let num14 = 5;
console.log(num13 + num14);

//Or the result might be a concatenation like NaN5

let num15 = "5"
console.log(num13 + num15);  //NaN5

//NaN is a number: typeof NaN returns number

console.log(typeof(num13));   //number

//Infinity

let num16 = 2;
let result = ""


while (num16 != Infinity){
    num16 *= num16; 
    result += num16;
    console.log(num16);
}

let num17 = 2;
let num18 = 0;
let num19 = -2;

console.log(num17/num18);
console.log(num19/num18);


//Hexadecimal

let num20 = 0xFF;

console.log(num20);

//JavaScript Numbers as Objects

let x = 123;  //this is a number 
let y = new Number(123);  //but this is a object

//when 

console.log(x == y);  //true
console.log(x === y); //folse

//but

let x1 = new Number(500);
let y1 = new Number(500);

console.log(x1 == y1);    //folse 
console.log(x1 === y1);   //folse

//becouse Comparing two JavaScript objects always returns false.

//trst

console.log("the value is "+10+20);