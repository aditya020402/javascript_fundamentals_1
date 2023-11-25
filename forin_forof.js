// for-in is used to iterative over the key 
const arr = ['Hi','Hello','Hola']

for (let el in arr) {
  console.log(el);
}

// '0'
// '1'
// '2'

const obj = {
  prop1: 1,
  prop2: 2,
  prop3: 3
}

for (let prop in obj) {
  console.log(prop);
}

// 'prop1'
// 'prop2'
// 'prop3'



const arr1 = ['Hi','Hello','Hola']

for (let el of arr1) {
  console.log(el);
}

// 'Hi'
// 'Hello'
// 'Hola'

