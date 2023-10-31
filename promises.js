const newpromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(true){
            resolve("success!!");
        }
        reject("failed and this error would be thrown!!")
    },3000);
});

// the line we are here and the function is not waiting would first get printed and then the promise would get resolved . it does not wait for the execution to be completed 

const thenCatchApproach = () => {
    newpromise.then((result)=>{
        console.log("there was no error and the promise was executed successfully",result);
    }).catch((error)=>{
        console.log("there was some error",error);
    })
    console.log("we are here and the function is not waiting");
}

thenCatchApproach();

// here await would stop the execution of the code and would not print we are here and the function is not waiting 
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

// resolve and reject can also return other things not only string they can also return some kind object having the result of fetch made to some api 
// in the same way  reject can also return  some kind of object and not necessary to return only string