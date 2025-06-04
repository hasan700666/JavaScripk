//this in a Method

let parson ={
    first_Name : "Hasan",
    lust_Name : "Muttaki",
    age : 20,
    full_Name : function F(){
        return this.first_Name+ " " +this.lust_Name; 
    }  
}

console.log(parson.full_Name());


//this Alone  //i don't understand🔴🔴🔴🔴

let a = "Windows";

let A = this.a;

console.log(A);


//🔴🔴🔴i don't understand🔴🔴🔴🔴