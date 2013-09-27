function resetGame(element){
	element.style.background = '#ff0000';
}

function addXO(element){
	console.log("hello world" + element);
	
	var rd_plyer_1 = document.getElementById('player_1');
	var rd_plyer_2 = document.getElementById('player_2');

	if (rd_plyer_1.checked && element.innerHTML != "O")
		element.innerHTML = "X";

	if (rd_plyer_2.checked && element.innerHTML != "X")
		element.innerHTML = "O";
}

function changeSquaresOnClick() {
	var cellArray = [["","",""],["","",""],["","",""]];
	for (var r = 1; r <= 3 ; ++r)
	{
		for(var c = 1; c <= 3; ++c) 
		{
			var div_id = "box" + r + "_" + c;
			cellArray[r-1][c-1] = document.getElementById(div_id).innerHTML;
			//document.getElementById(div_id).onclick = addXO(div_id);
		}
	}

	// Test columns.
	for(var c = 1; c <= 3; ++c)
		if(cellArray[0][c-1] == cellArray[1][c-1]  && 
		   cellArray[1][c-1] == cellArray[2][c-1]  && 
		   cellArray[0][c-1] != "")
		{
			alert(cellArray[0][c-1] + " won in row " + c);
		}

	// Test rows.
	for(var r = 1; r <= 3; ++r)
		if(cellArray[r-1][0] == cellArray[r-1][1]  && 
		   cellArray[r-1][1] == cellArray[r-1][2]  && 
		   cellArray[r-1][0] != "")
		{
			alert(cellArray[r-1][0] + " won in row " + r);
		}
	
}
