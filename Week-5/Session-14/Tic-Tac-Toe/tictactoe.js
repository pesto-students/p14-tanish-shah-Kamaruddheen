let playerTurn = true;
let computerMoveTimeout = 0;

const gameStatus = {
	MORE_MOVES_LEFT: 1,
	HUMAN_WINS: 2,
	COMPUTER_WINS: 3,
	DRAW_GAME: 4
};

window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
	// Setup the click event for the "New game" button
	const newBtn = document.getElementById("newGameButton");
	newBtn.addEventListener("click", newGame);

	// Create click-event handlers for each game board button
	const buttons = getGameBoardButtons();
	for (let button of buttons) {
		button.addEventListener("click", function () { boardButtonClicked(button); });
	}

	// Clear the board
	newGame();
}

// Returns an array of 9 <button> elements that make up the game board. The first 3 
// elements are the top row, the next 3 the middle row, and the last 3 the 
// bottom row. 
function getGameBoardButtons() {
	return document.querySelectorAll("#gameBoard > button");
}

function checkForWinner() {
	
	const buttons = getGameBoardButtons();

	// Ways to win
	const possibilities = [
		[0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
		[0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
		[0, 4, 8], [2, 4, 6] // diagonals
	];

	// Check for a winner first
	for (let indices of possibilities) {
		if (buttons[indices[0]].innerHTML !== "" &&
			buttons[indices[0]].innerHTML === buttons[indices[1]].innerHTML &&
			buttons[indices[1]].innerHTML === buttons[indices[2]].innerHTML) {
			
			// Found a winner
			if (buttons[indices[0]].innerHTML === "X") {
				return gameStatus.HUMAN_WINS;
			}
			else {
				return gameStatus.COMPUTER_WINS;
			}
		}
	}

	// See if any more moves are left
	for (let button of buttons) {
		if (button.innerHTML !== "X" && button.innerHTML !== "O") {
			return gameStatus.MORE_MOVES_LEFT;
		}
	}

	// If no winner and no moves left, then it's a draw
	return gameStatus.DRAW_GAME;
}

function newGame() {
	// TODO: Complete the function

	clearTimeout(computerMoveTimeout)
	setTimeout.computerMoveTimeout = 0

	for (let button of getGameBoardButtons()) {
		button.innerHTML = ""
		button.disabled = false
		button.className = ""
	}

	playerTurn = true
	document.getElementById("turnInfo").innerHTML = "Your turn"
}

function boardButtonClicked(button) {
	// TODO: Complete the function

	if (playerTurn) {
		button.target.innerHTML = "X"
		button.target.className += "x"
		button.target.disabled = true
	}

	switchTurn()
}

function switchTurn() {
	// TODO: Complete the function		
	let gameStatusValue = checkForWinner()

	if (gameStatusValue === 1) {
		// If more moves are left

		if (playerTurn) {
			// delaying 1000 milliseconds to make player think like computer is taking so much
			computerMoveTimeout = setTimeout(makeComputerMove(), 1000) 		
			playerTurn = false
			document.getElementById("turnInfo").innerHTML = "Your turn"
		} else {
			playerTurn = true
			document.getElementById("turnInfo").innerHTML = "Computer's turn"

		}				

	}
	
	if (gameStatusValue > 1) {
		// To prevent the user from being able to place an X after the game is over
		playerTurn = false

		switch (gameStatusValue) {
			case 2:
				document.getElementById("turnInfo").innerHTML = "You win!"
				break;
			
			case 3:
				document.getElementById("turnInfo").innerHTML = "Computer wins!"
				break;
			
			case 4:
				document.getElementById("turnInfo").innerHTML = "Draw game"
				break;
		
			default:
				break;
		}
	}
}

function makeComputerMove() {
	// TODO: Complete the function

	// TODO: Random generation needs to be improved

	let empty_buttons = []

	// sorting the avaialbe buttons for computer to choose randomly
	for (let button of getGameBoardButtons()) {
		if (!button.innerHTML) {
			empty_buttons.push(button)
		}
	}

	let random_button = Math.random() * 0 // 0 to 9
	
	empty_buttons[random_button].target.innerHTML = "O"
	empty_buttons[random_button].target.className = "o"
	empty_buttons[random_button].target.disabled = true	

	// switch back to the player's turn
	switchTurn()
}