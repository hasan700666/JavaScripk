//javaScript has 5 type of loops

//in this program file, we learn for of loop

//1. for of

//the defrince of for in and for of

//ex of for in

const a = [56748,56478,674893];


for (let x in a){
    console.log(x);  //x = 0 , x = 1 again x = 2
}


for (let x of a){
    console.log(x);  //x = 56748 , x =  56478 again x = 674893
}

//Eex of for of
//Looping over an Array

const b = [5,54,673];

let t = "";

for (let x of b){
    t = t + x + " "
}
console.log(t);


//Looping over an String

let s = "Hasan";

let e = "";

for (let i of s){
    e = e + i + " ";
}
console.log(e);
