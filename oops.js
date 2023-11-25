// const myobj = {
//     name:"Peter",
// };

// console.log(myobj);

// const myobj1 = {};
// myobj1.name="Peter";
// console.log(myobj1);


// const myobj2 = new Object();
// myobj2.name="peter";
// console.log(myobj2);

// //object.create 

// const first = {};
// first.name="aditya";
// const second = Object.create(first);
// console.log(second);
// console.log(second.name);


// //check if obj1 is a prototype of obj2 

// console.log(Object.getPrototypeOf(second)===first);


// // generating objects using functions


// function createChracter(name){
//     const newCharacter = {};
//     newCharacter.name=name;
//     newCharacter.greeting = function greeting(){
//         console.log(`Hello I'm ${this.name}`);
//     }
//     return newCharacter;
// }


// const peter = createChracter("Peter");
// const wendy = createChracter("Wendy");
// const tinkerbell = createChracter("Tinkerbell");

// console.log(peter);
// console.log(wendy);
// console.log(tinkerbell);




// const name = "global-name";

// const character = {
//     name:"scoped-name",
//     arrowgreeting:()=>{
//         return `My name is ${name}`
//     },
//     funcgreeting(){
//         return `My name is ${this.name}`
//     }
// }

// console.log(character.arrowgreeting(),character.funcgreeting());

// adding property 

// const myobj = {};
// myobj.someprop = 123;
// myobj.someprop1 = "aditya";
// myobj.somemethod = function(){
//     return "HI!";
// }


// In JavaScript we have primitive (string, number, boolean, etc) and reference types (objects and its special object type, array)

// Primitives are immutable while reference types are mutable.

// delete myobj.someprop // used to remove property



// understaing scopes in javascript and concept of hoisting 

// var primitive = 123

// function updt(n){
//     primitive = n;
// }

// now we have to primitive variable one is scoped to the function and other one to the window object that is why first console will print 1 and the second console would print 123


// updt(1);
// console.log(primitive)
// console.log(window.primitive);

// this is the global primitive and it's value never changes 
// var primitive = 123;
// function updt(n){
//     var primitive = n;
    // all the function inside this function has the copy to this local var variable
//     return function insidieupdt(){
//         return primitive;
//     }()
// }

// updt(1)
// console.log(updt(1));

// let and const can't be accessed using the window object

// let val1 = 123 
// if(1){
//     let val1 = 1234
//     console.log(val1,"this is the local one");
// }
// console.log(val1,"this is the global one");

// similar behavious is shown by the const and let 
//var doesn't show the same behaviour it act's differently as we have seen above


// here we are making changes in the const declared variable stil not error is being thrown this is happening because we are not changing any existing property of the array we are just pushing new number and this is not making any mutating changes in the arrray hence no error is being thrown.
// const arr = [1,2,3]

// function addnum (arr,num){
//     arr.push(num)
//     return arr
// }

// console.log(addnum(arr,4));

// console.log(arr);


// here an error is being throw because we are reassigning the value to a const variable which produces the error

// const obj = {
//     name:"aditya",
//     class:"12th"
// }

// obj={
//     name:"adi",
//     class:"13th",
// }
    

// console.log(obj);


// The const declaration creates a read-only reference to a value. It does not mean the value it holds is immutable—just that the variable identifier cannot be reassigned. For instance, in the case where the content is an object, this means the object's contents (e.g., its properties) can be altered.

// let arr1 = [1,2,3]

// function checking(arr,num){
//     console.log(arr)
//     const newref = arr
//     newref.push(num)
//     console.log(newref)
//     console.log(arr)
//     return newref
// }

// checking(arr1,4);

// const obj1 ={
//     name:"aditya",
// }
// const obj2 = {
//     name:"aditya",
// }

// if(obj1===obj2){
//     console.log("they are the same");
// }
// else{
//     console.log("they are not the same");
// }


// console.log(JSON.stringify(obj1)===JSON.stringify(obj2));
// console.log(JSON.stringify(obj1));