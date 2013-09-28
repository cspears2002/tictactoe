var rd_plyer_1;
var rd_plyer_2;

function pageLoaded() {
	var boxes = document.getElementsByClassName("box");
	for (var i = 0; i < boxes.length; i++) {
		boxes[i].onclick = addXO;
	};
}

function resetGame(element){
	element.style.background = '#ff0000';

	document.getElementById("reset_popup").style.display = "block";
}

function addXO(){

	rd_plyer_1 = document.getElementById('player_1');
	rd_plyer_2 = document.getElementById('player_2');

	if (rd_plyer_1.checked && event.target.innerHTML != "O")
		event.target.innerHTML = "X";

	if (rd_plyer_2.checked && event.target.innerHTML != "X")
		event.target.innerHTML = "O";

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

	// Test columns.
	rd_plyer_1 = document.getElementById('player_1');
	rd_plyer_2 = document.getElementById('player_2');
	
	for(var c = 1; c <= 3; ++c)
	{
		if(cellArray[0][c-1] == cellArray[1][c-1]  && 
		   cellArray[1][c-1] == cellArray[2][c-1]  && 
		   cellArray[0][c-1] != "")
		{
			if (rd_plyer_1.checked) 
			{
				rd_plyer_1.style.background = "red";

			}
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
