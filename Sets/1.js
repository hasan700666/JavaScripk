//Create a Set

//2 waay to create new Set
// 1. Passing an array to new Set()
// 2. Create an empty set and use add() to add value

//The new Set() Method

// Create a Set
const l = new Set(["a","b","c"]);

//The add() Method

// Create a Set
const s = new Set([]);

// Add Values to the Set
s.add("a");
s.add("b");
s.add("c");
s.add("d");
s.add("e");
s.add("f");

//Listing the Elements

let Se = new Set([
    "a","A","b","B","c","C"
]);

let t = " " ;

for (let i of Se){
    t += i + " ";
}
console.log(t);

//Sets are Objects
//chaking this Set

console.log(typeof(Se));    //object

console.log(Se instanceof Set);  //true
