//way loop
//ex
//making a arrat

const a1 = [1222,2333,344,455,566];

//prainting thr array

console.log(a1[0]);
console.log(a1[1]);
console.log(a1[2]);
console.log(a1[3]);
console.log(a1[4]);

//don't do this 
//use loop to this

for (let i = 0; i < a1.length; i++){
    console.log(a1[i]);
}

//javaScript has 5 type of loops

//in this program file, we learn for loop

//1. for

//prainting the allement of array
for (let i = 0; i < a1.length; i++){
    console.log(a1[i]);
}

//Loop Scope
for (var i = 0; i < a1.length; i++){  //we can use var, let kyeword for declearing variable 
    console.log(a1[i]);
}

