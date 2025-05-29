//making a string
    //   012345678910
let s = "Hello World";

//length

let result1 = s.length;

console.log(result1);


//charAt

let result2 = s.charAt(0);
let result3 = s.charAt(3);

console.log(result2);
console.log(result3);

//charCodeAt

let result4 = s.charCodeAt(0);
let result5 = s.charCodeAt(3);

console.log(result4);
console.log(result5);

//at

let result6 = s.at(-1);     
let result7 = s.at(-3);

console.log(result6);
console.log(result7);

//[]  //it's look like a array but it's not

let result8 = s[3];
let result9 = s[5];

console.log(result8);
console.log(result9);

//slice

let result10 = s.slice(0,4);
let result11 = s.slice(6,11);
let result12 = s.slice(6,0);

console.log(result10);
console.log(result11);
console.log(result12);

//substring

let result13 = s.substring(0,4);
let result14 = s.substring(-6,11);  //in substring the nagative number mins 0. -1,-2,-3,-4,5.....= 0
let result15 = s.substring(6,0);

console.log(result13);
console.log(result14);
console.log(result15);

//substr 

let result16 = s.substr(5,4);  /* it's mones that "Hello World"
                       index number is =           012345678910
    substr(5,4) that mines indet number start on        01234
    
    */
let result17 = s.substr(3,6); /* it's mones that "Hello World"
                       index number is =          012345678910
    substr(3,6) that mines indet number start on     0123456
    */

console.log(result16);
console.log(result17);


//toUpperCase and toLowerCase

let result18 = s.toUpperCase();
let result19 = s.toLowerCase();

console.log(result18);
console.log(result19);


//concat

let text1 = "Hello";
let text2 = "World";
let text3 = text1.concat(" ", text2);

console.log(text3);

//trim

let tex = "     Hello World2     "

let result20 = tex.trim();

console.log(result20.length);

//trimStart() and trimEnd()

let result21 = tex.trimStart();
let result22 = tex.trimEnd();


console.log(result21);
console.log(result22);

//padStart and padEnd

let text = "5";
let padded1 = text.padStart(4,")");
let padded2 = text.padEnd(4,")");

console.log(padded1);
console.log(padded2);

//repeat

let result23 = s.repeat(2);
let result24 = s.repeat(6);

console.log(result23);
console.log(result24);


//replace

let result25 = s.replace("World", "Bangladesh");

console.log(result25);

//replaceAll

let newStr = "I love cats. Cats are very easy to love. Cats are very popular.";

let result26 = newStr.replaceAll("Cats" , "Birds");
result26 = newStr.replaceAll("cats" , "birds");

console.log(result26);

//split

let result27 = newStr.split(".");

console.log(result27);
