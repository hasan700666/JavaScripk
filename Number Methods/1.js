//make a number

let n1 = 100;

//toString() Method

console.log(n1.toString());

console.log(n1.toString(2));

console.log(typeof(n1.toString()));  //i don't understand

//toExponential() Method

let n2 = 9.656;                     //i don't understand

console.log(n2.toExponential());
console.log(n2.toExponential(2));
console.log(n2.toExponential(4));
console.log(n2.toExponential(6)); 


//toFixed() Method

let n3 = 9.6567;

console.log(n3.toFixed(0));
console.log(n3.toFixed(2));
console.log(n3.toFixed(3));
console.log(n3.toFixed(4));


//toPrecision() Method

let n4 = 5789.88780;

console.log(n4.toPrecision());
console.log(n4.toPrecision(2));
console.log(n4.toPrecision(4));
console.log(n4.toPrecision(6));


//valueOf() Method

let n5 = 788.6757;

console.log(n5.valueOf());

console.log(typeof(n5.valueOf()));  //number

//Converting Variables to Numbers

/*There are 3 JavaScript methods that can be used to convert a variable to a number:

1. Number()
2. parseFloat()
3. parseInt()

*/

//make a vareable 

let vareable = "100";

//Number()

console.log(Number(vareable));

console.log(typeof(Number(vareable)));

console.log( Number("1565"));        //1565
console.log( Number("10000"));       //10000
console.log( Number("  100  "));     //100
console.log( Number("100.32"));      //100.32
console.log( Number("10, 39"));      //NaN
console.log( Number("10  39"));      //NaN
console.log( Number("Hasan"));       //NaN

//leat's conbart date into a number

console.log(Number(new Date()));                 //1748672747745 
console.log(Number(new Date("2025-05-31")));     //1748649600000     


//parseFloat()

console.log(parseFloat("-10.56"));             //-10.56
console.log(parseFloat("10.278"));             //10.278
console.log(parseFloat("10.6756 , 794"));      //10.6756
console.log(parseFloat("10 parson"));          //10
console.log(parseFloat("parson 100"));         //NaN

//parseInt()

console.log(parseInt("-10"));             //-10
console.log(parseInt("-10 278"));         //-10  
console.log(parseInt("10.794"));          //10
console.log(parseInt("10 , 794"));        //10
console.log(parseInt("10 parson"));       //10
console.log(parseInt("parson 100"));      //NaN

//Number Object Methods  -- 4ta

//Number.isInteger() Method

console.log(Number.isInteger(1787856));    //true
console.log(Number.isInteger(178.856));    //folse

//Number.isSafeInteger() Methode

console.log(Number.isSafeInteger(1787856867854676));    //true
console.log(Number.isSafeInteger(17885677453286845));    //folse

//Number.parseFloat() Method

console.log(Number.parseFloat("10"));
console.log(Number.parseFloat("10.33"));
console.log(Number.parseFloat("10 20 30"));
console.log(Number.parseFloat("10 years"));
console.log(Number.parseFloat("years 10"));

//Number.parseInt() Method

console.log(Number.parseInt("-10"));
console.log(Number.parseInt("-10.33"));
console.log(Number.parseInt("10"));
console.log(Number.parseInt("10.33"));
console.log(Number.parseInt("10 20 30"));
console.log(Number.parseInt("10 years"));
console.log(Number.parseInt("years 10"));

//The Number methods Number.parseInt() and Number.parseFloat() are the same as the Global methods parseInt() and parseFloat().