$(document).on('ready',function(){

	
	var phrases=["i like pie","It is Friday", "I'm starving"];

	$('h2').append(phrases[Math.floor((Math.random() * phrases.length) + 0)]);


	
	

//=====================PHRASE CHANGE ON BUTTON CLICK================

	//when you click the button it changes the phrase
	$('.js-change-phrase').on('click',function(){

		//clears the h2 container before appending a new phrase
		$('h2').empty();


		//appends into the html a random element in the array
		$('h2').append(phrases[Math.floor((Math.random() * phrases.length) + 0)]);

	});

//===========================PHRASE INPUT===========================

	$('.js-input').on("hover", function(){
		$('.js-input').on("submit", function(event){
		event.preventDefault;
		});	

		$('#new-phrase').keypress(function(e){ 

				
		    if(e.which == 13) {

		        $('h2').empty();

			var input= $('#new-phrase').val();

			phrases.push(input);

			$('h2').append(input);

			console.log(phrases);
		    };

		});
	});

//==================================================================
});