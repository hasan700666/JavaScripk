//typeof()

//Primitive Data Types

console.log(typeof "John");                   // Returns string
console.log(typeof ("John"+"Doe"));           // Returns string
console.log(typeof 3.14);                     // Returns number 
console.log(typeof 33);                       // Returns number 
console.log(typeof (33 + 66));                // Returns number 
console.log(typeof true);                     // Returns boolean
console.log(typeof false);                    // Returns boolean
console.log(typeof 1234n);                    // Returns bigint
console.log(typeof Symbol());                 // Returns symbol
console.log(typeof x);                        // Returns undefined
console.log(typeof null);                     // Returns object                 
 

//Complex Data Types

console.log(typeof {name:'John'})   // Returns object
console.log(typeof [1,2,3,4] )      // Returns object
console.log(typeof new Map())       // Returns object
console.log(typeof new Set())       // Returns object

console.log(typeof function (){})   // Returns function


//How to Recognize an Array,Date,Map and Set operator

//create an array

const arr =  ["apples", "bananas", "oranges"];

console.log(Array.isArray(arr));       //true

console.log(arr instanceof Array);     //true

//creata an Date

let TI = new Date();

console.log(TI instanceof Date);       //true

//creata an Map

let MA = new Map([
    ["fun",12],
    ["fan",123],
    ["lether",1234]]);

console.log(MA instanceof Map);       //true

//create an Srt

let SE = new Set([
    "fun",12,
    "fan",123,
    "lether",1234]);

console.log(SE instanceof Set);       //true

//Undefined Variables

let car;

console.log(car);           //undefined

console.log(typeof(car));    //undefined

//Empty Values

let bike = "";

console.log(bike);               //undefined

console.log(typeof(bike));      // undefined


//Null

let N = null; 

console.log(N);           //null

console.log(typeof(N));   //object

//Difference Between Undefined and Null

console.log(typeof undefined);      // undefined
console.log(typeof null);           // object

console.log(null === undefined);    // false
console.log(null == undefined);     // true


//The constructor Property

// Returns function Object() {[native code]}:
let Fo = {name:'John',age:34}.constructor

// Returns function Array() {[native code]}:
let Fa = [1,2,3,4].constructor

// Returns function Date() {[native code]}:
let Fd = new Date().constructor

// Returns function Set() {[native code]}:
let Fs = new Set().constructor

// Returns function Map() {[native code]}:
let Fm = new Map().constructor

// Returns function Function() {[native code]}:
let Ff = function () {}.constructor


//With the constructor, you can check if an object is an Array:
console.log(Fa === Array);  //true    //Fa = Fa.constructor
 

//With the constructor, you can check if an object is a Date:
console.log(Fd === Date);  //true     //Fd = Fd.constructor