window.onload = function() {
	
			//First creat our stage for everything to be on
			// Stage is the main container for All other diaply objexts

			// Get a reference to our canbas
			var canvas = docomut.getElementById("canvas1");

			//Create ou stage varibale
			// .creatjs - is a namespace;

			var stage = new creatjs.Stage(canvas);

			// Create a blue circle

			//starrt with a new graphic
			var circleGraphic = new creatjs.Graphic();

			// Draw a circle with a radius of 50. centered at (0,0) relative to our shapes postion and rep point

			// Fill it with a blue clor;


			circleGraphic.beginFill("blue");
			circleGraphic.drawCircle(0,0,50);

			// Create a shape instance
			// Shape is displayObject class that draws the vector on our stage
			// Contain all the Method used to define our vector shapes

			var circleShape = new creatjs.Shape(circleGraphic);


			//Adjust our diaply object properties
			//Postioning transforming the objext on the stage

			circleShape.x=50;
			circleShape.y=50;
			circleShape.alpha=.5;


			// Add this shape to our stage's siaply list
			//using addChild(circleShape);

			stage.addChild(circleShape);

			// The stage is not drawn on to the canvas untill we tell the stage to update

			stage.update();

}