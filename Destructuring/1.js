//Object Destructuring

//creating a object

let o = {
    first:"Hsan",
    last:"Muttaki",
    age:19
}

// Destructuring
let {first,last} = o

//prainting 
console.log(o);


//Object Default Values

//creating a object

let o2 = {
    first2:"Hsan",
    last2:"Muttaki",
    age2:19
}

// Destructuring
let {first2,last2,country2 = "BD"} = o2;

//prainting  //i don't undersand this thing🔴🔴🔴🔴
console.log(o2);

//Object Property Alias

let o3 = {
    first3:"Hsan",
    last3:"Muttaki",
    age3:19
}

// Destructuring
let {last3 : name} = o3;

//prainting
console.log(name);

//String Destructuring

// Create a String
let STRING = "W3Schools";

// Destructuring
let [a1, a2, a3, a4, a5] = STRING;

//prainting
console.log(a1);

// /Array Destructuring

let arr = ["HAsan","Nusain","Musain"];

// Destructring
let [first_arr,second_arr] = arr;

//prainting
console.log(first_arr);

//Skipping Array Values

let arr2 = ["HAsan","Nusain","Musain"];

// Destructring
let [first_arr2,,third_arr2] = arr2;

//prainting
console.log(third_arr2);


//Array Position Values

// Create an Array
const fruits = ["Bananas", "Oranges", "Apples", "Mangos"]; 


// Destructuring
let {[0]:fruits1,[1]:fruits2,[3]:fruits4} = fruits;

//prainting
console.log(fruits1,fruits4);

//The Rest Property

// Create an Array
const numbers = [10, 20, 30, 40, 50, 60, 70];

// Destructuring
const [a,b, ...rest] = numbers

//prainting
console.log(a,rest);

//Destructuring Maps

//creating a Map
let M = new Map([
    ["car","BMW"],
    ["bick","MTB"],
    ["bycile","Duronto"]
]);

// Destructuring

let t = " ";

for (let [key,value] of M){
    t += key + " is " + value + " ";
}
console.log(t);

//Swapping JavaScript Variables

let P1 = "Hasan";
let P2 = "Rabbi";

[P2,P1]= [P1,P2];

console.log(P1);
console.log(P2);

