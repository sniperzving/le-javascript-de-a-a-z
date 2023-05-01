/* 
    1. Les fonctions auto-invoquées.

    Assez rarement utilisées, ce sont des fonctions qui s'exécutent dès qu'elles sont définies.

*/

// Syntaxe de base 

(function () {
    console.log("Hello world");
})()

// Avant l'arrivée de let & const qui règlent les problèmes de portée, on pouvait déclarer des var dans des IIFEE pour éviter de polluer la portée globale.

var banana = "Test" // peut être atteint depuis window
let apple = "Apple" // Ne  peut pas être atteint depuis window

console.log(window);