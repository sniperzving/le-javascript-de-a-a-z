const tableau = ['a', 'b', 'c', 'd'];
console.log(tableau);
// Ajoute un élément à la fin du tableau 
tableau.push('z');
console.log(tableau);
// Supprime un élément à la fin du tableau 
tableau.pop();
console.log(tableau);
// Supprime un élément au début du tableau 
const newTab = tableau.shift();
console.log(`${newTab}`);
console.log(tableau);
//  Ajoute des éléments au début d'un tableau 
tableau.unshift('a', 'z')
console.log(tableau);

console.log(tableau.indexOf('z'));

console.log(tableau[1]);






let fruits = ['pomme', 'orange', 'banane', 'kiwi', 'mangue'];
let selection = fruits.slice(1, 4);

console.log(selection); // Affiche ['orange', 'banane', 'kiwi']

console.log(fruits);

let fruitss = ['pomme', 'orange', 'banane', 'kiwi', 'mangue'];
let elementsSupprimes = fruitss.splice(2, 2, 'fraise', 'raisin');

console.log(fruitss); // Affiche ['pomme', 'orange', 'fraise', 'raisin', 'mangue']
console.log(elementsSupprimes); // Affiche ['banane', 'kiwi']

// Concaténer des tableaux 
const tableau1 = ['a', 'b', 'c', 'd'];
const tableau2 = ['e', 'f', 'g', 'h'];
const tableau3 = tableau1.concat(tableau2);


console.log(tableau3);
// Vérifie si le tableau inclut un élément
console.log(tableau3.includes('z')); 

const multitab = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];
// Applatir un tableau
console.log(multitab.flat(2)); 

// Transformer un tableau en chaîne de caractères
const tab = ['Pomme', 'Fraise', 'Banane'];
const str = tab.join('.');
console.log(str);
// Renverer un tableau
console.log(tab.reverse());

// Les méthodes CallBack
function usingCallback(callback) {
    callback();
}

usingCallback(() => console.log("Hello Depuis la Callback"));

// ForEach 
const numTab = [1,2, 3, 4];

numTab.forEach(el => console.log(el))

// Map 
const newNumTab = numTab.map(el => el*2);
console.log(newNumTab);

// Filter
const myFruits = ["Fraise", "Banane", "Mangue", "Melon", "Kiwi"];
const result = myFruits.filter(f => f.length > 4);
console.log(result);

// Reduce (a: Accumulateur , b: Valeur courante), 100 valeur intiale d l'acc
const numTab2 = [1,2, 3, 4];
const reduced =  numTab2.reduce((a, b) => a+b, 100);

console.log(reduced);


// Boucle For
const numTab3 = [1,2, 3, 4, 5, 6,7, 8, 9];

for (let i = 0; i < numTab3.length; i++) {
    const element = numTab3[i];
    console.log(element);
} 

const myStr = 'Lorem ipsum dolor sit amet.';

console.log(myStr.charAt(4));
console.log(myStr.includes('ipsum'));
console.log(myStr.indexOf('ipsum'));
console.log(myStr.charCodeAt(0));

console.log(myStr.slice(-5));
console.log(myStr);
const strToArray = myStr.split(' ');  // Aussi (join) pour faire l'opposé
console.log(strToArray);
const str1 = "Hello";
const str2 = "World";

console.log(str1.concat(' ', str2));


// le Regex
const txt = 'Lorem ipsum dolor sit amet.';
const regex1 = /[a-z]/g; // Toutes les lettres en minuscule
const regex2 = /[^a-z]/g; // Tous les caractères non minuscules
const regex3 = /[A-Z]/g; // Toutes les lettres en majuscule
const regex4 = /[^A-Z]/g; // Tous les caractères non majuscules
const regex5 = /[a-z]/gi; // Toutes les lettres minuscules ou majuscules 
const regex6 = /[0-9]/gi; // Tous les chiffres
const regex7 = /^[0-9]/gi; // Tout ce qui n'est pas un chiffre
const regex8 = /[\d]/gi; // Tous les chiffres (Comme [0-9])
const regex9 = /[\s]/gi; // Tous les espaces
const regex10 = /[\w]/gi; // Equivaut à [a-zA-Z0-9_]
console.log(txt.match(regex5));


// Replace avec les chaînes de caractères
console.log(txt.replace(/[o]/gi, 'zzz'));