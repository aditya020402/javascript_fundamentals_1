const newpromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(true){
            resolve("success!!");
        }
        reject("failed and this error would be thrown!!")
    },3000);
});


// const thenCatchApproach = () => {
//     newpromise.then((result)=>{
//         console.log("there was no error and the promise was executed successfully",result);
//     }).catch((error)=>{
//         console.log("there was some error",error);
//     })
//     console.log("we are here and the function is not waiting");
// }

// thenCatchApproach();


const  awaitasyncapproach = async() => {
    try{
        const result = await newpromise;
        console.log("the promise was resolved successfully",result);
console.log("we are here and the function is not waiting");
    }
    catch(error){
        console.log("there was some error in resolving the promise",error);
    }
}

awaitasyncapproach();


