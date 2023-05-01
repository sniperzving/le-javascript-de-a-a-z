/* 
    1. Fonction pure.

    Une fonction pure a deux caractéristiques :

    A. Elle retourne toujours la même chose en fonction des mêmes paramètres.
    B. Elle n'utilise aucune valeur en dehors de sa portée et n'a pas d'effets secondaires en dehors de son bloc.

*/

// fonction pure
function addPure(a, b) {
  return a + b;
}

console.log(addPure(2, 2));

let total = 0;

//  fonction non pure car elle modifie total qui est en dehors de  son champ lexical
function addNonPure(a, b) {
  total = a + b;
  return total;
}

console.log(addNonPure(2, 2));



// addPure
function getFinalPricePure(rawPrice, VAT) {
    
    return rawPrice * (100 + VAT) / 100;
}

console.log(getFinalPricePure(110, 20));
// impure 

let VAT = 20;
function getFinalPriceNonPure(rawPrice) {
    
    return rawPrice * (100 + VAT) / 100;
}

console.log(getFinalPriceNonPure(110));


// Impure
function getViewportWidth() {
    return window.innerWidth;
}

console.log(getViewportWidth());