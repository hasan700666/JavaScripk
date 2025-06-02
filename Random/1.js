//Math.random()

console.log(Math.random());  //Math.random() returns a random number between 0 (inclusive),  and 1 (exclusive)


//Random Integers

console.log(Math.floor(1.9));   //Math.floor(x) returns the value of x rounded down to its nearest integer 

// Returns a random integer from 0 to 9:
console.log(Math.floor(Math.random()*10));

//// Returns a random integer from 0 to 100:
console.log(Math.floor(Math.random()*101));


//A Proper Random Function


function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

console.log(getRndInteger(10,100));

//you can use this one also

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

console.log(getRndInteger(10,100));
