//javaScript integers are only accurate up to 15 digits:
//ex

let x = 999999999999999;
let y = 9999999999999999;

console.log(x);  //999999999999999
console.log(y);  //10000000000000000

//that woy we use BigInt()

//Create a BigInt

let B = BigInt(764943968547865349067534908658);

console.log(B);

//type of b

console.log(typeof(B)); 

//BigInt Operators

let B2 = BigInt(782789689458473498675723685347);

console.log(B * B2);

//BigInt Decimals

let x2 = 5n;

//console.log(x2/2) //A BigInt can not have decimals.

let result = Number(x2)/2
console.log(result); 

console.log(typeof(x2));
console.log(typeof(result));  //BigInt convart into Number


//BigInt Hex, Octal and Binary

//BigInt can also be written in hexadecimal, octal, or binary notation

let hex = 0x20000000000003n;
let oct = 0o400000000000000003n;
let bin = 0b100000000000000000000000000000000000000000000000000011n;

console.log(hex);
console.log(oct);
console.log(bin);

//Precision Curiosity

let N = 9007199254740992 === 9007199254740993;
let N2 = 9007199254740992 === 9007199254740994;

console.log(N);  //true
console.log(N2); //folse

//Minimum and Maximum Safe Integers

let min = Number.MIN_SAFE_INTEGER;

console.log(min);

let mex = Number.MAX_SAFE_INTEGER;

console.log(mex);

//New Number Methods

console.log(Number.isInteger(10));    //true
console.log(Number.isInteger(10.5));  //folse

console.log(Number.isSafeInteger(10));                   //true
console.log(Number.isSafeInteger(12345678901234567890)); //folse  //this is not number, this is a BigInt()