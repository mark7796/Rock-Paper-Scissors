//creare una funzione, che randomicamente ritorni rock, paper o scissors//
 //creare la funzione getComputerChoice//
    //creare una variante variabile computerChoice, uguale a metodo matematico per avere come risultato o 0 o 1 o 2//
//creare switch, con argomento computerChoice//
    //caso computerChoice = 0//
        //console.log, "Rock!"//
        //break//
    //caso computerChoice = 1//
        //console.log, "Paper!"//
        //break//
    //caso computerChoice = 2//
        //console.log, "Scissors!"//
        //break//
//richiamare la funzione//



function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    switch (computerChoice) {
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