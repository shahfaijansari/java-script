// single tolne

// const tinderUser = new Object()

// console.log(tinderUser);

const tinderUser= {}
tinderUser.id = "123abc"
tinderUser.name= "Sam"
tinderUser.islogedIn= false

// console.log(tinderUser);

const regularUser= {
    email: "some@gmail.com",
    fullName: {
        userFullName: {
            firstname: "faiz",
            lastname: 'Asnari'
        }
    }
}

// console.log(regularUser.fullName?.userFullName.firstname);

const obj1 = {1: 'a', 2: "b"}
const obj2 = {3: 'a', 4: "b"}
const obj3 = {5: 'a', 6: "b"}

// const obj4= {obj1,obj2,obj3}

// const obj4= Object.assign({},obj1,obj2,obj3)

const obj4= {...obj1,...obj2}

// console.log(obj4);

const users= [
    {
        id: '1',
        email:"@gmail.com"
    },
    {
        id: 1,
        email:"faiz@gmail.com"
    },
    {
        id: '1',
        email:"zeenat@gmail.com"
    }
]

 b=users[2].email

//  console.log(tinderUser);

//  console.log(Object.keys(tinderUser));   // to print object key in the array form
//  console.log(Object.values(tinderUser));  // to print object value in the array form
//  console.log(Object.entries(tinderUser));  // to print key and value in the Array form
 
//  console.log(tinderUser.hasOwnProperty('islogedIn')); // (hasOwnProperty)- to check key available in object or not 
 
const course= {
    coursename: "js in hindi",
    price: "999",
    courseInsturctor: "faiz"

}

// course.courseInsturctor 

const {courseInsturctor}= course

console.log(courseInsturctor);
