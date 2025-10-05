const user= {
    userName: "faiz",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.userName},Welcome to Website`);
        console.log(this);
        
        
    }
}

// user.welcomeMessage()
// user.userName= "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "faiz"
//     console.log(this.username);
    
// }

// chai()

//------------Arrow Function--------------

// const chai= () => {
//     let username= "sam"
//     console.log(this);
    
// }

// chai()

// const addTwo = (num1,num2) =>{
//     return num1+ num2
// }

// console.log(addTwo(2,3));

// const addTwo = (num1,num2) => num1+ num2


// console.log(addTwo(2,3));

// const addTwo = (num1,num2) => (num1+ num2)


// console.log(addTwo(2,3));
const addTwo = (num1,num2) => ({username:"faiz Ahmad"})


console.log(addTwo(2,3));