preload(){
	//tu mets tes images ici (logique)
}

create(){
	let nom1 = une image (avec son emplecement)
	let nom2 = une autre image (avec son emplecement) //peut servir pour montre ta selection par exemple

	nom1.setInteractive();
	nom1.on("pointerover",()=>{
			nom2.setVisible(true);
			nom2.x = nom1.x - 125;
			nom2.y = nom1.y;
		})
		nom1.on("pointerout",()=>{
			nom2.setVisible(false);
		})
		nom1.on("pointerup",()=>{
			this.scene.start('')
		})
}