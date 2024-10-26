console.log("Hello Javascript revision!");



// Arrays

var arr=[1,2,3,4,"Ram", "Krishna",22.4,33.4,55];
console.log(arr.length);
// This is used to find array length
console.log(arr.push(2,"JAva",1))

// This adds elements to end in array
console.log(arr);
arr.pop(2);
arr.pop(1);
arr.pop();

// This delete the element from the end in array 
console.log(arr.length);
console.log(arr);
arr.shift()

// This delete the first element from array and return the array
arr.unshift("Hello");
arr.unshift("Ram Ram");
// This adds the element in array from starting
arr.splice(2,3,"Jai shre krishna");

// This is used to splice the arrray with giving (starting index , deletion count , elements to be added)
console.log(arr);
console.log(arr.length)

// Arrays in javascript are objects



// Objects 

var student = {name:"Abhishek" , rollNo:1446 , marks:44};
var student1={name:"Kunal", rollNo:123,marks:32};
var student2={name:"Jattu",rollNo:443,marks:66};
// Objects are mutable in javascript.
// They are collection of key value pair.
// Javascript object is collection of properties.
// The all key value pair are properties.
console.log(student);
student.sem=4;
// This is used to add properties in object
console.log(student);
student.subject="ADI";
console.log(student);

// Different ways of accessing properties of object
console.log(student.rollNo);
console.log(student["rollNo"])

// Deletion of object properties or object
delete student.subject;
console.log(student);


