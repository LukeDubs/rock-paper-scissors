const getComputerChoice = () => {
    let randomNum = Math.floor((Math.random() * 3) + 1);

    if (randomNum === 1) {
        return 'Rock'; 
    } else if (randomNum === 2) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}

const playRound = (playerSelection, computerSelection) => {
    let ps = playerSelection.toLowerCase();
    let cs = computerSelection.toLowerCase();
    
    if ((ps === 'rock' && cs === 'paper') || (ps === 'paper' && cs === 'scissors')
    || (ps === 'scissors' && cs === 'rock')) {
        return 'You lose! ' + computerSelection + ' beats ' + playerSelection;
    } else if ((ps === 'paper' && cs === 'rock') || (ps === 'scissors' && cs === 'paper')
    || (ps === 'rock' && cs === 'scissors')) {
        return 'You win! ' + playerSelection + ' beats ' + computerSelection;
    } else {
        return "It's a draw, you both picked " + computerSelection;
    }
}

const game = () => {
    let score = 0; 

    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Rock, Paper or Scissors');
        const computerSelection = getComputerChoice(); 
         
        let result = playRound(playerSelection, computerSelection);

        if (result.startsWith("You win")) {
            score++;
        } 
    }

    if (score >= 3) {
        return 'Player Wins';
    } else {
        return 'Computer Wins';
    }
}
 
console.log(game());
