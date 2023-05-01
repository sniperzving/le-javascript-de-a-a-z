/* 
    1. Les fonctions fléchées.

    Apparues en 2015, elles sont plus concises et pratiques dans certains cas, mais moins lisibles dans d'autres.
    Elles ont également quelques différences de fonctionnement avec les fonctions classiques.
    Il ne faut pas les opposer, mais les utiliser judicieusement, en fonction de leurs caractéristiques.

*/

/* function getSquareArea(side) {
  return side * side;
}
console.log(getSquareArea(12)); */

const getSquareArea = (side) => side * side;

console.log(getSquareArea(2));


[1, 2, 3].forEach(item => console.log(item));
[1, 2, 3].forEach( function (item) {
    return console.log(item);
});


