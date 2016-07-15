$(document).on('ready', function(){
	
	console.log('heeeloooo');

$('button').on('click', function(){

	$.ajax({
		type: "GET",
		url: "https://ironhack-characters.herokuapp.com/characters",
		success: showList,
		error: handleError
	});
});

});

function showList(response){

	var charactersArray = response;

	$('ul').empty();

	charactersArray.forEach(function(character){

		var html=`
		<li>
		<h2> ${character.name} </h2>
		</li>
		`;
	$('ul').append(html);
	});
}

function handleError(error){
	console.log('error = ' + error);

}