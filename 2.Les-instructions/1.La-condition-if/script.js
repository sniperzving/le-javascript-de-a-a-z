/* 
    1. Une instruction if s'exécute si l'expression de sa condition est évaluée comme à true.
    
    Chaque valeur JavaScript est soit truthy soit falsy.

    Comme moyen mnémotechnique pour vous aider à comprendre, on peut dire qu'une valeur truthy est une valeur qui 'existe' et qu'une valeur falsy est une valeur qui 'n'existe pas'.
    
    Exemples de valeur truthy : true, "abc", 10, [1,2,3], -999, etc ...

    Toutes les valeurs falsy : undefined, null, NaN, 0, "" (chaîne vide), false.
*/

const nb1 = 200;
const nb2 = 400;

if(nb1 < nb2)
console.log("Condition true, instructionb exécutée");


if("abc") {
    console.log("Test");
}

if(-999) {
    console.log("Test");
}

let isLogged = false;
if(isLogged || 10 === 10) {
    console.log("Logged");
}
