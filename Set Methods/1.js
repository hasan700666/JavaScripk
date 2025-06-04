//The new Set() Method

let w = new Set(["hasan","husain","Musain"]);

//The add() Method

w.add("Abdul_muhaimen");

//prainting set element
console.log(w);

//Listing Set Elements

let s = new Set(["a","b","c","d"]);

let e = " ";

for (let i of s){
    e += i + " ";
}
console.log(e);


//The has() Method

console.log(s.has("d"));  //true
console.log(s.has("e"));  //false

//The forEach() Method

let l = "";
s.forEach(function(value){
    l += value + " ";
})
console.log(l);

//The values() Method

let result = s.values();

let R = "" ;

for (let y of result){
    R += y+ ' ';
}
console.log(R);

//The keys() Method

let result2 = s.keys();

let R2 = "" ;

for (let y2 of result2){
    R2 += y2+ ' ';
}
console.log(R2);

//The entries() Method

let result3 = s.entries();

let R3 = "" ;

for (let y3 of result3){
    R3 += y3+ ' ';
}
console.log(R3);

