//Reassigned Arrays in JavaScript

// const variable can hold an array, but the contents of the array can be modified

const car = ["Hero", "Honda", "BMW"];

// You can change an element
car[0] = "Toyota"; // Allowed
console.log(car); // ["Toyota", "Honda", "BMW"]

// You can add an element
car.push("Ford"); // Allowed
console.log(car); // ["Toyota", "Honda", "BMW", "Ford"]s

//But you can NOT reassign the array

//car = ["Toyota", "Volvo", "Audi"];    // ERROR


