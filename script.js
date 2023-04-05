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

function play(playerSelection, computerSelection) {
    let player = playerSelection.toUpperCase();
    let computer = computerSelection.toUpperCase();
    if (player == "ROCK") {
        if (computer == "ROCK") {
            return "It's a tie!";
        }
        if (computer == "PAPER") {
            return "You Lose! Paper beats Rock";
        }
        if (computer == "SCISSORS") {
            return "You Win! Rock beats Scissors";
        }
    }
    if (player == "PAPER") {
        if (computer == "PAPER") {
            return "It's a tie!";
        }
        if (computer == "ROCK") {
            return "You Win! Paper beats Rock";
        }
        if (computer == "SCISSORS") {
            return "You Lose! Scissors beats Paper";
        }
    }
    if (player == "SCISSORS") {
        if (computer == "SCISSORS") {
            return "It's a tie!";
        }
        if (computer == "ROCK") {
            return "You Lose! Rock beats Scissors";
        }
        if (computer == "PAPER") {
            return "You Win! Scissors beats Paper";
        }
    }
}

// main
let compChoice = getComputerChoice();
console.log(compChoice);
console.log(play("roCK", compChoice))
