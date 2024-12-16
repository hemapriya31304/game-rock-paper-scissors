
let humanScore = 0
let computerScore = 0

function getComputerChoice() {
    const choices = ["rock","paper","scissors"];
    const randomArray =  Math.floor(Math.random() * choices.length);
    return choices[randomArray]
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock" && computerChoice == "paper" ){
        computerScore++;
        alert("You lose!!" + computerChoice + "beats" + humanChoice)
    } else if (humanChoice == "rock" && computerChoice == "scissors")  {
        humanScore++;
        alert("You Win!!" + humanChoice + "beats" + computerChoice)
    }

    if (humanChoice == "paper" && computerChoice == "rock" ){
        humanScore++;
        alert("You Win!!" + humanChoice + "beats" + computerChoice)
    } else if (humanChoice == "paper" && computerChoice == "scissors")  {
        computerScore++;
        alert("You lose!!" + computerChoice + "beats" + humanChoice)
    }

    if (humanChoice == "scissors" && computerChoice == "paper" ){
        humanScore++;
        alert("You Win!!" + humanChoice + "beats" + computerChoice)
    } else if (humanChoice == "scissors" && computerChoice == "rock")  {
        computerScore++;
        alert("You lose!!" + computerChoice + "beats" + humanChoice)
    }
    else if (humanChoice == computerChoice){
        alert("The match is tie, Play Again")
    }
}

function playGame(humanChoice) {
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    alert("Your Score is " + humanScore + " and Computer Score is " + computerScore);
    if(computerScore > 4 || humanScore > 4){
        resultGame();
    }
}

function resultGame() {
    if (computerScore < humanScore){
    alert("You win the game ")
    }
    else if  (computerScore > humanScore) {
    alert("You lose the game")
    }
    else {
    alert("The game is tie")
    }
    humanScore = 0;
    computerScore = 0    
}

document.getElementById("rock").addEventListener("click", () =>playGame("rock")); 
document.getElementById("paper").addEventListener("click", () => playGame("paper"));
document.getElementById("scissors").addEventListener("click", () => playGame("scissors"));