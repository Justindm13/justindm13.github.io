//array of possible choices
let possibleSelections = ['Rock', 'Paper', 'Scissors'];

// function to determine the computer's choice between Rock, Paper, or Scissors from the array above and then returns the selection
function computerPlay() {
    let selection = possibleSelections[Math.floor(Math.random()*3)];
    return selection;
}

let computerWin=0;
let playerWin=0;

function gamePlay(computerSelection, playerSelection) {

    if (computerSelection == possibleSelections[0] && playerSelection == possibleSelections[1]) {
        console.log(playerSelection + ' beats ' + computerSelection + ' so you win!');
        return 1;
    } else if (computerSelection == possibleSelections[1] && playerSelection == possibleSelections[2]) {
        console.log(playerSelection + ' beats ' + computerSelection + ' so you win!');
        return 1;
    } else if (computerSelection == possibleSelections[2] && playerSelection == possibleSelections[0]) {
        console.log(playerSelection + ' beats ' + computerSelection + ' so you win!');
        return 1;
    } else if (computerSelection == possibleSelections[0] && playerSelection == possibleSelections[2]) {
        console.log(computerSelection + ' beats ' + playerSelection + ' so you lose!');
        return 2;
    } else if (computerSelection == possibleSelections[1] && playerSelection == possibleSelections[0]) {
        console.log(computerSelection + ' beats ' + playerSelection + ' so you lose!');
        return 2;
    } else if (computerSelection == possibleSelections[2] && playerSelection == possibleSelections[1]) {
        console.log(computerSelection + ' beats ' + playerSelection + ' so you lose!');
        return 2;
    } else if (computerSelection===playerSelection) {
        console.log("You Tied!");
    } else {
        console.log("We don't know what you typed");
    }
};

let playerScore=0;
let computerScore=0;
let tiedScore=0;

function scoreUpdate () {
    document.getElementById("currentPlayerScore").textContent=playerScore;
    document.getElementById("currentComputerScore").textContent=computerScore;
    document.getElementById("currentTiedScore").textContent=tiedScore;
}
//for loop that runs through the game 5 times
// for (i=0; i<5;i++) {    
//     let computerSelection=computerPlay();
//     let playerSelection = prompt ("Rock? Paper? or Scissors?");
//     playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
//     console.log("The computer selected " + computerSelection);
//     console.log("You selected " + playerSelection);
//     let winner=gamePlay(computerSelection, playerSelection);
//     // adds a point to either the player's score or the computer score depending on who won the game
//     if (winner===1) {
//         playerScore++;
//     } else if (winner===2) {
//         computerScore++;
//     }



//alerts the user of their own score and the computer score and tells who won the game.
// if (playerScore>computerScore) {
//     console.log("You DA WINNER!")
//     console.log("Your score " + playerScore + " VS Computer who got " + computerScore);
// } else if (computerScore > playerScore) {
//     console.log("You DA LOSER!")
//     console.log("The Computer got " + computerScore + " VS your score at " + playerScore);
// } else {
//     console.log('You tied');
//     console.log("You got " + playerScore + ' and the computer got ' + computerScore);
// }
function resetScores () {
    computerScore=0;
    playerScore=0;
    tiedScore=0;
    scoreUpdate();
    const restartButtonDiv = document.getElementById('clickRestart');
    restartButtonDiv.classList.add('startOverButtonDefault');
    restartButtonDiv.classList.remove('startOverButton');
    document.getElementById("currentRoundSelections").innerHTML= "Click a button above to start the game!";
    document.querySelector(".sectionWithButtons").classList.remove('disappear');
    
}

function checkScore () {
    console.log(computerScore+playerScore+tiedScore!==5);
    if (computerScore+playerScore+tiedScore!==5) return;

    if (computerScore>playerScore) {
        document.getElementById("currentRoundSelections").innerHTML= "YOU SUCK, TRY AGAIN LATER!";
    }

    if (playerScore>computerScore) {
        document.getElementById("currentRoundSelections").innerHTML= "Winner Winner Chicken Dinner! You did it!" + "<br></br>" + "TO PLAY AGAIN, CLICK ROCK, PAPER, OR SCISSORS ABOVE";
    }

    if (playerScore===computerScore) {
        document.getElementById("currentRoundSelections").innerHTML= "You TIED!";
    }
    const restartButtonDiv = document.getElementById('clickRestart');
    restartButtonDiv.classList.remove('startOverButtonDefault');
    restartButtonDiv.classList.add('startOverButton');
    document.getElementById('startOver').addEventListener("click", resetScores);
    document.querySelector(".sectionWithButtons").classList.add('disappear');   
}




function playRound (event) { 
    let computerSelection=computerPlay();
    let playerSelection = event.srcElement.innerHTML;
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    let winner=gamePlay(computerSelection, playerSelection);
    // adds a point to either the player's score or the computer score depending on who won the game
    if (winner===1) {
        playerScore++;
        document.getElementById("currentRoundSelections").innerHTML="You DA WINNER!" + "<br></br>" + " You chose " + playerSelection + " which beat " + computerSelection;
    } else if (winner===2) {
        computerScore++;
        document.getElementById("currentRoundSelections").innerHTML="You DA LOSER! " + "<br></br>" + "You chose " + playerSelection + " which lost to " + computerSelection;
    } else {
        tiedScore++;
        document.getElementById("currentRoundSelections").innerHTML="You TIED!" + "<br></br>" + "You chose " + playerSelection + " which is the same as " + computerSelection;
    }
    scoreUpdate();
    checkScore();
}

document.getElementById("rock").addEventListener("click", playRound);
document.getElementById("paper").addEventListener("click", playRound);
document.getElementById("scissors").addEventListener("click", playRound);

// function playPaper () {    
//     let computerSelection=computerPlay();
//     let playerSelection = "Paper";
//     playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
//     let winner=gamePlay(computerSelection, playerSelection);
//     // adds a point to either the player's score or the computer score depending on who won the game
//     if (winner===1) {
//         playerScore++;
//     } else if (winner===2) {
//         computerScore++;
//     } else {
//         tiedScore++;
//     }
//     document.getElementById("currentPlayerScore").innerHTML=playerScore;
//     document.getElementById("currentComputerScore").innerHTML=computerScore;
//     document.getElementById("currentTiedScore").innerHTML=tiedScore;
// }

// function playScissors () {    
//     let computerSelection=computerPlay();
//     let playerSelection = "Scissors";
//     playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
//     let winner=gamePlay(computerSelection, playerSelection);
//     // adds a point to either the player's score or the computer score depending on who won the game
//     if (winner===1) {
//         playerScore++;
//     } else if (winner===2) {
//         computerScore++;
//     } else {
//         tiedScore++;
//     }
//     document.getElementById("currentPlayerScore").innerHTML=playerScore;
//     document.getElementById("currentComputerScore").innerHTML=computerScore;
//     document.getElementById("currentTiedScore").innerHTML=tiedScore;
// }

