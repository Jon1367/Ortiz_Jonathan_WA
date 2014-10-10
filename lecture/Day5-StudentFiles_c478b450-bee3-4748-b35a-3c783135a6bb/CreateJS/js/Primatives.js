window.onload = function() {
	

	// Step Up stage
	var stage = new createjs.stage("canvas1");


	// Create our stage
	var shape = new createjs.Shape();


	// Setup Stroke
	shape.graphics.beginStroke("purple");
	shape.graphics.setStrokeStyle(5,1,1);


	// Draw a 5 pointed star
	shape.graphics.drawPolyStar(75,75,50,5,.5);
	shape.graphics.drawCircle(75,75,50);


	//Trinagle - 3 side
	shape.graphics.drawPolyStar(500,75,50,3,0,-90);

	//Create a red filled triangle
	shape2.graphics.beginFill("red");
	shape2.graphics.drawPolyStar(250,250,50,3,0,-90);
	stage.addChild(shape2);

	//Add interactivity to our graphics
	//Add a listener directly to our shape
	shape2.addEventListener('click',function(event){


		console.log("The red traingle is click");


	});

	

	//Add to stage and update
	stage.addChild(shape);
	stage.update();


}