// Create a Map
let M = new Map([
    ['banana',20],
    ['charry',100],
    ['watermalan',200]
]);

//Map.set()

M.set('Oringe',500);
M.set("apples", 500);


//Map.get()

console.log(M.get("apples"));
console.log(M.get("banana"));

//Map.size
 
console.log(M.size);    //5


//Map.delete()

M.delete("banana");

console.log(M);

//Map.has()

console.log(M.has("watermalan"));     //true
console.log(M.has("banana"));         //false

//Map.forEach()

let t = " ";

M.forEach (function(value,key){
    t += key + " = " + value + " ";
})
console.log(t);

//Map.entries()

let e = " ";

for (const x of M.entries()){
    e += x + " "
}
console.log(e);

//Map.keys()

let x = " ";

for (const d of M.keys()){
    x += d + " "
}
console.log(x);

//Map.values()

let y = " ";

for (const e of M.values()){
    y += e + " "
}
console.log(y);

//Map.groupBy()

//i don't understand🔴🔴🔴



//Map.clear()

M.clear();

console.log(M);
