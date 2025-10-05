// ------Singleton------

// ---object literal-----

const mykey= Symbol("key1")

const JsUser= {
    name: "faiz",
    'full Name': "faiz Asnari",
    [mykey]: 'MYSYMBOL',
    age: 23,
    location: "Kushinagar",
    email: "faiz@gmail.com",
    isLoggedIn: false,
    lastloginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full Name"]);
// console.log(JsUser[mykey]);

JsUser.email= "faiz@google.com"   // over write the jsUserkey email
// Object.freeze(JsUser)
JsUser.email= "faiz@chatgpt.com"  // but here not over write because one line before we used object freeze 

// console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello Js User");
    
}

JsUser.greetingTwo = function(){
    console.log(`Hello JsUser ${this.name}`);
    
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
