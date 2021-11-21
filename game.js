function computerPlay() {
    const items = ['Rock', 'Scissors', 'Paper']
    let index = Math.floor(Math.random() * 10 % items.length)
    return items[index]
}

function play(player, computerSelection) {

    let computer = computerSelection.toLowerCase()
    if (player === "rock") {
        if (computer === "rock") {
            return 0 //"Tie. Both are rock"
        } 
        if (computer === "paper") {
            return -1 //"You lost. You are rock. Paper beats rock"
        }

        if(computer === "scissors") {
            return 1 //"You won. You are rock. Rock beats scissors"
        }
    }

    if(player === "paper") {
        if (computer === "rock") {
            return 1 //"You won. You are paper. Paper beats rock"
        } 
        if (computer === "paper") {
            return 0 //"Tie. Both are paper"
        }

        if(computer === "scissors") {
            return -1 //"You lost. You are paper. Scissors beats paper"
        }
    }

    if(player === "scissors") {
        if (computer === "rock") {
            return -1 //"You lost. You are scissors. Rock beats scissors"
        } 
        if (computer === "paper") {
            return 1 //"You won. You are scissors. Scissors beats paper"
        }

        if(computer === "scissors") {
            return 0 //"Tie. Both are scissors"
        }
    }
}

function game() {
    // play 5  times
    let playerScore = 0
    let computerScore = 0

    for(i=0; i<5; i++) {
        let player = window.prompt("Enter your selection:").toLowerCase();
        while (player !== "rock"
        && player !== "paper"
        && player !== "scissors" ){
            alert ("wrong input, please enter again")
            player = window.prompt("Enter your selection:").toLowerCase();
        }
        let result = play(player, computerPlay())
        
        if(result === 1) {
            alert(`you won #${i} round`)
            playerScore += 1
        } else if (result === -1) {
            alert(`you lost #${i} round`)
            computerScore += 1
        } else {
            alert (`#${i} round is a tie`)
        }
    }

    if (playerScore === computerScore) {
        return 'Tie'
    }

    if(playerScore > computerScore) {
        return `You won with a score ${playerScore}`
    }

    return `You lost with a score ${playerScore}`
}

console.log(game())