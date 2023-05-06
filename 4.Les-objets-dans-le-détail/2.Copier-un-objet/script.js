/* 
    1. L'erreur classique de référence.

    L'erreur classique est d'utiliser l'opérateur "=" pour copier une valeur de référence.
    Voyons un exemple avec un tableau;

*/

const numbers = [1, 2, 3];
const numbersCopy = numbers;

console.log(numbersCopy);

numbers.push(4);

console.log(numbers);
console.log(numbersCopy);

/* 
    2. Alors comment copier ?

    Il existe plusieurs manière de faire, avec le spread operator [...], {...}, Object.assign(), Array.from(), .concat()

    Néanmoins, toutes ces façons de faire vont créer une copie superficielle, c'est à dire que seulement les valeurs primitives seront copiées, les tableaux ou objets imbriqués seront toujours référencés.

    Vous sentez le bug arriver ?
*/

const letters = ["a", "b", "c", "d", { name: "Zoro" }];

// Spread Operator
const lettersCopy = [...letters];
lettersCopy[4] = { ...letters[4] };

/* lettersCopy[0] = "a";
lettersCopy[1] = "b";
lettersCopy[2] = "c";
lettersCopy[3] = "d"; */
// const lettersCopy = Array.from(letters);
console.log(lettersCopy);
letters.push("e");

console.log(letters);
console.log(lettersCopy);

letters[4].name = "max";

console.log(letters[4]);
console.log(lettersCopy[4]);

const shallowClone = structuredClone(letters);

/* 
    3. Faire une copie profonde, deep copy.


    A. On peut faire une copie profonde en copiant chaque niveau d'un objet "à la main".

    B. Seconde manière de faire, utiliser la méthode structuredClone() qui permet de deep-clone facilement.
    Malheuresement, cette méthode ne permet pas de cloner des méthodes.
*/

const deepObj = {
  userName: "Enzo",
  age: 99,
  collection: {
    a: 1,
    b: 2,
    c: 3,
  },
};


const objCopy = {
    ...deepObj
}

deepObj.userName = "Julia";

console.log(objCopy);

deepCopy = {
    collection: {
        ...deepObj.collection
    }
}

console.log(deepCopy);
deepCopy.age = 11;

console.log(deepObj);
console.log(deepCopy);
