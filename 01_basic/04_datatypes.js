// DataTypes Summary

// Primitive or Reference - There are three type of Primitive Datatypes
// 1. String
// 2. Number
// 3. Boolean
// 4. Null
// 5. Undefined
// 6. Symbol
// 7. BigInt

const score= 100
const scoreValue= 100.3

const isLoggeIn= false
const outsideTemp= null
let userEmail;

const id = Symbol('123')
const anotherid= Symbol("123")

// console.log(id===anotherid);

// Not Primitive- 
// 1. Array
// 2. Object
// 3. Function

const heros= ["shaktiman","naagraj", 'DOGA']

let myobj={
    name: "faiz",
    age: 22
}

let myfunction= function(){
    console.log("Hello");
    
}
 
// +++++++++++++++++++++++++++++++++++

// stack (Primitive), Heap (Non-Primitive)

let myYoutubename= "shiddat-e-ishq"
let anothername= myYoutubename
anothername= "ishq-e-laa"
console.log(myYoutubename);
console.log(anothername);



let userOne= {
    email: "user@gmail.com",
    upi: "user@ybl"
}
let userTwo= userOne
userTwo.email= "faiz@gmail.com"
console.log(userTwo.email);
console.log(userOne.email);


