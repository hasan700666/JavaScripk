//Make a obj

let car = {
    name:"BMW",
    modle:"7985hn",
    country:"UK"
};

//Accessing the Obj properties

console.log(car.name);

//Anather way
console.log(car['name']);

//Anather way

let x = "name";
console.log(car[x]);

//adding new property
car.color = "Red";

//deleting properties
delete car.country

console.log(car.country); //undefined


let car2 = {
    name:"BMW",
    modle:"7985hn",
    country:"UK",
    car_Usre_Info :{
        user_name:"HEllo",
        user_age:"20",
        user_lucation:"London"
    }
};

console.log(car2.car_Usre_Info.user_name);