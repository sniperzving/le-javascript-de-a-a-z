const voiture = {
  marque: "Ford",
  annee: 2009,
  couleur: "Blanche",
  rouler() {
    console.log(`Vroom ${this.marque}`);
  },
};

voiture.rouler();
console.log(voiture.hasOwnProperty("marque"));

console.log(Object.values(voiture));
console.log(Object.keys(voiture));

class Voiture {
  constructor(marque, annee, couleur, option) {
    this.marque = marque;
    this.annee = annee;
    this.couleur = couleur;
    this.option = option;
  }

  rajoutOption(nomOption) {
    this.option++;
    console.log(`Rajout de ${nomOption}, nombre d'options : ${this.option}`);
    return this;
  }

  dateSortie() {
    console.log(`Date de sortie de la ${this.marque} : ${this.annee}`);
  }
}

const maVoiture1 = new Voiture("Ford", 2009, "Blanche", 0);
const maVoiture2 = new Voiture("BMW", 2015, "Rouge", 0);
const maVoiture3 = new Voiture("Mercedes", 2012, "Noire", 0);

console.log(maVoiture1, maVoiture2, maVoiture3);

maVoiture1.dateSortie();
// Method Chaining (Chaînes de méthodes)
maVoiture1
  .rajoutOption("Toit ouvrant")
  .rajoutOption("2 portes")
  .rajoutOption("radar AV/AR");
maVoiture2.dateSortie();
maVoiture3.dateSortie();

let str = new String("abc");
console.log(str);

let newDate = new Date();
console.log(newDate);

let regex = new RegExp(/abc/, "gi");
console.log(regex);


class Moto extends Voiture {

    assurances() {
        console.log("Vous avez pris une assurance");
    }
}

const moto1 = new Moto('Suzuki', 2020, "Bleue", 0);
console.log(moto1);
moto1.assurances();
moto1
.rajoutOption('Chrome')
.rajoutOption('Freins customisés')
.rajoutOption('Gps');

console.log(Object.getPrototypeOf(moto1));


// Fonctions constructeur
function Personnage(nom, taille) {
    this.nom = nom;
    this.taille = taille;
}

Personnage.prototype.avancer = function() {
    console.log(`${this.nom} avance....`);
}

const p1 = new Personnage('Raspoutine', 190);
const p2 = new Personnage('César', 175);

p1.avancer();