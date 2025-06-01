//Array indexOf()

const fruits = ["Apple", "Orange", "Apple", "Mango"];

console.log(fruits.indexOf("Apple")+" first posation Apple founded ");

console.log(fruits.indexOf("Banana"));  //-1 mins not founded

//Array lastIndexOf()

console.log(fruits.lastIndexOf("Apple")+" lust posation Apple founded ");

// Array includes()

console.log(fruits.includes("Mango")); //true

console.log(fruits.includes("Banana")); //folse

//Array find()

//i don't understand

//Array findIndex()

//i don't understand

//Array findLast()

//making a array

const arr = [10,100,200,20,300,40];

console.log("100 biger then number is = " + arr.findLast(x => x >100));

//Array findLastIndex() Method

console.log("100 biger then number posation form list is " + arr.findLastIndex(x => x > 100));  //4 mins arr[4] = 300
console.log("20 biger then number posation form list is " + arr.findLastIndex(x => x > 20));    //4 mins arr[5] = 40

