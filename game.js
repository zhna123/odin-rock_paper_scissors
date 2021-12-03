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

const container = document.querySelector("body")

const div = document.createElement('div');
container.appendChild(div);

let playerScore = 0
let computerScore = 0
let round = 0

const buttons = Array.from(document.querySelectorAll(".btn"));
buttons.forEach(btn => btn.addEventListener('click', function(e) {
    if (playerScore === 5) {
        const para1 = document.createElement('p');
        para1.textContent = "You won!"
        div.prepend(para1)
    } else if (computerScore === 5) {
        const para1 = document.createElement('p');
        para1.textContent = "Computer won!"
        div.prepend(para1);
    } else {
        result = play(`${btn.textContent}`, computerPlay())
        const para = document.createElement('p');
        para.setAttribute('style', 'white-space: pre;');
        if(result === 1) {
            playerScore += 1;
        } else if (result === -1) {
            computerScore += 1;
        }
        round++;
        para.textContent =  `Round ${round} \n
                             Your score is ${playerScore} \n
                             Computer score is ${computerScore}`;

        div.prepend(para); 
    } 
}));
