var canvas = docoument.getElementById("canvas");
var ctz = canvas.getContext("2d");



	if(ctx){

			//Create a varibale to keep track of what frame we are on.

			//Create x & y varables - postion inside of the sporte sheet for each frame

			var x;
			var y;


			//Load our spirte sheet
			var img = new Image();
			img.src="images/doggy.png";

			// wait for the image to load

			img.onload = draw;

			// Create the draw function

			function draw(){


					//call to a request ainimation frame
					//Pass it a function that causes a infinate loop - as long as its viewable


					requestAnimationFrame(draw);

					//step up our coundt and x and y varaibles to track 
			}



	}