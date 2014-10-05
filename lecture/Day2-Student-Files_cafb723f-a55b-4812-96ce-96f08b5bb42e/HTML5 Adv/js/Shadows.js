window.onload = function() {
	var theCanvas = document.getElementById('Canvas1');
	if (theCanvas && theCanvas.getContext) {
	var ctx = theCanvas.getContext("2d");
	if (ctx) {


				var originShadowColor = ctx.shadowColor
				
				ctx.shadowColor="#000000";
				ctx.shadowOffsetX=10;
				ctx.shadowOffsetY = 10;
				ctx.shadowBlur = 10;


				//Styles 

				ctx.fillStyle = "rgba(0,0,255,1)";
				ctx.fillRect(20,20,200,100);

				//creat text on our page

				var theString = "Drawing Text on a canvas";

				//Style our text
				ctx.font = "25pt Georgia";

				//Daw our Text
				ctx.fillText(theString,250,75);
						
				ctx.fillStyle = "green";
				ctx.fillRect(20,255,200,50);
		}
	}
}