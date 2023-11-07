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

	// Resetting Computer Move Timeout's
	clearTimeout(computerMoveTimeout)
	computerMoveTimeout = 0

	for (let button of getGameBoardButtons()) {
		// Resetting property to all button
		button.innerHTML = ""
		button.disabled = false
		button.className = ""
	}

	// Initiating player's turn as True so that player can start first in New Game
	playerTurn = true
	document.getElementById("turnInfo").innerHTML = "Your turn" // Changing status in frontend
}

function boardButtonClicked(button) {
	// TODO: Complete the function

	if (playerTurn) {
		// Applying property to 'X' button
		button.innerHTML = "X"
		button.className = "x"
		button.disabled = true

		// Switch back to the computer's turn
		switchTurn()
	}
	
}

function switchTurn() {
	// TODO: Complete the function		
	let gameStatusValue = checkForWinner() // Checking game status 
	console.log("Game status : " + checkForWinner());

	// Checking game is over or not
	if (gameStatusValue === 1) {

		// After player taken their turn, now making computer to play
		if (playerTurn) {
			// Delaying 1000 milliseconds to make player think like computer is taking so much
			computerMoveTimeout = setTimeout(makeComputerMove, 1000) 					
		}

		// Toggle playerTurn's value from false to true or from true to false
		playerTurn = !playerTurn

		// Changing status in frontend based on Boolean Value
		document.getElementById("turnInfo").innerHTML = playerTurn ? "Your turn" : "Computer's turn"

	} else {
		// To prevent the user from being able to place an X after the game is over
		playerTurn = false

		// Checking who won the game or is it a draw
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
			
			// Other than 2, 3, 4 value - switch statement should break
			default:
				break;
		}
	}
}

function makeComputerMove() {
	// TODO: Complete the function

	let button = getGameBoardButtons() // list of all button elements
	let random_button = Math.floor(Math.random() * 9) // generating random number btw 0 to 9
	console.log("Random number : " + random_button)

	// Checking button element already has value or not
	while (button[random_button].innerHTML !== "") {
		console.log("Exsiting element : " + button[random_button].innerHTML)

		// If button has value, looping again with new random number
		random_button = Math.floor(Math.random() * 9) // generating random number btw 0 to 9
	}

	if (button[random_button].innerHTML === "") {
		console.log("Button going to be changed : ", button[random_button])
		
		// Applying property to 'O' button
		button[random_button].innerHTML = "O"
		button[random_button].className = "o"
		button[random_button].disabled = true
	}
	
	// switch back to the player's turn
	switchTurn()
}