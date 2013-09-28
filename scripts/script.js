function resetGame(element){
	element.style.background = '#ff0000';

	document.getElementById("reset_popup").style.display = "block";
}

function addXO(element){
	console.log("hello world" + element);
	
	var rd_plyer_1 = document.getElementById('player_1');
	var rd_plyer_2 = document.getElementById('player_2');

	if (rd_plyer_1.checked && element.innerHTML != "O")
		element.innerHTML = "X";

	if (rd_plyer_2.checked && element.innerHTML != "X")
		element.innerHTML = "O";

	identifyWin();
}

function identifyWin() {
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

	win_popup = document.getElementById("win_popup");

	// Test columns.
	for(var c = 1; c <= 3; ++c)
	{
		if(cellArray[0][c-1] == cellArray[1][c-1]  && 
		   cellArray[1][c-1] == cellArray[2][c-1]  && 
		   cellArray[0][c-1] != "")
		{
			win_popup.innerHTML = cellArray[0][c-1] + " won in column " + c;
			win_popup.style.display = "block";
		}
	}

	// Test rows.
	for(var r = 1; r <= 3; ++r)
	{
		if(cellArray[r-1][0] == cellArray[r-1][1]  && 
		   cellArray[r-1][1] == cellArray[r-1][2]  && 
		   cellArray[r-1][0] != "")
		{
			win_popup.innerHTML = cellArray[r-1][0] + " won in row " + r;
			win_popup.style.display = "block";
		}
	}
}
