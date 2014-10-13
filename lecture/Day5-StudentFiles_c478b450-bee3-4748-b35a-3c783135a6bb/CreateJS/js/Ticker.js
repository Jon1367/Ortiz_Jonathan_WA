window.onload = function() {
	
			


		// Coontrol how ofen the tick ticks
		// set the frame rate of our animations
		// Default frame tate is 20 fps


		createjs.Ticker.serFPS(30);

		// Create an event listener to her the tick
		createjs.Ticker.addEventListener("tick",ticks);

		function ticks(event){

				//make any changes that we want every frame inside of this function
				rect1.rotation += 8;

				// rect1.aplhpa -= .01;

				rect1.x++;

				rect1.y +=5;


				//stage.update();
		}
}