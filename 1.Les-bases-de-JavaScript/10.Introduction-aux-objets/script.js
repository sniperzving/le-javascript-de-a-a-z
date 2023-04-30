/* 
    1. Les objets.

    Les objets sont des containers à propriétés.
    Chaque propriété est associée à une valeur.
    On parle d'une collection de clés-valeurs. (keyed collection)

*/

// Onject Litterals
const store = {
  customers: 278,
  turnover: 451200,
  employees: 3,
  rent: 3500,
};

// On accède aux valeurs grâce à deux notations, la dot et la bracket notation

// dot notation
console.log(store.customers);

// bracket notation
console.log(store["customers"]);

// On peut modifier la valeur d'une propriété
store.turnover = 999;
console.log(store.turnover);

// Imbrication d'objets

// C'est assez complexe quand on débute de s'y retrouver, pour l'instant ne vous posez pas trop de question, mais appréciez juste la syntaxe, et tentez de retrouver des valeurs et d'exécuter des fonctions.

const player = {
  spells: {
    fire() {
      return "fire";
    },
    freeze: function () {
      return "freeze";
    }
  },
  bag: [
    {
      id: 1,
      name: "bow",
      description: "deals 3 damage",
    },
    {
      id: 2,
      name: "shield",
      description: "increases armor by 5",
    },
    {
      id: 3,
      name: "healing potion",
      description: "heals 10 HP",
    }
  ]
};
console.log(player.spells.fire());
console.log(player.bag[0].name);
console.log(player.bag.find((element) => element.name === "shield"));
console.log(player.bag.find(element => element.id ===3));
