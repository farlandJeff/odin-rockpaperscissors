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
    let outcome = null;
    // Conditionals based on if the player wins, loses, or ties
    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
    (playerSelection == 'paper' && computerSelection == 'rock') ||
    (playerSelection == 'scissors' && computerSelection == 'paper')) {
        outcome = 'win';
    } else if ((playerSelection == 'rock' && computerSelection == 'paper') ||
    (playerSelection == 'paper' && computerSelection == 'scissors') ||
    (playerSelection == 'scissors' && computerSelection == 'rock')) {
        outcome = 'lose';
    } else if (playerSelection == computerSelection) {
        outcome = 'tie';
    }

    // Returns a string of whether the user wins, loses, or ties
    return outcome;
}

// Goes through five rounds and keeps score of whoever wins
function game(choice) {
    let compChoice = computerPlay();
    let outcome = playRound(choice, compChoice);

    if (playerScore == 5 || computerScore == 5) {
        return;
    }

    if (outcome == 'tie') {
        let para = document.createElement('p');
        para.textContent = `You both chose ${choice}, so you ${outcome}!`;
        results.appendChild(para);
    } else if (outcome == 'lose') {
        let para = document.createElement('p');
        para.textContent = `The computer chose ${compChoice}, so you lose...`;
        results.appendChild(para);
        ++computerScore;
        cScore.textContent = computerScore;
    } else {
        let para = document.createElement('p');
        para.textContent = `The computer chose ${compChoice}, so you win!`;
        results.appendChild(para);
        ++playerScore;
        pScore.textContent = playerScore;
        console.log(playerScore);
    }

    if (playerScore == 5) {
        let para = document.createElement('p');
        para.textContent = `You won the game!!! `
        results.appendChild(para);
        return;
    } else if (computerScore == 5) {
        let para = document.createElement('p');
        para.textContent = `You lost the game... `
        results.appendChild(para);
        return;
    }
}

const rockBtn = document.querySelector('.rockBtn');
const paperBtn = document.querySelector('.paperBtn');
const scissorBtn = document.querySelector('.scissorBtn');
const results = document.querySelector('div');
const pScore = document.querySelector('.pScore');
const cScore = document.querySelector('.cScore');

let playerScore = 0;
let computerScore = 0;

if (playerScore == 5) {
    window.addEventListener('keydown', (e) => {
        console.log('test');
    });
}

rockBtn.addEventListener('click', () => game('rock'));
paperBtn.addEventListener('click', () => game('paper'));
scissorBtn.addEventListener('click', () => game('scissors'));