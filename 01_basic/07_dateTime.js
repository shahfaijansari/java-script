// DATE ---------

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate);

// let myCreateDate = new Date(2025,1,25)
let myCreateDate = new Date("08-12-2025")
// console.log(myCreateDate.toLocaleString());

let myTimeStamp= Date.now()
// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDate());
console.log(newDate.getFullYear());
console.log(newDate.getDay().toLocaleString());


newDate.toLocaleString('default',{
    weekday: "long"
})

