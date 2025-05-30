//making a template string

let text = `Hello World!`;

//Quotes Inside Strings

let text2 = `'Hello' "World"`;

//Quotes Inside Strings

let text3 = `the quock
            fox 
            jump to the 
            laizy
            dog`;


//Variable Substitutions

let firstName = "John";
let lastName = "Doe";

let text4 = `Welcome ${firstName}, ${lastName}!`;

console.log(text4);

//Expression Substitution

let price = 10;
let VAT = 0.25;

let total = `Total: ${(price * (1 + VAT))}`;

console.log(total);


