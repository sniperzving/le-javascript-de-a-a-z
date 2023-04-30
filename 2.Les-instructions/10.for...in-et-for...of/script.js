/* 
    1. Les boucles modernes for...in et for...of.

    for...in sert à itérer à travers des objets.

    for...of sert à itérer à travers des éléments itérables, comme les tableaux ou les chaînes de caractères.
*/


const person = {
  name: "Cyril",
  age: 35,
  height: 188,
  weight: 90
}

for(const props in person) {

console.log(props, person[props]);  
}

const fruits = ["🍓","🍇","🍑","🍎","🥭"]

for(const fruit of fruits) {
  console.log(fruit);
}