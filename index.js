const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');



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
    const results = document.querySelector('#results');
    if (humanChoice === computerChoice) {
        const p = document.createElement('p');
        p.textContent = "Tie!";
        results.appendChild(p);
    } else if (humanChoice == "rock" && computerChoice == "paper") {
        const p = document.createElement('p');
        p.textContent = "You lose!";
        results.appendChild(p);
        computerScore++;
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        const p = document.createElement('p');
        p.textContent = "You win!";
        results.appendChild(p);
        humanScore++;
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
        const p = document.createElement('p');
        p.textContent = "You lose!";
        results.appendChild(p);
        computerScore++;
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        const p = document.createElement('p');
        p.textContent = "You win!";
        results.appendChild(p);
        humanScore++;
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        const p = document.createElement('p');
        p.textContent = "You win!";
        results.appendChild(p);
        humanScore++;
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
        const p = document.createElement('p');
        p.textContent = "You lose!";
        results.appendChild(p);
        computerScore++;
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

