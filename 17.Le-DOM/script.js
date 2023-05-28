const premierTitre = document.getElementsByClassName("premier-titre");
// console.log(premierTitre);

const premierTitre1 = document.querySelector(".premier-titre");
premierTitre1.style.background = "rgb(255, 0, 0)";
console.log(premierTitre1);
premierTitre1.innerText = "Hello world depuis JS"

const premierId = document.getElementById("premier-id");
console.log(premierId);

const titreNu1 = document.querySelector(".premier-titre");
const titreNu2 = document.querySelector("#premier-id");

console.log(titreNu1, titreNu2);

const allItems = document.querySelectorAll(".item-liste");
console.log(allItems);

const liste = document.querySelector("ul");
console.log(liste.childNodes);
console.log(liste.parentNode);
console.log(liste.parentElement);


const parent = document.getElementById('parent');

const parent2 = document.querySelector('#parent');
parent2.innerHTML = '<p> salut</p>';


const i2 = document.querySelector(".i2");
console.log(i2.nextSibling);
console.log(i2.nextElementSibling);

const child = parent.firstChild;
console.log(child); // Renvoie le premier nœud enfant (texte) : "Texte avant l'enfant"

const childNodes = parent.childNodes;
console.log(childNodes); // Renvoie une NodeList contenant tous les nœuds enfants (texte, span, texte, span, texte)


