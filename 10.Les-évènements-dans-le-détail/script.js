const btn = document.querySelector("button:nth-of-type(1)");

btn.addEventListener("click", foo);

function foo(e) {
    // console.log("Hello world!");
    console.log(e.key);
}

btn.removeEventListener("click", foo);


// btn.addEventListener('mouseover', (e) => {
//     console.log(e);
// })


btn.addEventListener('keydown', (e) => {
    console.log(e.key);
})


window.addEventListener('load', () => {
    console.log("Tout a bien chargé!");
})


const inp = document.querySelector('input');
inp.textContent = "Salut";
inp.addEventListener('input', (e) => {
console.log(e.data);
})

// Propagartion des évènements 
const btn2 = document.querySelector("button:nth-of-type(2)");


let i = 0;
btn2.addEventListener('click', (e) => {
e.stopPropagation();
console.log(`${i}`);
i++;
});


document.body.addEventListener('click', () => {
    console.log("Event BODY");
});


const form1 = document.querySelector("form:nth-of-type(1)");


form1.addEventListener('submit', (e) => {
    e.preventDefault();

});

// Exercice 6

// Changer la couleur du cercle en crimson

// Changer la couleur du carre en violet

const cercle = document.querySelector('.cercle');
const carre = document.querySelector(".carre");

// get Randomized color
function getRandomColor() {
    const colors = [
        "red",
        "blue",
        "green",
        "yellow",
        "orange",
        "purple",
        "pink",
        "cyan",
        "magenta",
        "brown",
        "teal",
        "lime",
        "navy",
        "olive",
        "silver",
        "maroon",
        "aqua",
        "fuchsia",
        "indigo",
        "gold"
      ]; 
    let randomIndex = Math.floor(Math.random() * colors.length);
    let randomColor = colors[randomIndex];
    return randomColor;
  }

cercle.addEventListener('mouseenter', () => {
    cercle.style.backgroundColor = getRandomColor();
});


carre.addEventListener('mouseenter', () => {
    carre.style.backgroundColor = getRandomColor();
});

document.addEventListener('click', (e) => {
    console.log(`Pos X : ${e.clientX}, Pos Y : ${e.clientY}`);
})