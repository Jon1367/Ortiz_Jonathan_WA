window.onload = function() {
	var theCanvas = document.getElementById('Canvas1');
	if (theCanvas && theCanvas.getContext) {
	var ctx = theCanvas.getContext("2d");
	if (ctx) {
		
			ctx.fillStyle = "blue";
			ctx.fillRect(0,0,100,50);

			//Set scale factor
			ctx.scale(2,2);

			ctx.fillStyle = "red";
			ctx.fillRect(0,50,100,50);


			ctx.scale(1.5,1.5);
			ctx.fillStyle(0,50,100,50);
			ctx.fillRect(0,255,100,50);
			

						
		}
	}
}