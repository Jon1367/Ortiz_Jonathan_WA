window.onload = function() {
	var theCanvas = document.getElementById('Canvas1');
	if (theCanvas && theCanvas.getContext) {
	var ctx = theCanvas.getContext("2d");
	if (ctx) {
				
				var patImg = new Image();

				//wait for the image to load into memory

				patImg.onload = function(){

					ctx.fillStyle = ctx.createPattern(patImg,"repeat");

					//Create our rect 
					ctx.fillRect(0,0,ctx.canvas.width,ctx.canvas.height);

				}
				
				//soure our image
				patImg.src="images/desert_desc_bug.gif";

				//Create a pattern on another canvas use it on main canvas

				var	patCanvas = document.getElementById("patCan");
				var patCtx = patCanvas.getContext("2d");


				if(patCtx){

					//Draw a line in our pattern canvas

					//set your styles
					patCtx.strokeStyle="red";
					patCtx.lineWidth = 2;

					//Draw the line

					patCtx.beginPath();

					patCtx.moveTo(0,0);
					patCtx.lineTo(25,25);
					patCtx.stroke();

					//Use our pattern canvas in our main canvas

					//Creat our pattern stroke

					var strokePat=ctx.createPattern(patCanvas,"repeat");

					//Set Style to our stroke patern
					ctx.strokeStyle="strokePat";

					ctx.lineWidth=25;

					ctx.strokeRect(50,50,200,200);

				}
		}
	}
}