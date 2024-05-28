import readline from "node:readline/promises";

function getComputerChoice() {
    let symbol = "";
    let computerChoice = Math.floor(Math.random() * 3);
    switch (computerChoice) {
        case 0: 
            symbol = "rock";
            break;
        case 1: 
            symbol = "paper";
            break;
        case 2: 
            symbol = "scissors";
            break;
    }
    return symbol;
}




async function getHumanChoice() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    const scelta = await rl.question("What do you choose?");
    return scelta;
}

let humanScore = 0;
let computerScore = 0;

function playRound (humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("Tie!");
    } else if (humanChoice == "rock" && computerChoice == "paper") {
        console.log("You lose!");
        computerScore++;
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        console.log("You win!");
        humanScore++;
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
        console.log("You lose!");
        computerScore++;
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        console.log("You win!");
        humanScore++;
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        console.log("You win!");
        humanScore++;
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
        console.log("You lose!");
        computerScore++;
    }
}

const humanSelection = await getHumanChoice();
const computerSelection = getComputerChoice();

console.log("computer", computerSelection);
console.log("umano", humanSelection);

playRound(humanSelection, computerSelection);

process.exit();
