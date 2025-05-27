//Access Obj Mathode by Properties

const Person = {
    name: "Hasan",
    age: "19",
};

console.log("his name is "+Person.name+" And his age is "+Person.age);

//Access Obj Mathode by loop

//i Don't understanded

let n = "";

for (let x in Person){
    //console.log(x);  //you want to se x value
    n = n + Person[x]+" "; 
}

console.log(n);

//Using Object.values()

let P = Object.values(Person);

console.log(P);

//Using Object.entries()

const Frouts = {Banana:300, mengo:200, Orange:400};

let H = "";
for (let [frouts_Name,value] of Object.entries(Frouts)){
    H += frouts_Name + " = " + value+ " ";
}
console.log(H);

//Using JSON.stringify()

let J = JSON.stringify(Person);

console.log(P);