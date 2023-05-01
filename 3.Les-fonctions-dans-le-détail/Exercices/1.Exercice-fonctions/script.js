/* 
    Exercices : Les fonctions
*/

/* 
    1. Pure ou pas.

    Écrivez une fonction pure "dividedBy10" qui sert à diviser un nombre par 10.
    Écrivez cette fonction sous la forme d'une fonction fléchée puis commentez-là et écrivez-là sous la forme d'une fonction classique.  
*/

// const dividedBy10 = number => number/10;
console.log(dividedBy10(1000));

function dividedBy10(number) {
  
  return number/10;
}


/* 
    2. this weather

    Créez une méthode getFahrenheit () permettant de retourner la température de l'objet weather ci-dessous en utilisant le mot clé this.

    Formule celsius - fahrenheit  :  (celsius * 1.8) + 32
*/

const weather = {
  city: "London",
  temp: 16,
  getFahrenheit: function() {
    return (this.temp * 1.8) + 32;
  } 
}

console.log(weather.getFahrenheit());



/* 
  3. Ordre supérieur.

  Écrivez une fonction d'ordre supérieur "areFromNationality" permettant de tester si toutes les personnes d'un groupe sont d'une certaine nationnalité.
  Cette fonction retournera true ou false.
  On doit pouvoir réutiliser la même fonction pour tester autant de nationalités qu'on veut.
*/

const travelers = [
{
  name: "Jean",
  nationality: "FR"
},
{
  name: "Victor",
  nationality: "FR"
},
{
  name: "Paul",
  nationality: "FR"
},
{
  name: "Jack",
  nationality: "EN"
},
{
  name: "Giulia",
  nationality: "IT"
},
]


function areFromNationality(arr, callback) {
  
  for(const traveler of arr)

    if(!callback(traveler)) {
      return false;
    } 
    return true;
}

console.log(areFromNationality(travelers, traveler => traveler.nationality === "FR"));
console.log(areFromNationality(travelers, traveler => traveler.nationality === "IT"));
console.log(areFromNationality(travelers, traveler => traveler.nationality === "EN"));




const numbers = [1, 2, 3, 4, 5];

const areAllEven = numbers.every(num => num % 2 === 0);

console.log(areAllEven); // Renvoie false, car 1 n'est pas pair


const numbers2 = [1, 2, 3, 4, 5];

const evenNumbers = numbers2.filter(num => num % 2 === 0);

console.log(evenNumbers); // Renvoie [2, 4]


const numbers3 = [1, 2, 3, 4, 5];

const doubledNumbers = numbers3.map(num => num * 2);

console.log(doubledNumbers); // Renvoie [2, 4, 6, 8, 10]

const numbers4 = [1, 2, 3, 4, 5];

const sum = numbers4.reduce((acc, num) => acc + num, 0);

console.log(sum); // Renvoie 15