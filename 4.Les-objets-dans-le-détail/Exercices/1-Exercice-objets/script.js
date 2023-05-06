/* 
    1. Création d'objet.

    Créez un objet restaurant contenant une méthode fléchée waiter qui exécute un console.log("Que desirez-vous ?") lorsqu'elle est appelée.

    Créez également les propriétés theme(thème du restaurant(Japonais, Italien, Libanais, ...)) et name avec les valeurs que vous souhaitez.
*/

const restaurant = {
  theme: "Japonais",
  name: "Takachi",
  waiter: () => console.log("Que désirez-vous?"),
};

/* 
    2. Liste des props.

    Trouvez deux moyens de créer un tableau contenant toutes les props de l'objet ci-dessous.
  
*/

const dam = {
  name: "Grand Coulee Dam",
  capacity: 6.809,
  height: 168,
  length: 1592,
  volume: 9155942,
};

const arrayFromProps = Object.keys(dam);
console.log(arrayFromProps);

const arrayFromProps2 = [];
for (const prop in dam) {
  arrayFromProps2.push(prop);
}

console.log(arrayFromProps2);

/* 
      3. Copie
  
      Copiez, à l'aide du spread operator, les valeurs du tableau names dans un nouveau tableau namesCopy.
      Changez la valeur du dernier prénom du tableau names en "Tom".
  
      Sans utiliser la console, est-ce qu'il y a un problème de réfèrence, ou pas ?
  */

const names = ["Jack", "Paul", "Lucas"];

const namesCopy = [...names];

names[2] = "Tom";

console.log(names);
console.log(namesCopy);