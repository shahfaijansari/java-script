// Array------]
 
const myArr= [1,2,3,4,5]

let myHeros= ["Thor", "Captain America"]

let myArr2= new Array(1,2,3,4,5)

console.log(myArr[1]);

// Array methods---------

myArr.push(6)
myArr.push(7)
myArr.pop()

myArr.unshift(9)
myArr.shift()

console.log(myArr.includes(9));
console.log(myArr.indexOf(3));

const newArr= myArr.join()
console.log(myArr);
console.log(newArr);
console.log(typeof newArr);

// Slice, splice----------------

console.log("A", myArr);

const myn1= myArr.slice(1,3)
console.log(myn1);

console.log("B", myArr);

const myn2= myArr.splice(1,3)

console.log("C", myArr);

console.log(myArr2);

// Slice not change in original array and not include last range
// splice change in original array include last range 

