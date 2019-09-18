

var shownWins = document.getElementById("shownWins")
var shownLosses = document.getElementById("shownLosses")
var shownGuessesLeft = document.getElementById("shownGuessesLeft")
var shownGuessesSoFar = document.getElementById("shownGuessesSoFar")

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
               "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var guessed =[]               

var computerRandom = letters[Math.floor(Math.random()*letters.length)]
console.log("---------------------------------------")
console.log("Computer choice: " + computerRandom)
console.log("---------------------------------------")

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = [];

shownWins.textContent = wins;
shownLosses.textContent = losses;
shownGuessesLeft.textContent = guessesLeft;

document.onkeyup = function(event) {
var playerChoice = event.key

    if (letters.indexOf(event.key) === -1) {
        alert("Please enter only letters from the a to the z")
        console.log("Invalid Player Choice: " + event.key)
        console.log("---------------------------------------")
    }
    else {
        console.log("Player choice: " + playerChoice)
        if (guessesLeft > 0) {
            if (playerChoice === computerRandom) {
                wins = wins + 1
                shownWins.textContent = wins
                guessesLeft = 9
                shownGuessesLeft.textContent = guessesLeft
                guessesSoFar = []
                shownGuessesSoFar.textContent = guessesSoFar
                computerRandom = letters[Math.floor(Math.random()*letters.length)]
                console.log("---------------------------------------")
                console.log("New Computer choice: " + computerRandom)
                console.log("---------------------------------------")

            }
            else {
                guessesLeft = guessesLeft - 1
                shownGuessesLeft.textContent = guessesLeft
                guessesSoFar.push(" " + event.key)
                shownGuessesSoFar.textContent = guessesSoFar
            }
        }

            if (guessesLeft === 0) {
                losses = losses + 1
                shownLosses.textContent = losses
                guessesLeft = 9
                shownGuessesLeft.textContent = guessesLeft
                guessesSoFar = []
                shownGuessesSoFar.textContent = guessesSoFar
                computerRandom = letters[Math.floor(Math.random()*letters.length)]
                console.log("---------------------------------------")
                console.log("New Computer choice: " + computerRandom)
                console.log("---------------------------------------")
            }
    }
}

function refreshScore(x, y) {
    x = x + 1
    y.textContent = x
    guessesLeft = 9
    shownGuessesLeft.textContent = guessesLeft
    guessesSoFar = []
    shownGuessesSoFar.textContent = guessesSoFar
    computerRandom = letters[Math.floor(Math.random()*letters.length)]
    console.log("---------------------------------------")
    console.log("New Computer choice: " + computerRandom)
    console.log("---------------------------------------")
}
