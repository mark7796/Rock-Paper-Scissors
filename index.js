function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    switch (computerChoice) {
        case 0: 
            console.log("rock");
            break;
        case 1: 
            console.log("paper");
            break;
        case 2: 
            console.log("scissors");
            break;
    }
}

function getHumanChoice() {
    const readline = require("readline").createInterface({
        input: process.stdin,
        output: process.stout,
    });
    readline.question("What do you choose? rock, paper or scissors?"), humanChoice => {
        console.log(`${humanChoice}`);
        readline.close();
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound (humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        console.log("Tie!");
    } else if (humanChoice == "rock" && computerChoice == "paper") {
        console.log("You lose!");
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        console.log("You win!");
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
        console.log("You lose!");
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        console.log("You win!");
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        console.log("You win!");
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
        console.log("You lose!");
    }
}

const computerSelection = getComputerChoice();
const humanSelection = getHumanChoice();

playRound(humanSelection, computerSelection);
