//===================================================================================================================
// la déclaration de la scene avec sont nom

class niveau1 extends Phaser.Scene {
  constructor() {
    super({key: 'niveau1' });
  }

//===================================================================================================================
//chargement des assets utilisé dans la scene
  preload () {

    this.load.image('back','assets/dos-carte.png');
    this.load.image('background','assets/fond.png');

    this.load.image('as-carreau','assets/as-carreau.png');
    this.load.image('as-coeur','assets/as-coeur.png');
    this.load.image('as-trefle','assets/as-trefle.png');
    this.load.image('king-coeur','assets/king-coeur.png');
    this.load.image('king-trefle','assets/king-trefle.png');
    this.load.image('king-carreau','assets/king-carreau.png');

    this.load.image('dos-carte','assets/dos-carte.png');

  }

//===================================================================================================================
//le design de niveau et incorporation du joueur
  create () {

    //this.add.image(400,300,'background');
	var cards;

    cards = this.physics.add.staticGroup();

    cards.create(90, 110, 'as-carreau');
    cards.create(700, 110, 'as-coeur');
    cards.create(0, 0, 'as-trefle');

    cards.create(300, 110, 'king-coeur');
    cards.create(500, 110, 'king-trefle');
    cards.create(0, 0, 'king-carreau');

    cards.create(0, 0, 'coin_down_left');
    cards.create(0, 0, 'coin_down_right');


  }

//========================================================================================================================================================
//evenement en cours de jeu
  update () {


  }

}