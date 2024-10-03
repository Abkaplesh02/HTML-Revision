"use strict";
console.log("Namaste Javascript")

// this keyword :::

// this in global scope

console.log(this);
// this prints window object
// this keyword in global space represents global object which in different in different cases depends on javascript runtime enviorment.
// In case of browser this global object is window.
// in case of nodeJs this global object will be global.



// this inside a function

function x(){
    console.log(this);
}
x();

// Inside a function:: this keyword works differently in strict mode and non-strict mode.
// this value is undefined in case of strict mode.
// but in non-strict mode it points to window object.

// this inside non-strict mode :: (this subsitution)

// if the value of this keyword is undefined or null in non-strict mode, this will be replaced with global object , only in nonstrict mode.


// this keyword value depends on how the function is called.

x();
// when the function is called without any reference , then the value of this is undefined.
window.x();
//  but if we call the function with object reference.


// this inside a object's method.


// if you make function as part of a object : then this is known as method.


const obj={
    a:10,
    y: function(){
        console.log(this);
        console.log(this.a);
        // here this will refer to the object obj and a to the value of a insied object.
    }
}
obj.y();


// Whenever you are inside the method , the value of this keyword is object where this method is present.
// y();
// y is not defined.
// x is method of an object obj



// call apply bind methods (sharing methods)

const student={
    name : "Abhishek",
    printName : function(){
        console.log(this);
        console.log(this.name);
    },
};
student.printName();

 const student2={
    name : "jattu",
 }

 student.printName.call(student2);

//  here .call is used and takes the object as arguement to which we want to point the this keyword of method we are overriding.
//  value of this == student2.

// suppose if we want to share/use the method of one object in another object , we can do it using call apply bind.
// 

// this inside arrow function
// arrow function do not have their own this keyword binding associated with it. They take the value of their this is the value of  lexical enviorment where they are enclosed.


const obj2={
    a:10, 
    x : function(){
        console.log(this);
    }
}
obj2.x();


const obj3={
    a:10, 
    x : () => {
        console.log(this);
    }
}
obj3.x();
// The value of this here will be it's enclosing lexical context.
// this will behave like it is in global space because the lexical scope of the object that is global space.
// Arrow functions don't provide their own this binding , ( it retains the this value of the enclosing lexical context).


const obj4={
    a:10, 
    x : function() {
        // enclosing lexical context
        const y= ()=>{
            console.log(this);
        }
        y();
       
    }
}
obj4.x();


// this inside DOM

// <!-- this inside DOM elements :: reference to the HTML elements -->

 

