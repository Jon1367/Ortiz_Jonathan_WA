window.onload = function() {
	
	//Create our Stage

	var stage = new createjs.Stage("canvas1");


	//lets draw a rectangel
	//Create a new Shape

	var rect1 = new createjs.Shape();

	//Setup our fill
	rect1.graphics.beginfill("purple");

	//Name hex code, rgb, rgba, hsla
	rect1.graphics.beginfill(createjs.Graphics.getRGB(162,216,255));

	// Quick way
	rect1.graphics.beginfill("rgb(60,60,60)");


	//Deaw rectangle
	rect1.graphics.rect(50,50,100,100);


	rect1.graphics.beginfill(createjs.Graphics.getHisl(120,100,50,.5));


	//Linear Gradients
	rect1.graphics.beginLinearGradientFill("yellow","red"), (0,1);


	//Radial gradients

	rect1.graphics.beginRadialGradientFill(["yellow","red"], [0,1]);


	


	//Add to stage
	stage.addChild(rect1);

	//Update our stage

	stage.addChild(rect1);

	//Update our stage
	stage.update();


			
}