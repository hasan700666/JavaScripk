//Using String search() With a String

let TEXT = "HEllo BANGLADESH, you can do it!(NOT Bangladesh Cricket Team)";

console.log(TEXT.search("you can do it"));   //18
console.log(TEXT.search("not bangladesh"));  //-1   //JavaScript is case sansative


//Using String search() With a Regular Expression

console.log(TEXT.search(/BANGLADESH/));
console.log(TEXT.search(/BANGLADESH/i));  //🔴 i mines no case sansative
  
//Using String replace() With a String

console.log(TEXT.replace("BANGLADESH","BANGLADESH 2.0"));

//Use String replace() With a Regular Expression

console.log(TEXT.replace(/BANGLADESh/i,"BANGLADESH 2.0"));

//Regular Expression Modifiers

//read the documet, Please!

//Using test()

const S1 = /e/;

console.log(S1.test("There is must be"));  //true

//Using exec()

let Ex = /e/.exec("There is a e");

console.log("Found " + Ex[0] + " in position " + Ex.index + " in the text: " + Ex.input);


