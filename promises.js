// const newpromise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         if(true){
//             resolve("success!!");
//         }
//         reject("failed and this error would be thrown!!")
//     },3000);
// });

// the line we are here and the function is not waiting would first get printed and then the promise would get resolved . it does not wait for the execution to be completed 

// const thenCatchApproach = () => {
//     newpromise.then((result)=>{
//         console.log("there was no error and the promise was executed successfully",result);
//     }).catch((error)=>{
//         console.log("there was some error",error);
//     })
//     console.log("we are here and the function is not waiting");
// }

// thenCatchApproach();

// here await would stop the execution of the code and would not print we are here and the function is not waiting 
// const  awaitasyncapproach = async() => {
//     try{
//         const result = await newpromise;
//         console.log("the promise was resolved successfully",result);
// console.log("we are here and the function is not waiting");
//     }
//     catch(error){
//         console.log("there was some error in resolving the promise",error);
//     }
// }

// awaitasyncapproach();

// resolve and reject can also return other things not only string they can also return some kind object having the result of fetch made to some api 
// in the same way  reject can also return  some kind of object and not necessary to return only string



// function returnUserDataFromSourceX(userId,callback){
    // do some async operation query from the db
//     setTimeout(function(){
//         callback({name:"Peter",age:30})
//     },1000);
// };

// function logUser(dataFromDb){
//     console.log("Hello",dataFromDb.name);
// };

// returnUserDataFromSourceX(1234,logUser);

// return returnUserDataFromSourceX(1245,function(dataFromDb){
//     console.log('hello',dataFromDb.name);
// })



// function returnUserDataFromSourceX(userId){
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             resolve({name:"peter",age:30});
//         },2000);
//     });
// };


// function logUser(dataFromDb){
//     console.log("hello",dataFromDb.name);
// }

// const userFromDB = returnUserDataFromSourceX(1234);
// userFromDB.then(function(data){
//     logUser(data);
// }).catch(function(err){
//     console.log(err);
// });




//async and await 

// async function returnUserDataFromSourceX(userId){
//     const result = await new Promise(function(resolve,reject){
//         setTimeout(function(){
//             resolve({name:"Peter",age:30});
//         },2000);
//     });
//     return result;
// };

// let results = returnUserDataFromSourceX(1).then((response)=>console.log(response));





async function healthCheckUp(lowerlimit,higherlimit){
    const url = "https://jsonmock.hackerrank.com/api/medical_records?page=1";
    const data = await fetch(url);
    console.log(data);
}

healthCheckUp(5,10);