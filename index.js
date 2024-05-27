let getComputerChoice = () => {
    let computerValue = Math.floor(Math.random() * 3);
    switch (computerValue) {
        case 0:
            console.log("Rock");
            break;
        case 1: 
            console.log("Paper");
            break;
        case 2:
            console.log("Scissors");
            break;
    }
    return console.log(computerValue);
}

//console.log(getComputerChoice());//

let getHumanChoice =() => {
    const readline = require("readline").createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    readline.question("What do you choice?", humanChoice => {
        console.log(`Ok, ${humanChoice}!`);
        readline.close();
    });
}

//console.log(getHumanChoice());//

let humanScore = 0;
let computerScore = 0;

let playRound = (humanChoice, computerChoice) => {
        if (humanChoice == "Rock" && computerChoice == "Rock") {
        console.log("Tie!");
    } else if (humanChoice == "Rock" && computerChoice == "Paper") {
        console.log("You lose! Paper beats Rock")
        computerScore++;
    } else if (humanChoice == "Rock" && computerChoice == "Scissors") {
        console.log("You win!");
        humanScore++;
    } else if (humanChoice == "Paper" && computerChoice == "Rock") {
        console.log("You win!");
        humanScore++;
    } else if (humanChoice == "Paper" && computerChoice == "Paper") {
        console.log("Tie!");
    } else if (humanChoice == "Paper" && computerChoice == "Scissors") {
        console.log("You lose! Scissors beat Paper");
        computerScore++;
    } else if (humanChoice == "Scissors" && computerChoice == "Rock") {
        console.log("You lose! Rock beats Scissors");
       computerScore++;
    } else if (humanChoice == "Scissors" && computerChoice == "Paper") {
        console.log("You win!");
        humanScore++;
    } else if (humanChoice == "Scissors" && computerChoice == "Scissors") {
        console.log("Tie!");
    }
}

playRound(getHumanChoice(), getComputerChoice());

