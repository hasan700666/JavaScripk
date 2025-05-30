//making of string

let str = "Hello World, I am JavaScript, locate";

//indexOf()

console.log(str.indexOf("JavaScript"));
console.log(str.indexOf("Java"));
console.log(str.indexOf("Hman"));
console.log(str.indexOf("locate", 5));  //5 mines, the string search start form 5 index

//lastIndexOf()

let str2 = "Please locate where 'locate' occurs!";

console.log(str2.lastIndexOf("locate"));
console.log(str2.lastIndexOf("hello"));
console.log(str2.lastIndexOf("locate",10));  //5 mines, the string search start form 5 lust index

//search()

console.log(str2.search("locate"));
console.log(str2.search(/locate/));

//match()

let str3 = "The rain in SPAIN stays mainly in the plain";

console.log(str3.match("ain"));
console.log(str3.match(/ain/));
console.log(str3.match(/ain/g));    //Perform a global search for "ain":
console.log(str3.match(/ain/gi));   //Perform a global, case-insensitive search for "ain":

//matchAll()

// let str4 = "I love cats. Cats are very easy to love. Cats are very popular.";  //This code is not working

// console.log(str4.matchAll("Cats"));
// console.log(str4.matchAll(/Cats/));
// console.log(str4.matchAll(/Cats/g));
// console.log(str4.matchAll(/Cats/gi));


//includes()

console.log(str3.includes("Hello"));
console.log(str3.includes("rain"));
console.log(str3.includes("rain", 6));


//startsWith()

console.log(str3.startsWith("The"));
console.log(str3.startsWith("rain"));

console.log(str3.startsWith("rain",4));
console.log(str3.startsWith("rain",5));

//endsWith()

console.log(str3.endsWith("plain"));
console.log(str3.endsWith("the"));

console.log(str3.endsWith("rain",8));
console.log(str3.endsWith("rain",7));


