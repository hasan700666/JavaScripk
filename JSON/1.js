//JSON stands for JavaScript Object Notation

let text = '{"employees":[' +
'{"firstName":"John","lastName":"Doe" },' +
'{"firstName":"Anna","lastName":"Smith" },' +
'{"firstName":"Peter","lastName":"Jones" }]}';

const obj = JSON.parse(text);


console.log(obj.employees[1].firstName + " " + obj.employees[1].lastName);


//Read the Document, PLease!
