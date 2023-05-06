/* 
    1. Valeurs primitives

    Les valeurs primitives sont les : string, number, bigint, boolean, undefined, symbol, null.
    Elles représentent des valeurs "simples" dans la mémoire : "abc", 15, true, etc...

*/


let userName1 = "Giovanni";
console.log(userName1); // Giovanni

let userName2 = userName1;
console.log(userName2); // Giovanni

userName1 = "Luca";
console.log(userName1); // Luca
console.log(userName2); // Giovanni

/* 
    2. Les valeurs de référence.

    Les objets sont des valeurs de référence, c'est-à-dire qu'ils vont prendre une place spéciale dans la mémoire.
    Si on copie un objet dans une autre variable, nous créons une référence, nous ne créons pas une copie indépendante.
*/

const dog1 = {

    name: "Tom",
    breed: "Golden"
}

let dog2 = dog1;

console.log(dog1); // {name: 'Tom', breed: 'Golden'}
console.log(dog2); // {name: 'Tom', breed: 'Golden'}

dog1.name = "Jacques";
console.log(dog1); // {name: 'Jacques', breed: 'Golden'}
console.log(dog2); // {name: 'Jacques', breed: 'Golden'}

// Copie /!\
let dog3 = {
    name: dog1.name,
    breed: dog1.breed
}

console.log(dog1); // {name: 'Max', breed: 'Golden'}
console.log(dog2); // {name: 'Max', breed: 'Golden'}
console.log(dog3); // {name: 'Max', breed: 'Golden'}

dog1.name = "Max";


console.log(dog1); // {name: 'Max', breed: 'Golden'}
console.log(dog2); // {name: 'Max', breed: 'Golden'}
console.log(dog3); // {name: 'Jacques', breed: 'Golden'}

/* 
    3. Pourquoi les chaînes ont des propriétés / méthodes ?

    Les valeurs primitives string, number, boolean et symbol sont transformées en objet lorsqu'on utilise l'opérateur "." qui sert à accèder à des propriétés.

    Cela permet d'avoir accès à des méthodes et des propriétés très pratiques.
*/

const str = "Lorem";
console.log(str.toLocaleUpperCase());

console.log(new String("Lorem"));