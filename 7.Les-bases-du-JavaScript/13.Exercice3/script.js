// EXERCICE 3 : Tableaux, Objets, évènements,...

/* Créez un tableau avec trois valeurs à l'intérieur : 5124, true et un objet qui contient une propriété */

const tableau =  [5124, true, {prop : "ma prop"}];
console.log(tableau);

// Créez un objet avec trois propriétés
const voiture = {
    nom: "Ferrari",
    prix: 250000,
    couleur: "rouge"
}

/* Dans l'HTML, il y a un texte, rentrez cet élément dans une constante,
puis changez la couleur de son fond au clic en SecurityPolicyViolationEvent(purple) */

const titre = document.querySelector("H1");

titre.textContent = "Mon nouveau titre";

console.log(titre);

titre.addEventListener('click', changeCouleur);

function changeCouleur() {
    titre.style.backgroundColor = "purple";
}
