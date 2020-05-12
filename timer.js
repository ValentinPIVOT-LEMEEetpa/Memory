//---------------------------------------------------------------------------------------------------------------

const config = {
  type: Phaser.AUTO,
  width: 1280,
  height: 720,
  backgroundColor: "#f5f5f5",
  parent: "game-container",
  pixelArt: true,

  scene: [intro, LeHUB, niveau1, niveau2, niveau3],

  physics: {
    default: "arcade",

    arcade: {
      gravity: { y: 0 },
      debug: false
    
    }
  }
};

var game = new Phaser.Game(config);




//---------------------------------------------------------------------------------------------------------------
	var time1;


    time1 = this.time.addEvent({ delay: 1000, callback: ()=>{

        rand = Phaser.Math.RND.between(1,5);
            this.popup.setVisible(true);
    }, loop: true});


//---------------------------------------------------------------------------------------------------------------
//overlap portes

function checkOverlap(spriteA, spriteB) {
   var boundsA = spriteA.getBounds();
    var boundsB = spriteB.getBounds();
    var result = Phaser.Geom.Rectangle.Intersection(boundsA, boundsB);
    return (result.width !=0 || result.height!=0 )
}



//____________________________________________________________________________________________
        // le passage des portes

        if (Phaser.Input.Keyboard.JustDown(cursors.space)) {
            if (checkOverlap(player, door1)) {
              this.scene.start("niveau1");
            } 

            if (checkOverlap(player, door2)) {
                this.scene.start("niveau2");
            } 

            if (checkOverlap(player, door3)) {

                if (compteurKey == 0){
                this.scene.start("niveau3");
                }

                else if (this.popup.setVisible(false)) {

                this.popup.setVisible(true);
                }
            }
            
            else {

                this.popup.setVisible(false);
            }
        }

//---------------------------------------------------------------------------------------------------------------



//____________________________________________________________________________________________
    //dit au code que l'on regarde le clavier

    cursors = this.input.keyboard.createCursorKeys();
    boutonFeu = this.input.keyboard.addKey('A');


    class LeHUB extends Phaser.Scene {
  constructor() {
    super({key: 'LeHUB' });
  }