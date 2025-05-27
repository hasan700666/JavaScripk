//Object Mathode

const Parson = {
    name: "Hasan",
    age: "19",
    job_De: function() {
        return "his name is "+this.name
    }
};


//Obj Mathode Access

Parson.job_De();

//Adding Mathode to an obj

Parson.Maried_Status = function(){
    return "The parson maried so son"
}

//JS Mathode

Parson.Maried_Status = function(){
    return ("The parson maried so son").toUpperCase();
}


//extra program for test

console.log(Parson.Maried_Status());