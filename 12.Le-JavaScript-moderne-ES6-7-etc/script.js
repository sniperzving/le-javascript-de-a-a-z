
// Hoisting (Hissage)
/* console.log(x);
var x = 50;
 */

// Function scoped & block scoped 
function foo() {
    if(true) {
        let x = 5;
    }

    console.log(x);
}

// foo();

// Redeclaration 
var y = 5;

var y = 99;


console.log(y);

// Objet global
var maVariable = "Hello";
console.log(window);

// Fonctions fléchées  (Pas de hissage)

function poo() {
    return 3;
}

console.log(poo());

const too = () => {
    return 3;
}

console.log(too());

const obj = {
    a:5, 
    funcClassique() {
        console.log(this.a);
    },
    funcFlechee: () => {
        console.log(obj.a);
    }
}

obj.funcClassique();
obj.funcFlechee();
const btn= document.querySelector("Button")


btn.addEventListener('click', function () {
 console.log(this);
})
// btn.addEventListener('click', (() => console.log(this)))


// Template Litterals 

const bat = () => 5555;

const a = 5;

console.log(`Hello World ${bat()}`);
let str = `Hello World  ${a === 5 ? "Bravo": "Echec"}`;
console.log(str);


// Orienté objet
class Pays {
    
    constructor(pop, nom, pib) {
        this.pop = pop;
        this.nom = nom;
        this.pib = pib;
    }

    showPop() {
        return this.pop;
    }
} 

const France = new Pays(70, "France", 3300);
const Australie = new Pays(35, "Australie", 1200);
console.log(France, Australie);

console.log(`Population de ${France.nom} : ${France.showPop()} millions.`);


// Spread Operator
const nb = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const str2 = "Hello World!";

console.log(...nb);
console.log(...str2);

const pays = {

    nom: "Norvège",
    pop:9
}

// Destructuring 
const {nom, pop} = pays;

console.log(`${nom}  ${pop}`);

const tab = ['a', 'b'];
const [x, z] = tab;

console.log(`${x} ${z}`);

let prenom = "John";
let age = 48;

const monObjet = {
    prenom,
    age,
    hello() {
        console.log("Hello");
    }
}

function name(x, y=25) {
    return x+y;
}

console.log(name(20, 10));


function baz(...args) {
    console.log(args);
}

console.log(1, 2, 3, 4, 5, 6, 7, 8, 9);

// Les promesses 
const promise1 = new Promise((resolve, reject) => {
    
    // Effectuer des actions asynchrones 
    resolve('Les données sont là!');
    // reject('Il y a une erreur.')

})
.then((value) => {
    console.log(value);
})
.catch((erreur) => {
    console.log(erreur);
})


const myPromise = new Promise((resolve, reject) => {
    // Effectuer une opération asynchrone
    const randomNum = Math.random();
  
    if (randomNum < 0.5) {
      resolve('La promesse est résolue avec succès !');
    } else {
      reject('La promesse a échoué.');
    }
  });
  
  myPromise
    .then((successMessage) => {
      console.log(successMessage);
    })
    .catch((errorMessage) => {
      console.log(errorMessage);
    });

    

    // Exercice 
/* 
    Créez une fonction fléchée qui retourne "Hello World",
    Elle doit être écrite dans sa syntaxe la plus courte possible */
    const helloWorld = () => "Hello World";
    
    console.log(helloWorld());
/* 
    Créez une classe Humain qui sert & créer des objets avec deux propriétés :
    poids et taille */
    class Humain {
       
        constructor(poids, taille) {
            this.poids = poids;
            this.taille = taille;
        } 
    } 

    const John = new Humain(95, 192);
    console.log(John);