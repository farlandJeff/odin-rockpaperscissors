// Computer Player
function computerPlay() {
    // Random number between 0 to 2
    let num = Math.floor(Math.random() * 3);

    // Return Rock, Paper, or Scissors depending on which number
    switch(num) {
        case 0:
            return 'rock';

        case 1:
            return 'paper';
        
        case 2:
            return 'scissors';
    }
}

// Single Round of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {
    // Changes player's selection to lower case
    // This is to make it case in-sensitive
    playerSelection = playerSelection.toLowerCase();

    // Conditionals based on if the player wins, loses, or ties
    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
    (playerSelection == 'paper' && computerSelection == 'rock') ||
    (playerSelection == 'scissors' && computerSelection == 'paper')) {
        console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
    } else if ((playerSelection == 'rock' && computerSelection == 'paper') ||
    (playerSelection == 'paper' && computerSelection == 'scissors') ||
    (playerSelection == 'scissors' && computerSelection == 'rock')) {
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
    } else if ((playerSelection == 'rock' && computerSelection == 'rock') ||
    (playerSelection == 'scissors' && computerSelection == 'scissors') ||
    (playerSelection == 'paper' && computerSelection == 'paper')) {
        console.log(`It's a tie! both picked ${playerSelection}`);
    }
}

let computerSelection = computerPlay();
playRound('rock', 'scissors');