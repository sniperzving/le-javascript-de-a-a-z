/* 
    1.Les méthodes.

    Une méthode est une propriété d'un objet contenant une fonction.
    On appelle une méthode en utilisant le nom de la propriété qui lui est associée.

*/


const athlete = {
    name: "Tom",
    jump: () => {
        console.log("Jump");
        console.log(this);
    }, 
    swim: function () {
        console.log("Swim");
        console.log(this);
    }, 
    run() {
        console.log("Run");
        console.log(this);
    }
}

athlete.jump();
athlete.swim();
athlete.run();
