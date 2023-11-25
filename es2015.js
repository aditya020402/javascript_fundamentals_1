// try using string literals 


const first = "aditya";
const second = "sharma";

const result1 = first + " " + second;
const result2 = first.concat(" ",second);

console.log(result1);
console.log(result2);


const result3 = first + "\n" + second; 
console.log(result3);



// now doing the same task using string templates

const result11 = `${first} ${second}`;
const result22 = `${first} 
${second}`;

console.log(result11);
console.log(result22);


// performign destructuring assigment in javascipt 


const arr = [1,2,3,4,5];

const [a,b,c,...other] = arr;

console.log(a);
console.log(b);
console.log(c);
console.log(other);


// remember inside the arrow function we cannot use the this keyword 
// if you need to use the this keyword inside the function then create a normal function

// for the same reason constructor are never arrow function they are normal functions

// arrow functions don't have any prototype while normal functions have a prototype

