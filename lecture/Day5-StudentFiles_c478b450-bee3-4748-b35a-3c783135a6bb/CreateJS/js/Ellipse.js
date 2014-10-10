window.onload = function() {
	

		//Step our Stage
		var stage = new createjs.Stage("canvas1");

		//Create shape 
		var shape = new createjs.Shape();

		//Setup our Stroke
		shape.graphics.beginStroke("purple");
		shape.graphics.setStrokeStyle(10,0,1);


		//Draw a basic circle
		shape.graphics.drawCircle(100,100,50);

		//Draw ellipse
		shape.graphics.drawEllipse(75,200,150,50);

		//Daw an arc
		// angles are in radians just like canvas ---BLAH!

		shape.graphics.beginStroke("red");
		shape.graphics.arc(100,100,75 , - , 90*Math.PI);

		//Add to stage and then update
		stage.addChild(shape);
		stage.update();



}