let x = 2;

// Fonction impure
const add1 = (y) => (x += y);
console.log(add1(5));
console.log(add1(5));
console.log(add1(5));

// Fonction pure
const add2 = (a, b) => a + b;
console.log(add2(2, 3));

const tab = [1, 2, 3];

tab.forEach((item) => console.log(item));

// Fonctions callBack (de rappel)
function customForEach(arr, callBack) {
  for (let i = 0; i < arr.length; i++) {
    callBack(arr[i]);
  }
}

customForEach(tab, (item) => console.log(item));

const values = [50, 250, 650, 850, 980, 2000];

// Fonctions d'ordre supérieur
function customFilter(arr, func) {
  const filtered = [];
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      filtered.push(arr[i]);
    }
  }

  return filtered;
}

console.log(customFilter(values, (nb) => nb >= 500));

// Fonctions auto-invoquées

(function () {
  console.log("Hello World");
})();

// La récursion
function recursion(num) {
  num++;

  if (num > 10) {
    console.log(`C'est bon! ${num}`);
  } else {
    recursion(num);
  }
}

recursion(0);

// Exercices
// Ecrire une fonction pure qui sert à multiplier deux nombres
function multiply(a, b) {
  return a * b;
}

console.log(multiply(2, 5));
/* 
Ecrire une fonction d'ordre supérieur, qui prend une fonction callback en paramètre et un tableau
rempli de nombres
Cette fonction retournera un nouveau tableau, qui contient toutes les valeurs auxquelles ont a ajouté 1 */


function tabPlus(arr, callBack) {
    
    let newArray = [];
    for (const key in arr) {
        
            const element = arr[key];
           
           
                newArray.push(callBack(element));
      
    }

    return newArray; 
}

console.log(tabPlus([1, 2, 3, 4, 5, 6, 7, 8, 9], (el)=> el+1));