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




function getHumanChoice() {
   let scelta = prompt("What do you choice?");
   return scelta;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
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





function playGame() {
    for (i = 1; i <= 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log('Round ' + i);
        console.log('Computer choose ' + computerSelection);
        playRound(humanSelection, computerSelection);
    }
    if (humanScore < computerScore) {
        console.log('Computer wins with a score of ' + computerScore + "-" + humanScore + "...");
    } else if (humanScore > computerScore) {
        console.log('You win with a score of ' + humanScore + "-" + computerScore + "!");
    } else {
        console.log("Tie by " + humanScore + "-" + computerScore + ".");
    }
}

playGame();

