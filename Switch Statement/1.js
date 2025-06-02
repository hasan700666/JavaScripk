//Syntax

/*
switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}
*/

//The getDay() method returns the weekday as a number between 0 and 6.

//(Sunday=0, Monday=1, Tuesday=2 ..)

switch (new Date().getDay()){
    case 0:
        console.log("Sunday");
    break;
    case 1:
        console.log("Monday");
    break;
    case 2:
        console.log("Tuesday");
    break;
    case 3:
        console.log("Wensday");
    break;
    case 4:
        console.log("Thasday");
    break;
    case 5:
        console.log("Friday");
    break;
    case 6:
        console.log("Saterday");
    break; 
    default:
        console.log("i think the code have provlem");       
}

switch (new Date().getDay()) {
    default:
        console.log("i am defult");
        break;
    case 0:
        console.log("Sunday");
    break;
    
    case 2:
        console.log("Tuesday");
    break;
    
    case 4:
        console.log("Thasday");
    break;
    
    case 6:
        console.log("Saterday");
    break;  
}

// Some program to understand

let x = "0";

switch  (x){
    case 0:
        console.log("x = 0");
    break;
    case 1:
        console.log("x = 1");
    break;
    default:
        console.log("No thing found");
    break;      
}

x = 1;

switch  (x){
    case 0:
        console.log("x = 0");
    break;
    case 1:
        console.log("x = 1");
    break;
    default:
        console.log("No thing found");
    break;      
}

x = 0;

switch  (x){
    case 0:
        console.log("x = 0");
    break;
    case 1:
        console.log("x = 1");
    break;
    default:
        console.log("No thing found");
    break;      
}