console.log("Namaste javascript season 2");

// What is async ?
// Async is keyword that is used before function to create async function
// This async function always return a promise.
// Either we return promise from this function or we return a value.
// if we are returning a value it will be wrap that value into promise on its own and will return a promise.


// const p=new Promise(function(resolve,reject){
//     resolve("Promise resolved value!!");
// });


// async function getData() {

//     //    return "namaste";
//     return p;
// }

// const dataPromise=getData();

// console.log(dataPromise);

// dataPromise.then(res=> console.log(res));


// async and await combo are used to handle promises.

// How we handle promise before.

// const p=new Promise(function(resolve,reject){
//     resolve("Promise resolved value!!");
// });

// function getData(){
//     p.then((res)=>console.log(res));
// };
// getData();


// await is keyword that can only be used inside async function.
// we write await in front of promise and it resolves promise.

// How to handle promise using async await
// You will use await infront of promise that has to be resolved await p
// The value of resolved promise will be stored in the variable.

 // const p=new Promise(function(resolve,reject){
//     resolve("Promise resolved value!!");
// });

// async function handlePromise(params) {
//     const val=await p;
//     console.log(val);
// };

// handlePromise();

 
// Difference between handling promise normally and using async await.
 

// Normal value

// const p=new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         resolve("Promise resolved value!!");
//     },10000);
// });

// function getData(){
//     // Js Engine will not wait for promise to be resolved.
//     p.then((res)=>console.log(res));
//     // Js engine moves to next line for execution and register call back for promise.
//     console.log("namaste javascript");
// }
// getData();


// async await 

// const p=new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         resolve("Promise resolved value!!");
//     },10000);
// });

// const pr=new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         resolve("Promise resolved value again!!");
//     },10000);
// });

// const pro=new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         resolve("Promise resolved value again started!!");
//     },20000);
// });

// async function handlePromise(params) {
//     console.log("Hello world");
    // Js engine was waiting for promise to resolved at this point.
    // after the promise get resolved only then the next code will be executed.
    
    // Js enginer just appears to be waiting at this point.
    // 
//     const val=await p;
//     console.log("Namaste Javascript");
//     console.log(val);

//     const val2=await pr;
//     console.log("Namaste javascipt 2");
//     console.log(val2);

//     const val3=await pro;
//     console.log("Namaste Javascript 3");
//     console.log(val3);
    

// };

// handlePromise();

// call stack
//After the handlePromise function is called , it will see there are 3 promise to be 
// resolved and it will take different time to resolve.
// i:e: one is taking 10 second , other is taking 20 seconds and so on.
// These async promised will be registered

// When handlePromise() is called , it will come in call stack and start executing.
// first it will execute the console.log and print it.
// Then proceed to next line.
// In next line after watching await, hanlePromise() execution will be suspended on temporary basis and it will not block the main thread as js waits for none.
// After suspending function temporarily , it will start executing once promise is resolved. And handlePromise() function will come again inside callstack and start executing from where it left.
// Then after starts executing ,it comes with another promise which is not resolved yet. Then this function will again suspend for some time and move out of callstack.
// After the promise is resolved it will come again into call stack for execution from where it left.
// Js engine is not waiting in call stack for promise.
// The function execution is being suspended when the promise is being resolved and it comes back into call stack for execution once promise is resolved and start resolving from where it was suspended.

// Fetch returns response in promise.

// const API_URL="https://api.github.com/users/Abkaplesh02";
// const API_URLL="https://invalidurl";

// async function handlePromise(params) {

//     try{
//         const data=await fetch(API_URLL);
//         const jsonValue=await data.json();
//         console.log(jsonValue);
//     }
//     catch(err){
//         console.log(err);
//     }
   
    // This fetch will return a response and response object will be stored in data.
    
    // Once we have response we will do .json to convert response body to json/stream/text anything we want.
    // This is again a promise.

    // fetch() =>Fetch returns response object
    // fetch() is a function , when it is resolved it gives a response object.
    // This response object has a body which is readable stream.
    // If you have to convert readable stream to json , then do .json
    // .json is again a promise , when it is resolved it will give you the result or value.
    // fetch()=> Response.json()=>jsonValue.

 

// }
// handlePromise();
// handlePromise().catch((err)=>console.log(err));
// Other method of catching error :: Traditional way



