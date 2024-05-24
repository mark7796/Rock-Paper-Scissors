function getComputerChoice() {
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
}

getComputerChoice();
console.log(getComputerChoice());

function getHumanChoice() {
    const readline = require("readline").createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    readline.question("What do you choice?", humanChoice => {
        console.log(`Ok, ${humanChoice}!`);
        readline.close();
    });
}

getHumanChoice();
console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    //make humanChoice parameter case-insensitive//
        //metodo da trovare//
    let humanChoiceIns = humanSelection.toLowerCase();
    //console.log a string value representing the round winner//
        //creare una variante variabile winner uguale ""//
        //creare uno swtich, con la logica del gioco//
            //se human vince il valore di winner diventa H, se vince computer, il valore di winner diventa C//
    if (humanChoiceIns == "Rock" && computerChoice == "Rock") {
        console.log("Tie!");
    } else if (humanChoiceIns == "Rock" && computerChoice == "Paper") {
        console.log("You lose! Paper beats Rock")
        computerScore++;
    } else if (humanChoiceIns == "Rock" && computerChoice == "Scissors") {
        console.log("You win!");
        humanScore++;
    } else if (humanChoiceIns == "Paper" && computerChoice == "Rock") {
        console.log("You win!");
        humanScore++;
    } else if (humanChoiceIns == "Paper" && computerChoice == "Paper") {
        console.log("Tie!");
    } else if (humanChoiceIns == "Paper" && computerChoice == "Scissors") {
        console.log("You lose! Scissors beat Paper");
        computerScore++;
    } else if (humanChoiceIns == "Scissors" && computerChoice == "Rock") {
        console.log("You lose! Rock beats Scissors");
       computerScore++;
    } else if (humanChoiceIns == "Scissors" && computerChoice == "Paper") {
        console.log("You win!");
        humanScore++;
    } else if (humanChoiceIns == "Scissors" && computerChoice == "Scissors") {
        console.log("Tie!");
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);