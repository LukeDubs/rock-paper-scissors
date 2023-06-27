console.log('hello, world');

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
    let ps = playerSelection.toLowerCase();;
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
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Rock, Paper or Scissors');
        const computerSelection = getComputerChoice(); 
        let score = 0;  
        
        playRound(playerSelection, computerSelection);

        // Take the result from playRound into a variable
        // Update the score in the loop
        // If the result (use .startsWith()):
        // You win, score++; you lose, score--
        // return the score outside the loop
        
    }
    
}
 
console.log(game());
