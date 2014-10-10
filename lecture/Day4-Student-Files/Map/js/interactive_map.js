$(document).ready(function() {

	//When the form changes let's run a function

	$('#mapForm').change(function()){


		// Test with an alert

		alert($('#mapForm option:selected').val());

		//create a var to see what is acutally seledted

		var selectedContient = $('#mapForm option:seledted').val();

		//Test whic conitent is showing and show the approriate dots
		//if show all is selected tehn we show all dots

		if(selectedContient === "ALL"){


			// Use jQery transition and show all dots

			$("a.dot").slideDown(1000);




		}else{

			$('a.dot')
		}


	});

});