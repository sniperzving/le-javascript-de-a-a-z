/* 
    1. En JavaScript, certaines valeurs vont être converties en valeurs d'un autre type lorsqu'on les utilise dans des opérations ou des conditions, c'est la coercition de type. (type coercion).
*/

const nb1 = 150;
const nb2 = "150";

// Egalité simple 
if(nb1 == nb2) 
console.log("Instruction exécutée");

// Egalité stricte
if(nb1 === nb2) 
console.log("Instruction exécutée");
