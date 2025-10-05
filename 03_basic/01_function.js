const { use } = require("react");

function sayMyName(){
    console.log("f");
    console.log("a");
    console.log("i");
    console.log("j");
    
}
// sayMyName - function reference
// sayMyName() - funtion execution

// sayMyName() 

// function addTwoNumber(number1, number2){

//     console.log(number1+number2);
    
// }

function addTwoNumber(number1, number2){

    // let result = number1+number2
    // return result
     return number1+number2
}
// const result= addTwoNumber(3,4)

// console.log("Result:", result);

function loginUserMessage(username= "sam"){ 
//"sam"= is default value user not pass argument then by default print sam value
    if(username=== undefined){
        console.log("please enter user name");
        return  
    }
    return `${username} jsut logged in`
}
result=loginUserMessage()
// console.log(result);

// function calculateCartPrice(...num1){   // (...)-> to change (200,400,500,2999) in a array form
//     return num1
// }                                               

// console.log(calculateCartPrice(200,400,500,2999));

// function calculateCartPrice(val1,val2,...num1){   // (...)-> now only last two number store in the num1(500,2999) in a array form
//     return num1                                   // because first two vlaue store in val1 and val2
// }                                               

// console.log(calculateCartPrice(200,400,500,2999));

const user={
    username: "faiz",
    price: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
    
}

// handleObject(user)

const myNewArray = [200,300,400]

function returnSecondValue(getArray){
    return getArray[1]
}
b= returnSecondValue(myNewArray)
console.log(b);
