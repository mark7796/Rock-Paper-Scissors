function getComputerChoice() {
    let computerValue = Math.floor(Math.random() * 3);
    switch (computerValue) {
        case 0:
            console.log("Rock!");
            break;
        case 1: 
            console.log("Paper!");
            break;
        case 2:
            console.log("Scissors!");
            break;
    }
}

getComputerChoice();

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

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    //make humanChoice parameter case-insensitive//
        //metodo da trovare//
    let humanChoice = humanSelection.toLowerCase();
    //console.log a string value representing the round winner//
        //creare una variante variabile winner uguale ""//
        //creare uno swtich, con la logica del gioco//
            //se human vince il valore di winner diventa H, se vince computer, il valore di winner diventa C//
    
    //increment the humanScore or computerScore//
        //creare un if, basato sul valore di winner//
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);