// Global variables
let ties = 0;
let wins = 0;
let losses = 0;

// Functions
function getComputerChoice() {
    switch (Math.floor(Math.random() * 3) + 1) {
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toUpperCase();
    let computer = computerSelection.toUpperCase();
    if (player == "ROCK") {
        if (computer == "ROCK") {
            ties++;
            return "It's a tie!";
        }
        if (computer == "PAPER") {
            losses++;
            return "You Lose! Paper beats Rock";
        }
        if (computer == "SCISSORS") {
            wins++;
            return "You Win! Rock beats Scissors";
        }
    }
    if (player == "PAPER") {
        if (computer == "PAPER") {
            ties++;
            return "It's a tie!";
        }
        if (computer == "ROCK") {
            wins++;
            return "You Win! Paper beats Rock";
        }
        if (computer == "SCISSORS") {
            losses++;
            return "You Lose! Scissors beats Paper";
        }
    }
    if (player == "SCISSORS") {
        if (computer == "SCISSORS") {
            ties++;
            return "It's a tie!";
        }
        if (computer == "ROCK") {
            losses++;
            return "You Lose! Rock beats Scissors";
        }
        if (computer == "PAPER") {
            wins++;
            return "You Win! Scissors beats Paper";
        }
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerChoice = prompt("Please type either 'Rock', 'Paper', or 'Scissors'!");
        let compChoice = getComputerChoice();
        console.log(playRound(playerChoice, compChoice));
    }
    if (wins > losses) {
        console.log("You Win the game!")
    } else if (losses > wins) {
        console.log("You Lose the game!")
    } else {
        console.log("The game has resulted in an overall Tie!")
    }
}

// main
game();
