/* 
  1. Météo.

  Écrivez une fonction weatherFeeling() qui reçoit une température et qui doit console.log() s'il fait froid, doux, ou chaud.
  Il fait froid en-dessous de 10 degrés inclus.
  Il fait doux de 10 degrés non inclus à 20 degrés inclus.
  Il fait chaud au-dessus de 20 degrés non inclus.

  Testez votre fonction avec les valeurs : -15,42,5.
*/

function weatherFeeling(temp) {

}

weatherFeeling(-15)
weatherFeeling(42)
weatherFeeling(5)


/* 
  2. Champions.

  Créez une fonction howGoodIsThatPlayer() qui analyse le nombre de trophées d'un joueur de football et qui retourne son niveau en fonction de ses résultats.

  Si un joueur a au moins remporté une coupe du monde, deux ballons d'or et 3 trophées de champion d'une ligue nationale, loggez "Niveau exceptionnel".

  Si un joueur a au moins un ballon d'or et au moins un trophée de coupe nationale, loggez "Bon niveau".

  Enfin, si un joueur n'a pas assez de trophées pour apparaître dans les conditions ci-dessus, loggez "Niveau médiore".

  Testez votre fonction à l'aide des trois objets ci-dessous.
*/

const player1 = {
  name: "Paul",
  goldenBall: 0,
  worldCup: 1,
  nationalCup: 0
}
const player2 = {
  name: "Max",
  goldenBall: 3,
  worldCup: 3,
  nationalCup: 4
}
const player3 = {
  name: "Adam",
  goldenBall: 0,
  worldCup: 0,
  nationalCup: 1
}


function howGoodIsThatPlayer(player){

}
howGoodIsThatPlayer(player1)
howGoodIsThatPlayer(player2)
howGoodIsThatPlayer(player3)