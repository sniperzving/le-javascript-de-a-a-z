/* 
    1. Naming. 
    
    Sans décommenter les variables ci-dessous, devinez celles qui ont un nom non-réglementaire, c'est à dire celles qui vont provoquer une erreur lors de l'exécution de votre code par le navigateur.
    Rajoutez un commentaire à côté de chaque variable //correct ou //faux.

*/

// LET UsErNaMe = "John";
// Uncaught SyntaxError: Unexpected identifier 'UsErNaMe'
let userName = "John";

const _id = 99;

// let class = true;
// Uncaught SyntaxError: Unexpected token 'class'

const isAdult = true;

const $card = { name: "card", content: "Lorem ipsum" };

// let 1452 = 1452;
// Uncaught SyntaxError: Unexpected number

const sum41 = "music";

/* 
    2. Trouver un bon nom; 

    Essayez de trouver un bon nom à ces variables, puis déclarez-les avec ce nom et la valeur correspondante.

    A. Une let qui retourne un booléen en fonction de la présence d'un joueur en ligne.
    B. Une let qui retourne un booléen en fonction des droits d'un rôle "modérateur".
    C. Une const qui contient un tableau de nombres représentants des salaires.
    D. Une let contenant des informations sur la météo du jour.
    E. Une let qui contient la hauteur d'une page web.
    F. Une const qui contient un message d'alerte.

    Même chose pour des fonctions.

    G. Une fonction qui retourne les données d'un utilisateur
    H. Une fonction qui retourne un booléen si l'utilisateur est adulte.
    I. Une fonction qui crée un bouton
    J. Une fonction qui ajoute une animation 
*/

//A.
let isOnline = true;
//B.
let isModerator = false;
//C.
const salaries = [2450, 1850, 4712, 3254, 2000, 1578];
//D.
const currentWeather = {
  temperature: 27,
  humidity: 45,
  wind: 14,
};

// E
let scrollHeight = 4251;
// F
const alertMessage = "Vous ne pouvez pas faire ça";
// G
function getUserInfos(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

// console.log(getUserInfos("Ghiles", "CORP"));

// H
function isPersonAdult(age) {
  if (age >= 18) return true;
  else return false;
}
// I
function createButton(){}
// J
function addAnimation(){}
