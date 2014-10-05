window.onload = function() {
	var theCanvas = document.getElementById('Canvas1');
	if (theCanvas && theCanvas.getContext) {
	var ctx = theCanvas.getContext("2d");
	if (ctx) {
				
				ctx.save();

				//draw a 1st rectangle
				ctx.fillStyle = "blue";
				ctx.fillRect(150,30,100,50);

				ctx.rotate(Math.PI/100)*45);

				ctx.restore();

				//draw a 2rd rectangle
				ctx.fillStyle = "red";
				ctx.fillRect(150,30,100,50);

				//translate the orgin
				ctx.translate();

				//draw a 3rd rectangle
				ctx.fillStyle = "grenn";
				ctx.fillRect(150,30,100,50);
				

				
		}
	}
}