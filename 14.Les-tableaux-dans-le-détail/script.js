let x = 2;

// Fonction impure
const add1 = (y) => x += y;
console.log(add1(5));
console.log(add1(5));
console.log(add1(5));

// Fonction pure
const add2 = (a,b) => a+b;
console.log(add2(2, 3));


const tab = [1, 2, 3];

tab.forEach(a => console.log(a));

