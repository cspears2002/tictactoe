function addXO(element){
	//console.log(element)
	var rd_plyer_1 = document.getElementById('player_1');
	var rd_plyer_2 = document.getElementById('player_2');

	if (rd_plyer_1.checked)
		element.innerHTML = "X";

	if (rd_plyer_2.checked)
		element.innerHTML = "O";
}