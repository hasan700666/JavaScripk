//Class
//Making a class

class c1 {
    constructor(name,age){
        this.name = name;
        this.age = age;

        console.log("Your name is "+name+" and your age is "+age );
    }
}

//Using a Class
new c1("Hasan",19);

//Class Methods

class car {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    year(){
        let date = new Date();
        return date.getFullYear() - this.age;
    }
}

let myCar =new car("TOYOTA",2000)

console.log("my car is "+myCar.year()+" years old");

//Ex

class old {
    constructor(year){
        this.year = year;
    }
    age(){
        let Y = new Date();
        return Y.getFullYear() - this.year;
    }
}

let myOld = new old(2005);

//praint

console.log("I am "+myOld.age()+" years old");

