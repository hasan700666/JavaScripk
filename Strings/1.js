//Making a string

let str1 = "hello world";
let str2 = 'hello world';

//Quotes Inside Quotes

let str3 = 'hello, i am "Hasan"!';

//Template Strings

let str4 = `hello, i am "Hasan"!`;

//Template allow multiline strings
let str8 = `hello
i am    
hasan`;

//string lanth

let len = str1.length;

console.log(len);

//Escape Characters

//Ex of \"

let str5 = "hello, i am \"Hasan\"!";
console.log(str5);

//Ex of \'

let str6 = 'hello, i am \'Hasan\'!';
console.log(str6);

//Ex of  \

let str7 = 'hello, i am \\Hasan\\!';
console.log(str7);

//JavaScript Strings as Objects

let obj = new String("hello")

//Do not create String objects

//true or folse

let x = "Hasan";
let y = new String("Hasan");

console.log(x == y);
console.log(x === y);