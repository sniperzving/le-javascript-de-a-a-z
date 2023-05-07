let pays = {
    nom: "japon", 
    population: 100000000,
    classement: 3,
    PIB: 3779,
    myArr: [1, 2, 3, 4, 5, 6],
    myObj: {
        propa: 'abc'
    }, 
    maMethode: function() {
        console.log("hello depuis la méthode!");
    }
}

console.dir(pays.population);

pays.myArr.pop();
console.log(pays.myArr);
console.log(pays.maMethode());