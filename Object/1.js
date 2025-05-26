//JS Object

const obj1 = {Name:"Hasan",Age:"19",Country:"BD"};

//obj1 is a objact
//Name,Age,Country is a property
//"Hasan,19,BD" is a value

//you can write this 

const obj2 = {
    firsst_name:"Husain",
    lust_name:"Muttaki",
    age:"16",
    Country:"BD",
    full_name: function(){
        return this.firsst_name+" "+this.lust_name;
    }
};

//ather way

const obj3 ={};

obj3.Name = "Musain";
obj3.Age = "10";
obj3.Country = "BD";
