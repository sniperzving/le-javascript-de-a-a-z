/* 
    1. Fonction d'ordre supérieur.

    Les fonctions d'ordre supérieur sont des fonctions qui vont soit recevoir une fonction callback en argument soit retourner une fonction, ou les deux à la fois !

    Cela ouvre la voie à de nombreuses solutions et à une plus grande fléxibilité.
*/


function operation(a, b, operator) {
    return operator(a, b);
  }
  
  function add(a, b) {
    return a + b;
  }
  
  let result = operation(2, 3, add); // Renvoie 5
  console.log(result);




// codons une fonction .filter() personnalisée


const salaries = [1200,5000,4000,2500,3450,1800]

function customFilter(arr, callback) {
    
    const filteredArray = []; 

    for(const value of arr) {

        if(callback(value)) {
            filteredArray.push(value);
        }
    }
return filteredArray;
}

console.log(customFilter(salaries, salary => salary > 1000));
console.log(customFilter(salaries, salary => salary > 3000));


const countries = [
    {
        name: "Japan",
        gdp: 4941
    },
    {
        name: "Germany",
        gdp: 4260
    },
    {
        name: "South Korea",
        gdp: 1811
    },
    {
        name: "India",
        gdp: 3176
    },
    {
        name: "Canada",
        gdp: 1988
    },
]

console.log(customFilter(countries, country => country.gdp > 400));

// Exemple avec un composant d'ordre supérieur

export default function Private() {
    // On exécute useContext pour savoir si l'utilisateur est connecté.
    const {currentUser} = useContext(UserContext)
  
    // Si il n'est pas connecté, on retourne à la page d'accueil.
    // <Navigate />, in fine, est une fonction. 
    if(!currentUser) {
      return <Navigate to="/" />
    }
  
    // Sinon on les emmène vers une page privé.
    // <Outlet />, in fine, est une fonction. 
    return (
      <div className="container">
        <Outlet />
      </div>
    )
  }