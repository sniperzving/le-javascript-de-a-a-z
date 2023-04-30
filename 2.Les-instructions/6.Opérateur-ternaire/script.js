/* 
    1. L'opérateur ternaire.

    L'opérateur ternaire permet d'effectuer une condition dans une expression.

    const isAdult = age >= 18 ? true : false; 
*/


const passenger1 = {
  name : "Maria",
  age: 42,
  premium: true
}
const passenger2 = {
  name : "Giovanni",
  age: 24,
  premium: false
}

console.log(passenger1.age >= 18? "Vrai" : "Faux");

/* function isAdult(passenger) {
  return passenger.age >= 18 ? true : false;
} */

// const isAdult = passenger => passenger.age >= 18 ? true : false;
const isAdult = (passenger) => { return passenger.age >= 18 ? true : false;}

console.log(isAdult(passenger1));

// Attention, n'utilisez que les opérations pour des calculs courts.
// On peut en effet les chaîner, ce qui donne un résultat affreux.
// Ne faites pas ça.

let generation = passenger1.age >= 0 && passenger1.age <= 20 ? "Premier âge" : passenger1.age > 20 && passenger1.age <= 40 ? "Second âge" : passenger1.age > 40 && passenger1.age <= 60 ? "Troisième age" : "Quatrième age";
console.log(generation);