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

    let outcome = null;
    // Conditionals based on if the player wins, loses, or ties
    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
    (playerSelection == 'paper' && computerSelection == 'rock') ||
    (playerSelection == 'scissors' && computerSelection == 'paper')) {
        outcome = 'win';
        console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
    } else if ((playerSelection == 'rock' && computerSelection == 'paper') ||
    (playerSelection == 'paper' && computerSelection == 'scissors') ||
    (playerSelection == 'scissors' && computerSelection == 'rock')) {
        outcome = 'lose';
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
    } else if ((playerSelection == 'rock' && computerSelection == 'rock') ||
    (playerSelection == 'scissors' && computerSelection == 'scissors') ||
    (playerSelection == 'paper' && computerSelection == 'paper')) {
        outcome = 'tie';
        console.log(`It's a tie! both picked ${playerSelection}`);
    } else {
        console.log('Invalid input. Choose Rock, Paper, or Scissors!');
        // Makes the user pick again if they had a bad input
        playRound(prompt('Rock, Paper, or Scissors?'), computerPlay());
    }

    // Returns a string of whether the user wins, loses, or ties
    return outcome;
}

// Goes through five rounds and keeps score of whoever wins
function game() {
    let playerScore = 0;
    let computerScore = 0;

    // Five rounds of the game
    for (let i = 1; i <= 5; i++) {
        console.log(`Round ${i}!`);
        let outcome = playRound(prompt('Rock, Paper, or Scissors?'), computerPlay());
        if (outcome == 'win') {
            playerScore++;
        } else if (outcome == 'lose') {
            computerScore++;
        } else if (outcome == 'tie') {
            playerScore++;
            computerScore++;
        }

        console.log(`SCORE: ${playerScore} - ${computerScore} !!!`);
    }
}

game();