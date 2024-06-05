const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const results = document.querySelector('#results');



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



let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        const p = document.createElement('p');
        p.textContent = "Tie!" + humanScore + "-" + computerScore;
        results.appendChild(p);
    } else if (humanChoice == "rock" && computerChoice == "paper") {
        computerScore++;
        const p = document.createElement('p');
        p.textContent = "You lose! " + humanScore + "-" + computerScore;
        results.appendChild(p);
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        humanScore++;
        const p = document.createElement('p');
        p.textContent = "You win! " + humanScore + "-" + computerScore;
        results.appendChild(p);
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
        computerScore++;
        const p = document.createElement('p');
        p.textContent = "You lose! " + humanScore + "-" + computerScore;
        results.appendChild(p);
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        humanScore++;
        const p = document.createElement('p');
        p.textContent = "You win! " + humanScore + "-" + computerScore;
        results.appendChild(p);
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        humanScore++;
        const p = document.createElement('p');
        p.textContent = "You win! " + humanScore + "-" + computerScore;
        results.appendChild(p);
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
        computerScore++;
        const p = document.createElement('p');
        p.textContent = "You lose! " + humanScore + "-" + computerScore;
        results.appendChild(p);
    }
    if (humanScore == 5) {
        const p = document.createElement('p');
        p.textContent = `You won the game with a score of ${humanScore}-${computerScore}`;
        results.appendChild(p);
    } else if (computerScore == 5) {
        const p = document.createElement('p');
        p.textContent = `You lost the game with a score of ${humanScore}-${computerScore}`;
        results.appendChild(p);
    }
}






rockBtn.addEventListener('click', () =>{
    const computerSelection = getComputerChoice();
    const humanSelection = 'rock';
    playRound(humanSelection, computerSelection);
});
paperBtn.addEventListener('click', () =>{
    const computerSelection = getComputerChoice();
    const humanSelection = 'paper';
    playRound(humanSelection, computerSelection);
});
scissorsBtn.addEventListener('click', () =>{
    const computerSelection = getComputerChoice();
    const humanSelection = 'scissors';
    playRound(humanSelection, computerSelection);
});

