

function getComputerChoice() {
    // Randomly return the computer choice of rock, paper, or scissors
    let choices = ["rock", "paper", "scissors"]

    return choices[Math.random() * 3]
    console.log(choices)

}

function playRound(computerSelection, playerSelection) {
    // add functionality and logic to what a round of RPS is.
    // Retrieve the player selection and the computer selection to determine a winner
    // Add win/tie/lose state and message
    // Make input case-insensitive so RoCk, rock, and ROCK are all valid answers

    return(computerSelection, playerSelection)
}
const playerSelection = "Rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound();
    }
}