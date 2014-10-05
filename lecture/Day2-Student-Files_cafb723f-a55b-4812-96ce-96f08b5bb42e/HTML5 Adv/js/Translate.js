window.onload = function() {
	var theCanvas = document.getElementById('Canvas1');
	if (theCanvas && theCanvas.getContext) {
	var ctx = theCanvas.getContext("2d");
	if (ctx) {
			
			//steop styles
			ctx.fillStyle = "blue";

			//Draw rectangle
			ctx.fillRect(0,0,100,50);

			//translate the origin to the middle of the canvas
			ctx.translate(ctx.canvas.width/2,ctx.canvas.height/2);

			//draw the same rectangle
			ctx.fillRect(-50,-25,100,50);

			// How to i undo this???
			ctx.translate(0,0);

			ctx.fillStyle="red";
			ctx.fillRect(0,0,50,50);


		
						
		}
	}
}