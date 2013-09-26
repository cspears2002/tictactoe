function addXO(element){
	//console.log(element)
	var radios = document.getElementsByName('player');

	if (radios.value == "player_1")
		element.innerHTML = "X";
	else if (radios.value = "player_2")
		element.innerHTML = "O";
	else
		element.innerHTML = "There can only be one.";
}