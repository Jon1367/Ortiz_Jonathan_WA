window.onload = function() {
	var theCanvas = document.getElementById('Canvas1');
	if (theCanvas && theCanvas.getContext) {
	var ctx = theCanvas.getContext("2d");
	if (ctx) {
							
		//create a linear gradient

		var linGrd = ctx.createLinearGradient(20,20,220,280);

		//Add color stops

		linGrd.addColorStop(0,"#f00");  // Start with red
		linGrd.addColorStop(.5,"#00f"); // Blue at halfway
		linGrd.addColorStop(1,"#0f0");	// green end

		//create a rect and fill with gradient
		ctx.fillStyle=linGrd;
		ctx.fillRect(20,20,200,280);

		//Create a radial gradient
		var radGrd=ctx.createRadialGradient(525,150,20,525,150,100);

		//Add Color Stops

		radGrd.addColorStop(0,"#f00");
		radGrd.addColorStop(.5,"00f");
		radGrd.addColorStop(1,"0f0");

		ctx.fillStyle = radGrd;

		ctx.beginPath();
		ctx.arc(525,150,100,0, 2*Math.PI);
		ctx.fill();
	
		}
	}
}