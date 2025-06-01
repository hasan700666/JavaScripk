//making a array

const a1 = [1100,1774,68,47.887];

//Array length

console.log(a1.length);

//Array toString()

console.log(a1.toString());

// Array at()

console.log(a1.at(2));

//Array join()

console.log(a1.join(" + "));

//Array pop()

console.log(a1.pop());

//Array push()

console.log(a1.push("Hasan"));

//chaking the a1 array

console.log(a1);

//Array shift()

console.log(a1.shift());

//chaking the a1 array

console.log(a1);

//Array unshift()

console.log(a1.unshift(200));

//chaking the a1 array

console.log(a1);

//Array delete()

console.log(delete a1[0]);

//chaking the a1 array

console.log(a1);

//Array concat()
//first make anather array

const a2 = ["hasan", "Husain" , "Musain" , "Musab"];

console.log(a1.concat(a2));

//making anather array

const a3 = ["car", "Bick" , "Hunder", "trak" , "motorcycle",75784,7548,573492];

//join the 3 array

console.log(a3.concat(a1, a2));

//copyWithin()

console.log(a3.copyWithin(3,0,4));

//Array flat()
//makinng a array

const a4 = [[546,564],["HAsan", 'Husain'],[123,54]];

console.log(a4.flat());

//Array flatMap()
//making a number array

const a5 = [1,2,3,4,5,6];

console.log(a5.flatMap(x=> [x * 10]));
console.log(a5.flatMap(x=> [x,x * 10]));


//Array splice()

const fruits = ["Banana", "Orange", "Apple", "Mango"];


console.log(fruits.splice(1, 0, "Lemon", "Kiwi"));

//see the array

console.log(fruits);

const fruits2 = ["Banana", "Orange", "Apple", "Mango"];

console.log(fruits2.splice(2, 1, "Lemon", "Kiwi"));

//see the array

console.log(fruits2);

//splice()

//making a array
const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits3.splice(0, 2));

//see the array

console.log(fruits3);

//Array toSpliced()

const months = ["Jan", "Feb", "Mar", "Apr"];


const spliced = months.toSpliced(0, 1);
const spliced2 = months.toSpliced(0, 2);

console.log(spliced);


//Array slice()

const f= ["Banana", "Orange", "Lemon", "Apple", "Mango"];

const citrus0 = f.slice(1);
const citrus1 = f.slice(3);
const citrus2 = f.slice(1,3);
const citrus3 = f.slice(1,4);


console.log(citrus0);
console.log(citrus1);
console.log(citrus2);
console.log(citrus3);

