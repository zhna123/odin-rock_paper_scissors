function computerPlay() {
    const items = ['Rock', 'Scissors', 'Paper']
    let index = Math.floor(Math.random() * 10 % items.length)
    return items[index]
}

function play(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase()
    let computer = computerSelection.toLowerCase()
    if (player === "rock") {
        if (computer === "rock") {
            console.log("Tie. Both are rock");
            return 0 
        } 
        if (computer === "paper") {
            console.log("You lost. You are rock. Paper beats rock");
            return -1 
        }

        if(computer === "scissors") {
            console.log("You won. You are rock. Rock beats scissors");
            return 1 
        }
    }

    if(player === "paper") {
        if (computer === "rock") {
            console.log("You won. You are paper. Paper beats rock");
            return 1 
        } 
        if (computer === "paper") {
            console.log("Tie. Both are paper");
            return 0 
        }

        if(computer === "scissors") {
            console.log("You lost. You are paper. Scissors beats paper");
            return -1 
        }
    }

    if(player === "scissors") {
        if (computer === "rock") {
            console.log("You lost. You are scissors. Rock beats scissors");
            return -1 
        } 
        if (computer === "paper") {
            console.log("You won. You are scissors. Scissors beats paper");
            return 1 
        }

        if(computer === "scissors") {
            console.log("Tie. Both are scissors");
            return 0 
        }
    }
}

let playerScore = 0;
let computerScore = 0;

const player = document.querySelector("div>#player>span.score")
const computer = document.querySelector("div>#computer>span.score");

player.textContent=0;
computer.textContent=0;

const buttons = Array.from(document.querySelectorAll(".btn"));
buttons.forEach(btn => btn.addEventListener('click', playGame));

function playGame(e) {
    const result = play(e.target.textContent, computerPlay());
    if(result === 1) {
        playerScore++;
        player.textContent=playerScore;
        
    } else if (result === -1) {
        computerScore++;
        computer.textContent=computerScore;
    }

    if(playerScore == 5 || computerScore == 5) {
        buttons.forEach(btn => btn.disabled=true)
        const results = document.querySelector("div#results");
        const p = document.createElement("p");
        if(playerScore == 5) { 
            p.textContent="You won!"
        } else if (computerScore == 5) {
            p.textContent="Computer won!"
        }
        results.appendChild(p);
        const playAgainBtn = document.createElement("button");
        playAgainBtn.textContent="Play Again";
        results.appendChild(playAgainBtn);

        playAgainBtn.addEventListener('click', function(e) {
            location.reload();
        })
    }
}



