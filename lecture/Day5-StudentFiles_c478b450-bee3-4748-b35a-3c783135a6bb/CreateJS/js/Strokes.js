window.onload = function() {

	//Set up stage

	var stage = new createjs.Stage("canvas1");

	//create a shape

	var shape = new createjs.shape();

	//Define and setup our stroke

	shape.graphics.beginStroke("purple");

	//linear gradient stroke
	shape.graphics.beginLinearGradientStroke(["green","red"], [0,1] , 50 , 50 );

	//Radial Garadient Stroke
	shape.graphics.beginRadialGradientStroke(["black","yellow"] , [0,1] 50, 250, 0, 50 , 250 )


	//Set our stroke styles
	shape.graphics.beginStyle(10 ,"round","round");
	//short we can use numbers insteard of text
	// Caps = 0 butt, 1 round, 2 square

	//Joints 0-mitter , 1 - round 2 - bevel


	// //Daraw a quad curve
	// shape.graphics.quadraticCureveTo(25,150,255,255);


	//Draw arc
	shape.graphics.arcTo(100,50,100,500,60);


	//Draw a line segment
	//Move to our starting postion moveTo()
	shape.graphics.moveTo(25,25);



	//bezier curve
	shape.graphics.bezierCurveTo(100,50,100,200,250,250);

	//Draw a line
	shape.graphics.lineTo( 50 , 250);

	// shape.graphics.lineTo(250,25);


	// Add our shape to our stage
	stage.addChild(shape);

	//Update our stage
	stage.update();
	
}