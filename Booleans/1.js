//Boolean() Function

console.log(Boolean(10>9));    //You can use the Boolean() function to find out if an expression (or a variable) is true
console.log(Boolean(10<9));


//Everything With a "Value" is True

console.log(Boolean(10.9));
console.log(Boolean(10));
console.log(Boolean(7+32));   //everything is true
console.log(Boolean("Hello"));
console.log(Boolean("false"));

//Everything Without a "Value" is False

let x = 0 ;
console.log(Boolean(x));

let y = -0 ;
console.log(Boolean(y));

let z = NaN;
console.log(Boolean(z));

let a = "";
console.log(Boolean(a));  //everything is false

let b;
console.log(Boolean(b));

let c = false;
console.log(Boolean(c));

let d = 10 / "Hallo";
console.log(Boolean(d));


//JavaScript Booleans as Objects

//Normally JavaScript booleans are primitive values created from literals:
let X = true;

//But booleans can also be defined as objects with the keyword new:
let Y = new Boolean(true);

console.log(typeof(X));  //boolean
console.log(typeof(Y));  //object

//Note the difference between (x==y) and (x===y)

let T = true;
let F = new Boolean(true);

console.log(T==F);  //true
console.log(T===F); //false

//But

let T2 = new Boolean(false);
let F2 = new Boolean(false);
 
console.log(T2==F2);   //false
console.log(T2===F2);  //false