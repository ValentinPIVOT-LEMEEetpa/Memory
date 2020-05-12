//===================================================================================================================
// la déclaration de la scene avec sont nom

class menu extends Phaser.Scene {
  constructor() {
    super({key: 'menu' });
  }

//===================================================================================================================
//chargement des assets utilisé dans la scene
  preload () {
  	this.load.image('menu','assets/menu.png');
  	this.load.image('play','assets/bouton/PLAY.png');
  	this.load.image('quit','assets/bouton/QUIT.png');

  }

//===================================================================================================================
//le design de niveau et incorporation du joueur
  create () {

  	this.add.image(0,0,'menu').setOrigin(0);
  	let b_play = this.add.image(400,400,'play');
  	let b_quit = this.add.image(390,500,'quit');

	b_play.setInteractive();
	b_play.on("pointerover",()=>{
		//b_play.setTint(0xff0000);
		//b_play.setScale(1.5);
	})
	b_play.on("pointerout",()=>{
		b_play.setScale(1);
	})
	b_play.on("pointerup",()=>{
		this.scene.start('niveau1')
	})

	b_quit.setInteractive();
	b_quit.on("pointerover",()=>{
		b_quit.setScale(1.5);
		
	})
	b_quit.on("pointerout",()=>{
		b_quit.setScale(1);
		
	})
	b_quit.on("pointerup",()=>{
		//this.scene.start('')
		alert('Tu as quitter le jeu')
	})
  }



//========================================================================================================================================================
//evenement en cours de jeu
  update () {


  }

}