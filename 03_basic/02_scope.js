// var c= 300
let a= 300
if (true){
let a= 10
const b= 20
// console.log("innter:", a);

}


// console.log(a);
// console.log(b);
// console.log(c);

function one() {
    const username="Faiz"

    function two(){
        const website= " youtube"
        console.log(username+ website);
        
    }
    // two()
}
// one()

// ++++++++++++++ intresting +++++++++++++++

function addone(num){
    return num+1
}

addone(5)

const addTwo= function addone(num){
    return num+2
}

addTwo(5)