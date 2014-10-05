window.onload = function() {
	var theCanvas = document.getElementById('Canvas1');
	if (theCanvas && theCanvas.getContext) {
	var ctx = theCanvas.getContext("2d");
	if (ctx) {
		
			// Let's create an array of all our compositing methods
			var compMethods = ["source-over", "source-in", "source-out", "source-atop", "lighter", "xor", "destination-over", "destination-in", "destination-out", "destination-atop", "darker", "copy" ];
			
			// array of rectangles
			var rects=[
			{ x:20,y:20,width:75,height:75},
			{x:40,y:50,width:75,height:75}

			];
			
			var method = 0;

			for(var i = 0; i < compMethods.length;i++){

				//Setup each canvas
				var cvsName = "Canvas"+(i+1);
				var curCanvas = document.getElementById(cvsName);
				var curCtx = curCanvas.getContext("2d");

				if(curCtx){

					//step sytles
					curCtx.fillStyle="red";

					//draw our 1st rect
					curCtx.fillRect(rects[0].x,rects[0].y,rects[0].width,rects[0].height);

					//set our global conposeite  opperation
					curCtx.globalCompositeoperation = compMethods[method++];
					curCtx.fillStyle="blue";
					//draw our 2nd rect
					curCtx.fillRect(rects[1].x,rects[1].y,rects[1].width,rects[1].height);




				}

			}		
											
		}
	}
}