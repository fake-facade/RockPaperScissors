function getComputerChoice(){ //gets the computers variable 
    let computerChoice = (Math.floor(Math.random() * 3));
    if (computerChoice === 0) {
        return "rock";
    } else if (computerChoice === 1) {
        return "paper";
    } else {
        return "scissors";
}};

const resultsContainer = document.querySelector('div.result');
const div = document.createElement('div');
const score = document.createElement('div');
resultsContainer.appendChild(div);
div.classList.add('results');

let playerScore = 0
let computerScore = 0

function playRound(playerSelection, computerSelection) {
    if (computerSelection.toLowerCase() === playerSelection.toLowerCase()) {
         div.textContent = "Draw! " + computerSelection + " vs " + playerSelection;
    } else if (playerSelection.toLowerCase() === "rock"){
        if(computerSelection === "paper"){
            div.textContent = "You lose! " + computerSelection + " beats " + playerSelection;
            computerScore++;
        } else if (computerSelection === "scissors") {
            div.textContent = "You win! " + playerSelection + " beats " + computerSelection;
            playerScore++;
        } else {
            return null;
        }
    } else if (playerSelection.toLowerCase() === "paper"){
        if(computerSelection === "scissors"){
            div.textContent = "You lose! " + computerSelection + " beats " + playerSelection;
            computerScore++;
        } else if (computerSelection === "rock") {
            div.textContent = "You win! " + playerSelection + " beats " + computerSelection;
            playerScore++; 
        } else {
            return null;
        }
    } else if (playerSelection.toLowerCase() === "scissors"){
        if(computerSelection === "rock"){
            div.textContent = "You lose! " + computerSelection + " beats " + playerSelection;
            computerScore++;
        } else if (computerSelection === "paper") {
            div.textContent = "You win! " + playerSelection + " beats " + computerSelection;
            playerScore++; 
        } else {
            return null;
        }}};

function game(){
    playRound(playerselection, getComputerChoice());

    if (playerScore >= 5){
        score.innerText = "Congratulations, player wins!";
        computerScore = 0;
        playerScore = 0;
    }else if (computerScore >= 5){
        score.innerText = "Congratulations, computer wins!";
        computerScore = 0;
        playerScore = 0;
    }else {
       score.innerText = "Player score =" + playerScore + "\n" + "Computer score=" + computerScore;
    }
};

resultsContainer.appendChild(score);
score.classList.add('score');

const btns = document.querySelectorAll("button");

let playerselection 
btns.forEach((button) => {   // makes the selection the player's variable
    button.addEventListener('click', (e) => {
        playerselection = e.target.name;
        game();
    });
});