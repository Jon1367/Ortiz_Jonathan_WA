window.onload = function() {
	var theCanvas = document.getElementById('Canvas1');
	if (theCanvas && theCanvas.getContext) {
	var ctx = theCanvas.getContext("2d");
	if (ctx) {

				//Create a varibale that holds our image
				var srcImg = document.getElementById("img1");

				//Draw the image drectly on to the canvas at the top left, normal size
				//ctx.drawImage(srcImg,0,0);


				//Draw and scale the image
				//ctx.drawImage(srcImg,50,50,250,150);
				
				//Draw a porion or slice of the source image
				//ctx.drawImage(srcImg,350,200,125,100,50,50,125,100);


				//Variable to hold our video

				//Start our video
				srcVid.play();

				setInterval(function){

					ctx.drawImage(srcVid,0,0);

				//Fps
				},16);

			//get our image into
     						
		}
	}
}