//Create a function for Parson object

function Parson(name, age, country){  //this is an object constructors
    this.Name = name;
    this.Age = age;
    this.Country = country;
}

//create a object

const obj = new Parson("hasan", "19" , "Bangladesh");

//access the object

console.log(obj.Country);

//Now we can use new Person() to create many new Person objects! for ex:

const obj2 = new Parson("Husain" , "17" , "Bangladesh");

const obj3 = new Parson("Musain" , "11" , "Bangladesh");

//access the obj

console.log(obj2.Name);

console.log(obj3.Age);

//adding a new property

obj.gender = "mail";   //Now we can use new Person() to create many new Person objects. You can NOT add a new property to an object constructor

//Add a new property to the constructor function

Parson.prototype.netionality = "Bangali";

//Create function mathode

function Parson_Mathide(name, age, country){  //this is an object constructors
    this.Name = name;
    this.Age = age;
    this.Country = country;
    this.full_details = function(){
        return "his name is "+this.Name+" ,his age is "+this.Age+" and his country is "+this.Country;
    }
}

const obj4 = new Parson_Mathide("Musain" , "11" , "Bangladesh");

console.log(obj4.full_details());


//Adding a gender mathode

// obj4.Gender = function(Gender){
//     this.gender = Gender;
// }

// obj4.Gender("male");

// console.log(obj4.gender);

//Adding a Method to a Constructor

Parson_Mathide.prototype.Gender = function(Gender){
    this.gender = Gender;
}

obj4.Gender("Mail");

console.log(obj4.gender)