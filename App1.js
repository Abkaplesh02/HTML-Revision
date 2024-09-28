console.log("Namaste javascript season 2");

// Promise APIs

// Promise.all()  :::  This takes array of promises as input.    
// When we have to make parallel api calls. Ex :: suppose we have 10 user Ids and we need to make api calls to get user info of all of them. We need to make parallel api calls for all of them. Result is use promise.all() api.
// This is used to handle multiple promises together. Promise.all takes iterables/array of promises as input.suppose we have 3 promises. Promise.all([P1,P2,P3]) and we pass it to promise.all(), it will make 3 parallel api calls to get the result.
// If the promises we used different times to get resolved , promise.all() will give output as array which will carry result of all these promises. but only after  all of the promise get resolved , now matter if one is taking 3 seconds and other is taking 7 seconds.It will give output only after positive resolvation of all promises.
// Promise.all() will make api calls , store the result inside an array and give it back. 
// Promise.all() work similarly like array.map() return the value of result in array .
// ex : [val1, val2,val3] :: val1 is result of p1 , val2 is result of p2 , val3 is result of p3.
// This result will be returned only after all of the promises to be resolved , only then it returns array of output.
// This was case of all promise getting positive resonse , all get ting resolved successfully.


// Promise.all([p1,p2,p3])
// p1 takes 3second,p2 takes 1second. p3 second
// let suppose p2 promise get rejected after 1 second instead of getting resolved. As soon as promsie get refected this promise.all() will throw an error.Promise.all() will be failure and the error which it get from the rejected promise  it wiil throw the same error.
// Error
// Immdediately as soon as error happened , it will return error . 
// after one second it will show error, it will not wait for other promises to resolved if one of them failed.
// What will happend to other api calls p1 and p3 , will they get cancelled?
// No, whenever we makes api callls , the promsie is called, we can't cancel promise in between , this is not possible in javascript. But the result of these promise will not matter if it's rejected or resolved the promise.all() will get rejected as whole and give error.
// 

// It is like all or none , if all the promise are success, it will give you collective result. but if any of the promise failed, the whole collection of promises failed error will be thrown immediatley and will not wait for other promises to get resolved.

const p1=new Promise(function(resolve,reject){
    // setTimeout(()=>resolve("P1 succes"),3000)
    setTimeout(()=>reject("P1 failed"),800)
});

const p2=new Promise(function(resolve,reject){
    // setTimeout(()=>resolve("P2 succes"),2000)
    setTimeout(()=>reject("P2 failed"),800)
});

const p3=new Promise(function(resolve,reject){
    // setTimeout(()=>resolve("P3 succes"),2000)
    setTimeout(()=>reject("P3 failed"),800)
});

const p4=new Promise(function(resolve,reject){
    setTimeout(()=>reject("P4 failed"),800)
});

// This will throw error after 2 second , because p4 is getting rejected.


//  Promise.all([p1,p2,p3]).then(res=>{
//     console.log(res)
// })
// .catch((err)=>{
//     console.log(err);
//     console.error(err);
//     // use any of them as error.
// });



// Promise.allSettled ([p1,p2,p3,p4]).then(res=>{
//     console.log(res)
// })
// .catch((err)=>{
//     console.log(err);
//     console.error(err);
//     // use any of them as error.
// });



// Promise.race ([p1,p2,p3,p4]).then(res=>{
//     console.log(res)
// })
// .catch((err)=>{
//     console.log(err);
//     console.error(err);
//     // use any of them as error.
// });

Promise.any ([p1,p2,p3,p4]).then(res=>{
    console.log(res)
})
.catch((err)=>{
    console.log(err.errors);
    // console.log(err.errors[1]);
    console.error(err);
    // use any of them as error.
});




// This promise.allSettled() will return array of objects wihich will have status of promise and values of promise in object.


// Which api call to use if we want result for only positive promise.all() api call. It does not matter if some of them failed. then which api call to use.
// Promise.allSettled()
// Promise.allSettled([P1,P2,P3]);    P1 takes 3 second , P2 takes 1 second, P3 takes 2 second
// Suppose we are passing array of p1 , p2 and p3 over here.If all of them get successfull , it will show result and return array [val1,val2,val3]  this is output of successful casee.
// Now if P2 gets rejected, this will wait for all other promises to get settled whether they are success or failure. After 3 seconds it will give us output as [val1,error,val3]. The output error will be of same size as of input and the rejected promsie will return error message in value and resolved/settled  one will return val .

// Promsise.all() is kind of FAIL FAST . i:e: if one of them fail it give error quickly.
// Promise.allSettled() This waits for other to settled even if any of them get failed.



// Promsie.race()
// promise.race([P1,P2,P3])   P1 takes 3 second , P2 takes 1 second , P3 takes 2 second
// This takes 3 promises, as the name suggests it's the race,the promise which get resolved first it will return the result of that in value form not in array i:e :  it will return val2  after 1 second. Whatever value the promises.race will give first it will return that.
// This was case for first promise to get resolved , but what if first promsie gets rejected.
// If P2 rejects are 1 second , the error will be thrown which came from that promise.
// This promise api is race, it will throw the first result which it gets whether it's resolved or rejected .It will not wait for other promises to get settled because it's race.
// if two or promises are taking same time to get resolved , the one above in the order will get resolved and returned .
// The first settled promise value will return , whether it's success or failure.




// Promise.any()
// Promise.any([P1,P2,P3])
// this is very much similar to race .This will return the result of first successfully settled promise.
// If first promise get rejected , then it will wait for other promise to get resolved and return the result. , 
// If all of the promise get rejected , the return result will be Aggregate Error which will in array i:e: [err1, err2,err3].
// it will collect all error and return them in array .
// This is success seeking api. seeking for first success.
// This will wait for first settled success or first resolved settled promise.
// Aggreagate error :: this will aggregate all the error and give the aggreagate error.
//  To show aggregate error array :: we need to handle error by creating array in catch block
// console.log(err.errors)
//We can print specific error using console.log(err.errors[0])   or console.log(err.errors[1])  because it is storing error in list or array.


// settled =>means we got the result which can be resolved or rejected, It can be success or failure. It can be fullfilled or rejected.
