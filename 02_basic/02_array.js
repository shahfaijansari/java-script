const marvel_heros= ["thor","ironman","spider"]
const dc_heros= ["supreman","flash","batman"]

marvel_heros.push(dc_heros)

console.log(marvel_heros);
console.log(marvel_heros[3][1]);

const all_heros= marvel_heros.concat(dc_heros)
console.log(all_heros);

const all_new_heros= [...marvel_heros,...dc_heros]

console.log(all_new_heros);

const another_array= [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array= another_array.flat(Infinity)

console.log(real_another_array);

console.log(Array.isArray("FaizAnsari"));  // (isArray)- to check isArray or not and return boolean values
console.log(Array.from("FaizAnsari"));  // (from)- to convery in array any string or nummber
console.log(Array.from({name: "Faiz"})); // to return a null array because it's confused i convert key in array or Values in array

let score1= 100
let score2= 200
let score3= 300

console.log(Array.of(score1,score2,score3));
