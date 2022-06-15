// Computer Player
function computerPlay() {
    // Random number between 0 to 2
    let num = Math.floor(Math.random() * 3);

    // Return Rock, Paper, or Scissors depending on which number
    switch(num) {
        case 0:
            return 'Rock';

        case 1:
            return 'Paper';
        
        case 2:
            return 'Scissors';
    }
}

// console.log(computerPlay());