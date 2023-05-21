"use strict";

// Code JavaScript en mode strict
// Les règles strictes sont appliquées ici

// variable globale
let foo = "abc";

console.log(foo);

if (true) {
    console.log(foo);
}

function faa(params) {
    // variable locale
    let bar = 3;
    
    if (true) {
        let lorem = "lorem";
        console.log(lorem);
  }
  
  console.log(bar);
  
}


faa();



const boo = function(params) {
    console.log("Hello World");
}

console.log(boo());


console.log(window);


// this 
const myObj = {
    prenom: "Ghiles",
    presentation: function () {
        console.log(this.prenom);
    }
}


myObj.presentation();

// function too() {
//     console.log(this);
// }

// too();

const btn = document.querySelector("h1");
btn.textContent = "Salut monde!";
// console.log(btn);

const btn2 = document.querySelector("button");
btn2.addEventListener('click', function () {
    console.log(this);
});