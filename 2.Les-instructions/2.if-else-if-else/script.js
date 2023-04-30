/* 
    1. Parfois, on a besoin d'enchaîner plusieurs conditions afin d'exécuter différentes actions en fonction de différentes conditions;

    On peut donc utiliser les instructions else if(condition){} ou else{}.

    else if(condition){}  est utilisée lorsqu'on a besoin de vérifier une autre condition.

    else{} est utilisé à la fin d'une suite de conditions, lorsqu'on veut exécuter une instruction pour l'ensemble des conditions restantes.
*/

let age = 18;

if (age >= 18) console.log("majeur");
else if (age >= 0 && age < 18) console.log("Mineur");

let role = "Admin";
if (role === "Admin") {
  console.log("Admin");
} else if (role === "Employee") {
  console.log("Employee");
} else if (role === "Moderator") {
  console.log("Moderator");
}

let isLogged = false;
if (isLogged) console.log("Welcome");
else console.log("Access denied");
