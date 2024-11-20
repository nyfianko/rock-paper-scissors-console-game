const gameTerms = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

// Function to pick randomly from the gameTerms array above
function getComputerChoice(list){
    const computerChoice = Math.floor(Math.random() * list.length);
    return(list[computerChoice]);
}
const computerSelection = getComputerChoice(gameTerms);
console.log("Computer chose " + computerSelection);

// Function to take in human selection using prompt
function getHumanChoice(){
    let humanChoice = prompt("Enter your choice: Rock, Paper or Scissors???");
    return(humanChoice.toLowerCase());
}
const humanSelection = getHumanChoice();
console.log("You chose:" + humanSelection);

// Function to determine winner of each round
function playRound(humanChoice, computerChoice){
     if (humanChoice === computerChoice){
        console.log("This round is tie. Computer chose " + computerChoice + " Try Again!");
     } else if(humanChoice === gameTerms[0] && computerChoice === gameTerms[1]){
        console.log("You lose! Paper beats Rock!");
        computerScore++;
     } else if(humanChoice === gameTerms[1] && computerChoice === gameTerms[2]){
        console.log("You lose! Scissors beats Paper!");
        computerScore++;
     } else if(humanChoice === gameTerms[2] && computerChoice === gameTerms[0]){
        console.log(" You lose! Rock beats Scissors!");
        computerScore++;
     }
     else {
        console.log("You won this round!");
        humanScore++;
     }
}

playRound(humanSelection, computerSelection);
console.log("After this round, computer has: " + computerScore + ", and You have: " + humanScore);