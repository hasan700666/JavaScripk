//make a array

const arr = ["HAsan", "Husain", "Musain" , "Abdul-Muhamain"];

const car = [
    "toyota",
    "BMW",
    "Volvo"
];

const byc = [];

byc[0] = "Motor-cycle";
byc[1] = "cycle";
byc[2] = "bycycle";

const arr2 = new Array("HAsan", "Husain", "Musain" , "Abdul-Muhamain");

//arr and arr2 are same that this is array, but new Array() can produce some unexpected results,. That way use [] array decleration

//accessing the array element

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);

//Changing an Array Element

arr[0] = "Hasan Al Muttaki";
arr[1] = "Husain Al Muttaki";


console.log(arr[0]);
console.log(arr[1]);

//Converting an Array to a String

console.log(arr.toString());

//Access the Full Array

console.log(arr);

//Arrays are Objects

//Arrays are a special type of objects. The typeof operator in JavaScript returns "object" for arrays.
//But, JavaScript arrays are best described as arrays.


//Array Elements Can Be Objects

//You can have objects in an Array. You can have functions in an Array. You can have arrays in an Array

//myArray[0] = Date.now;    // Data is a object
//myArray[1] = myFunction;  //myFuncation is a funcation
//myArray[2] = myCars;      //myCars is a array

//The length Property

console.log(arr.length);

//The length Property

console.log(arr[0]);

//Accessing the Last Array Element

console.log(arr[arr.length-1]);


//Looping Array Elements

let a = " ";

for (let x = 0 ; x <= arr.length ; x++){
    a += arr[x]
}
console.log(a);

//You can also use the Array.forEach() function:  //i don't understand that code main

// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// let text = "<ul>";
// fruits.forEach(myFunction);
// text += "</ul>";

// function myFunction(value) {
//   text += "<li>" + value + "</li>";
// }

//Adding Array Elements  

const arr3 = ["hasan", "husain" , 100];

arr3[arr3.length] = 17457854;

console.log(arr3);

arr3.push(100000);

console.log(arr3);

arr3[6] = "Lemon";

console.log(arr3);

//Associative Arrays
//In JavaScript, arrays always use numbered indexes.
//ex

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);

//If we use named indexes, JavaScript will redefine the array to an object.
//ex

const arr4 = [];

arr4["first_name"] = "Hasan";   //this is an obj
arr4["lust_name"] = "Muttaki";  //this is an obj
arr4["age"] = "19";             //this is an obj

console.log(arr4.length);
console.log(arr4[0]);
console.log(arr4[1]);
console.log(arr4[2]);

//The Difference Between Arrays and Objects

//In JavaScript, arrays use numbered indexes. In JavaScript, objects use named indexes.

//How to Recognize an Array

console.log(typeof(arr));  //object  //The typeof operator returns object because a JavaScript array is an object.

//Solution 1:

console.log(Array.isArray(arr));   //true

//Solution 2:

console.log(arr instanceof Array);   //true


//Nested Arrays and Objects
//i don't understand 