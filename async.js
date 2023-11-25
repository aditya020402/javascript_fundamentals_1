// What's going on? When we execute setTimeout(firstOperation, 5000); we pass a reference to the function that we want to execute when our timer (in the browser) reaches 5000ms, so, in between, JS code can keep executing. Once the Browser/Node timer finishes, the reference to firstOperation is going to end in the callback queue, then the Event Loop is going to move it to the call stack and finally it will be executed.

// **Important: **

// The reference is going to be de-queued and moved to the call stack ONLY when all synchronous code finished executing.

// The Event Loop checks constantly if the call stack is empty and if there's no more sync code to run. If that's the case, it will de-queue from the callback queue and move to the call stack. If not, it will wait before de-queueing.


//writting callback 

// function getUser(id,callback){
//     setTimeout(()=>{
//         callback({id,username:"Peter"});
//     },5000);
// }

// function callback(obj){
//     console.log(obj);
// }

// getUser(10,callback);

//callback hell 

// function getUser(id,callback){
//     setTimeout(()=>{
//         callback({id,username:"Peter"});
//     },5000);
// }

// function getHobbiesForUser(userId,callback){
//     setTimeout(()=>{
//         callback(['reading','writing']);
//     },3000);
// };

// function getExpenseForHobby(hobby,callback){
//     setTimeout(()=>{
//         callback(100000);
//     },1000);
// };


// now creating the callback hell 

// getUser(10,(user)=>{
//     console.log(user);
//     getHobbiesForUser(user.id,(hobbies)=>{
//         console.log(hobbies);
//         for(let hobby of hobbies){
//             getExpenseForHobby(hobby,(expenseForHobby)=>{
//                 console.log(expenseForHobby);
//             })
//         }
//     })
// });


// now fixing the callback hell 


// 1 using named function to fix callback hell 
// function getUser(id,callback){
//     setTimeout(()=>{
//         callback({id,usernname:"aditya"});
//     },3000);
// };

// function getHobbiesForUser(userId,callback){
//     setTimeout(()=>{
//         callback(['reading','writing']);
//     },1000);
// };

// function getExpenseForHobby(hobby,callback){
//     setTimeout(()=>{
//         callback(10);
//     },1000);
// };

// now rather than nesting we would call them seperately 
// eg :

// getUser(10,getHobbiesForUserSync);

// function getHobbiesForUserSync(user){
//     console.log(user);
//     getHobbiesForUser(user.id,getHobbiesAndExpensesSync);
// }

// function getHobbiesAndExpensesSync(hobbies){
//     console.log(hobbies);
//     for(let hobby of hobbies){
//         getExpenseForHobby(hobby,logExpensesForHobby);
//     }
// }

// function logExpensesForHobby(hobby){
//     console.log(hobby);
// }



// creating promises 

// const promise = new Promise(function(resolve,reject){
//     // perform any async task (like fetching some data from some api using fetch function)
//     setTimeout(()=>{
//         resolve({data:"this is the data"});
//     },1000);
// })

// promise.then(result=>console.log(result)).catch(err=>console.log(err));


// example of reject 

// const promise1 = new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         reject(new Error("something we wrong"));
//     },1000);
// })


// promise1.then(result=>console.log(result)).catch(err=>console.log(err));


// promises state => 
// pending
// fulfilled 
// rejected
// settled



// writting call back using promsies 

// function getUser(id){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve({id,username:"id"});
//         },3000);
//     });
// };

// function getHobbiesForUser(userId){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(['reading','writting']);
//         },3000);
//     })  
// };

// function getExpensesForHobby(hobby){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(10);
//         },3000);
//     })
// }


// getUser(10).then(
//    (user)=>{
//     console.log(user);
//     getHobbiesForUser(user.id).then((hobbies)=>{
//         console.log(hobbies);
//         for(let hobby in hobbies){
//             getExpensesForHobby(hobby).then((expense)=>{
//                 console.log(expense);
//             })
//         }
//    })
//     }
// ).catch(err=>console.log(err))




// function parseandlog(data){
//     console.log(data);
// }


// const result = fetch('https://jsonplaceholder.typicode.com/todos/1').then(data=>data.json()).then(data=>parseandlog(data)).catch(err=>console.log(err));

// promise all 
// const promise1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve(1);
//     },1000);
// });

// const promise2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve(2);
//     },2000);
// });

// Promise.all([promise1,promise2]).then(values=>console.log(values)).catch(err=>console.log(err));

// promise.race stops when 
// Promise.race([promise1,promise2]).then(value=>console.log(value)).catch(err=>console.log(err));


