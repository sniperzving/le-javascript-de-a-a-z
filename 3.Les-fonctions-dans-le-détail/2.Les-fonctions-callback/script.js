/*  
    1. Les fonctions callback.

    Une fonction peut recevoir une autre fonction en argument, on appelle ces fonctions des "fonctions callback".

*/

const database = [
  {
    name: "Ana",
    age: 26
  },
  {
    name: "Paul",
    age: 19
  },
  {
    name: "Pablo",
    age: 38
  }
];

// Coder une fonction qui vérifie l'âge d'un ensemble d'objets dans un tableau.
// Elle retournera false au premier membre qui a moins de 18 ans.

// En utilisant la boucle for et fonction fléchée
function areLegal(arr, callback){

  for(let i = 0; i < arr.length; i++) {
    if(!callback(arr[i].age)){
      return false;
    }
  }

  return true;
}

console.log(areLegal(database, age => age >= 18));

// En utilisant la boucle for...of et fonction normale
function isLegal(arr, callback) {

  for(let person of arr) {

    if(!callback(person.age)){
      return false;
    }

  }

  return true;
}

function checkAge(age) {
  return age >= 18;
}

// on peut tester toute sorte d'age.

console.log(isLegal(database, checkAge));