// Valeurs primitives : string number boolean undefined null
let a = "abc";
let b = a;

a = "zzz";
console.log(`a = ${a}, b = ${b}`);

// Valeurs de référence : objets et tableaux

let obj1 = { str: "abc" };
let obj2 = obj1;
console.log(obj1, obj2);
obj1.str = "zzz";
console.log(obj1, obj2);

let arr1 = [1, 2, 3];
let arr2 = arr1;

arr1.push(4);
console.log(arr1, arr2);

const kitty = {
  race: "Siamois",
  poids: 3,
  couleur: "gris",
  nvObj: {
    abc: "abc",
    zzz: "zzz",
    nvnvObj: {
      ccc: "ccc",
      ddd: "ddd",
    },
  },
};

console.log(kitty["couleur"]);
console.log(kitty.couleur);

// delete kitty.poids;

console.log(kitty.poids);

console.log(kitty.nvObj.nvnvObj.ccc);
console.log(kitty["nvObj"]["nvnvObj"]["ccc"]);

const tableau = ["a", "b", "c"];

console.log(typeof tableau);
console.log(tableau.length);
console.dir(tableau);

const voiture = {
  couleur: "noire",
  marque: "peugeot",
  annee: 2007,
  myFunction: function () {
    console.log(this.annee);
  },
}

voiture.myFunction();

let newFunction = voiture.myFunction.bind(voiture);
newFunction();

const person = {
    name: "John",
    age: 30,
    greet: function () {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    },
  };
  
  const greetFunc = person.greet; // Référence à la fonction greet sans le contexte
  
  greetFunc(); // Affiche "Hello, my name is undefined and I am undefined years old."
  
  const boundGreetFunc = person.greet.bind(person); // Liaison explicite à l'objet person
  
  boundGreetFunc(); // Affiche "Hello, my name is John and I am 30 years old."
  

  const btn = document.querySelector("Button");
  console.log(btn);


const year = voiture.myFunction.bind(voiture);

btn.addEventListener('click', year);