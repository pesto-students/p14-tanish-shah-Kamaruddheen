// Your solution goes here
function check(numToGuess, guessedNumber) {
    
    // If the value is empty or string, giving user a second chance
    if (isNaN(guessedNumber) || guessedNumber === "") {
        guessedNumber = prompt("Please enter a number")
    }

    // Returing true or false by comparing guessed value and value to be guessed
    // true  -> Guessed correctly
    // false -> Wrong guess
    return guessedNumber == numToGuess
}

function playGuessingGame(numToGuess, totalGuesses = 10) {
    
    let tmp = totalGuesses
    let guessedNumber = 0

    // Loops runs till the total chances are left
    while (tmp >= 1) {
        // Decreasing loop based on the total guess chances
        tmp--

        // User's first guess
        if (tmp + 1 == totalGuesses) {                       
            guessedNumber = prompt("Enter a number between 1 and 100.")
            // Checking guessed value matches and validating value
            if (check(numToGuess, guessedNumber)) return totalGuesses - tmp
        }
        // When Guessed Num is smaller value than num to be guess
        else if (guessedNumber < numToGuess) {
            guessedNumber = prompt("X is too small. Guess a larger number.")            
            // Checking guessed value matches and validating value
            if (check(numToGuess, guessedNumber)) return totalGuesses - tmp
        }
        // When Guessed Num is greater value than num to be guess            
        else if (guessedNumber > numToGuess) {
            guessedNumber = prompt("X is too large. Guess a smaller number.")            
            // Checking guessed value matches and validating value
            if(check(numToGuess, guessedNumber)) return totalGuesses - tmp
        }

        // When prompt gets cancelled
        if(guessedNumber == null) return 0
        
    }

    return 0
}

// console.log(playGuessingGame(5));
console.log(playGuessingGame(7, 3));
// console.log(playGuessingGame(5, 3));