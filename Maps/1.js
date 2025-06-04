//How to Create a Map

//there is a 2 ways to create a Map
//1. Passing an Array to new Map()
//2. Create a Map and use Map.set()

//1. The new Map() Method

// Create a Map
let M = new Map([
    ['banana',20],
    ['charry',100],
    ['watermalan',200]
]);

//The set() Method

M.set('Oringe',500);
M.set("apples", 500);

//The get() Method

console.log(M.get("apples"));
console.log(M.get("banana"));


//Maps are Objects

//typeof returns object:
console.log(typeof(M));       //object

//instanceof Map returns true:
console.log(M instanceof Map);  //true




