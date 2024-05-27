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

console.log(getComputerChoice());