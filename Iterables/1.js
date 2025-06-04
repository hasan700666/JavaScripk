//JavaScript Iterables

//Iterating Over a String

let name = "W3school.com"

let t = ""; 

for (let i of name){
    t = t + i + " ";
}
console.log(t);


//Iterating Over an Array
let arr = ["hasan","husain","Musain"];

let u = ""; 

for (let j of arr){
    u = u + j + " ";
}
console.log(u);

let arr2 = [567,5647,567,5647];

let u2 = ""; 

for (let j2 of arr2){
    u2 = u2 + j2 + " ";
}
console.log(u2);


//Iterating Over a Set

let arr3 = ["hasan","husain","Musain"];

let u3 = ""; 

for (let j3 of arr3){
    u3 = u3 + j3 + " ";
}
console.log(u3);

//Iterating Over a Map

const arr4 = new Map([
    ["hasan",5],
    ["husain",6],
    ["Musain",7]
]);

let u4 = ""; 

for (const j4 of arr4){
    u4 = u4 + j4 + " ";
}
console.log(u4);


//Home Made Iterable
//i dpn't understand  🔴🔴🔴🧨