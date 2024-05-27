function getComputerChoice() {
    let computerValue = "";
    let x = Math.floor(Math.random() * 3);
    switch (x) {
        case 0: 
            computerValue = "rock";
            break;
        case 1: 
            computerValue = "paper";
            break;
        case 2:
            computerValue = "scissors";
            break;
    }
    return computerValue;
}

function getHumanChoice() {
    const readline = require('readline');

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('What do you choose? rock, paper or scissors?', (answer) => {
        console.log(`Your choice is: ${answer}`);

    rl.close();
    });
}

let humanScore = 0;
let computerScore = 0;
