/* window.addEventListener('load', () => {
console.log("Le site est chargé!");
});
window.addEventListener('DOMContentloaded', () => {
console.log("le DOM est en train de se charger, avant les images.");
});
window.addEventListener('scroll', () => {
console.log("Tu viens de scroller!");
});
window.addEventListener('keyup', (e) => {
console.log(e);
});

document.getElementById('inp').addEventListener('input', () => {
    console.log("L'input reçoit des données!");
});

document.querySelector("form").addEventListener('submit', (e) => {
e.preventDefault();
console.log("Formulaire envoyé!");
}) */

/* const timeout = setTimeout(presentation, 2000);

clearTimeout(timeout);

function presentation() {
    console.log("Hello World!");
    
}

let compteur = 0;
const intervalId = setInterval(incremente, 1000);

function incremente() {
    compteur++;
    console.log(compteur);

    if (compteur === 10) {
        clearInterval(intervalId); // Annule l'intervalle
    }
}

console.log(compteur);
 */

/* // Les promesses
const promise1 = new Promise((resolve, reject) => {
    
    console.log("Hello async");

    resolve('les données sont arrivées');
    // reject('les données ne sont pas sont arrivées');
})

promise1.then((value) => {
    console.log(value);
}).catch((value) => {
    console.log(value);
})

console.log(promise1); */

/* // Async et Await
async function foo() {
    // Définition de la fonction asynchrone foo
    const p1 = new Promise((resolve, reject) => {
      // Création d'une nouvelle promesse p1
      setTimeout(() => resolve("Action effectuée"), 1000);
      // Simulation d'une action asynchrone qui se résout après 1 seconde
    });
  
    let resultat = await p1;
    // Attente de la résolution de la promesse p1 avec await
  
    console.log(resultat);
    // Affichage de la valeur résolue dans la console
  }
  
  foo(); // Appel de la fonction foo
  
  */

/* const liste = document.querySelector(".liste");
const btn = document.querySelector(".btn");
const xhr = new XMLHttpRequest();

btn.addEventListener("click", () => {
  console.log("Hello World!");

  // Création d'un nouvel objet XMLHttpRequest
  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
  // Configuration de la requête GET vers l'URL spécifiée
  // Le dernier paramètre à true indique que la requête sera asynchrone
  xhr.onload = function () {
    // Gestionnaire d'événement appelé lorsque la requête est terminée avec succès

    if (xhr.status === 200) {
      // Vérification du statut de la réponse (200 signifie OK)
      let response = JSON.parse(xhr.responseText);
      // Conversion de la réponse JSON en objet JavaScript
      console.log(response);
      // Affichage de la réponse dans la console

      for (let i = 0; i < response.length; i++) {
        const element = response[i];

        let newLi = document.createElement("li");
        let newCardTitle = document.createElement("h2");
        let newCardBody = document.createElement("p");

        newCardTitle.innerText = element.title;
        newCardBody.innerText = element.body;

        newLi.appendChild(newCardTitle);
        newLi.appendChild(newCardBody);

        liste.appendChild(newLi);
      }
    }
  };

  xhr.onerror = function () {
    // Gestionnaire d'événement appelé en cas d'erreur lors de la requête
    console.log("Erreur de requête");
  };

  xhr.send();
  // Envoi de la requête
});
 */
const liste = document.querySelector(".liste");
// Sélectionne l'élément HTML avec la classe "liste" et le stocke dans la variable "liste"

const btn = document.querySelector(".btn");
// Sélectionne l'élément HTML avec la classe "btn" et le stocke dans la variable "btn"

btn.addEventListener("click", () => {
  // Ajoute un gestionnaire d'événement au clic sur le bouton

  console.log("Hello World!");
  // Affiche "Hello World!" dans la console lorsque le bouton est cliqué

  fetch("https://jsonplaceholder.typicode.com/posts")
    // Effectue une requête GET vers l'URL spécifiée
    .then((response) => response.json())
    // Convertit la réponse en un objet JavaScript en extrayant les données JSON
    .then((data) => {
      // Fonction de rappel exécutée lorsque la promesse est résolue avec les données

      console.log(data);
      // Affiche les données récupérées dans la console

      for (let i = 0; i < data.length; i++) {
        // Parcourt les éléments du tableau de données

        const element = data[i];

        let newLi = document.createElement("li");
        // Crée un nouvel élément <li>

        let newCardTitle = document.createElement("h2");
        // Crée un nouvel élément <h2>

        let newCardBody = document.createElement("p");
        // Crée un nouvel élément <p>

        newCardTitle.innerText = element.title;
        // Définit le contenu textuel du titre avec la valeur de la propriété "title" de l'élément de données

        newCardBody.innerText = element.body;
        // Définit le contenu textuel du corps avec la valeur de la propriété "body" de l'élément de données

        newLi.appendChild(newCardTitle);
        // Ajoute le titre en tant qu'enfant de l'élément <li>

        newLi.appendChild(newCardBody);
        // Ajoute le corps en tant qu'enfant de l'élément <li>

        liste.appendChild(newLi);
        // Ajoute l'élément <li> à la liste
      }
    })
    .catch((error) => {
      // Fonction de rappel exécutée en cas d'erreur lors de la requête

      console.log("Erreur de requête:", error);
      // Affiche un message d'erreur dans la console
    });
});

/* function myFunction() {
  return new Promise((resolve, reject) => {
    // Logique de la fonction
    // Résoudre ou rejeter la promesse en fonction du résultat
  });
}

// Vérifier si la fonction renvoie une promesse
const result = myFunction();

if (result instanceof Promise) {
  console.log("La fonction renvoie une promesse");
} else {
  console.log("La fonction ne renvoie pas une promesse");
}
 */
