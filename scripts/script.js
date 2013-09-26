function addXO(element){
	//console.log(element)
	var rd_plyer_1 = document.getElementById('player_1');
	var rd_plyer_2 = document.getElementById('player_2');

	if (rd_plyer_1.checked && element.innerHTML != "O")
		element.innerHTML = "X";

	if (rd_plyer_2.checked && element.innerHTML != "X")
		element.innerHTML = "O";
}

function resetGame(element){
	element.style.background = '#ff0000';
}

function navCells() {
	for (var c = 1; c <= 3 ; ++c)
	{
		for(var r= 0; r < 3; ++r) {
			var div_id = "box" + c + "_" + r;
			alert(document.getElementById(div_id));
		};
	}
}
