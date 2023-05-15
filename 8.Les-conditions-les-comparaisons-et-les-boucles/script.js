// Conditions

const nb1 = 50;
const nb2 = 30;

if (nb1 === nb2) console.log("Condition vérifiée.");

const nb = 150;

if (nb === 100 && nb < 2000) {
  console.log("NB est égal à 100!");
} else if (nb > 100) {
  console.log("NB est supérieur à 100!");
} else {
  console.log("Attention! Résultat imprévu.");
}

// Boolean
const bool = false;
if (!bool) {
  console.log("Condition vérifiée!");
}

const bool1 = 0;

console.log(Boolean(bool1));

let modale = false;
modale = !modale;

console.log(modale);

// Switch
let couleur = "Blanc";

switch (couleur) {
  case "Blanc":
    console.log("Prix : 21.99€");
    break;

  case "Rouge":
    console.log("Prix : 29.99€");
    break;

  default:
    console.log(`Désolé, nous n'avons pas de ${couleur} en stock.`);
    break;
}

// Opérateur ternaire
let prix = 500;
let choix = prix > 200 ? "Premium" : "basic";
console.log(`Cet article est ${choix}`);

// Déclarations & expressions
if (prix > 500) {
  prix += 100;
}

for (let index = 0; index < 5; index++) {
  console.log(`Var index est égale à ${index}`);
}

// Exercice 4
let metreCarre = 100;

console.log(
  metreCarre > 70
    ? console.log("Grand logement.")
    : console.log("Logement petit/moyen.")
);

for (let index = 100; index >= 0; index--) {
  console.log(index);
}

// Boucle for..in
const tesla = {
  couleur: "grise",
  portes: 5,
  prix: 100000,
};

for (const prop in tesla) {
  console.log(`${prop}:${tesla[prop]}`);
}

// Boucle for..of
const tab1 = [1, 2, 3, 4, 5];
for (const iterator of tab1) {
  console.log(iterator);
}

// Boucle while
let i = 10;
while (i >= 0) {
  console.log(i);
  i--;
}

// Boucle do while
do {
  console.log(i);
  i--;
} while (i >= 0);

// Boucle infinie
let j = 0;
while (true) {
  if (j === 100) {
    break;
  } else {
    console.log(j);
    j++;
    continue; // Pas obligé
  }
}

 
// try, catch, finally
try {
  console.log("Début du test!");
  fonctionInexistante();
} catch (error) {
  console.log(`Erreur : ${error}`);
} finally {
console.log("Finally");
}


// Exercice 5
const capitales = {
  autriche: "Vienne",
  argentine : "Bueno Aires",
  estonie : "Tallinn",
  australie : "Cambera"
}

for (const key in capitales) {
  console.log(`${key}= ${capitales[key]}`);
}




const fruits = ["Fraise", "Cerise", "orange", "Citron", "Ananas"];

for (const iterator of fruits) {
  console.log(iterator);
}


const text = "Zend";

function verify(text) {
  console.log((text.indexOf("Z")!== -1)? "Alerte, le texte contient la lettre Z" : "");
}

// ou 
function verifyText(text) {
  
  for (const key of text) {
    if(key === "Z" || key === "z") {
      console.log("Alerte, le texte contient la lettre Z");
      break;
    }
  }
}


verify(text);
verifyText(text);