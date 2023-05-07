/* 
    1. Un tableau multidimensionnel.

    Un tableau multidimensionnel à plusieurs niveaux.

    Exemple: 
    const couples = [["Tom","Lea"], ["Jack", "Sara"], ["Pedro", "Maria"]];

    On peut itérer à travers ce genre de tableau avec une double boucle for.
*/

const couples = [
  ["Tom", "Lea"],
  ["Jack", "Sara"],
  ["Pedro", "Maria"],
];

// Boucle for normale
for (let i = 0; i < couples.length; i++) {
  for (let j = 0; j < couples[i].length; j++) {
    console.log(couples[i][j]);
  }
}

// Boucle for...of
for (const iterator1 of couples) {
  for (const iterator2 of iterator1) {
    console.log(iterator2);
  }
}
