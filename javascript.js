const rps = ["rock","paper","scissor"]
function getComputerChoice(){
    const choice = Math.floor(Math.random()*3);

    return rps[choice];
}

// const computer = getComputerChoice();

function getHumanChoice(){
    const choice = prompt("Choose rock/paper/scissor");

    return choice;  
}

// const human = getHumanChoice();

let humanScore = 0;
let computerScore = 0;


function playRound(humanChoice, compChoice){
    console.log(humanChoice,compChoice);
    if ((humanChoice == "rock" && compChoice == "paper") || 
        (humanChoice == "paper" && compChoice == "scissor") || 
        (humanChoice == "scissor" && compChoice == "rock")  ){
        console.log("You lose!");
        computerScore++;
    }else if ((humanChoice == "rock" && compChoice == "scissor")||
            (humanChoice == "paper" && compChoice == "rock") ||
            (humanChoice == "scissor" && compChoice == "paper")) {
                console.log("You win!");
                humanScore++;
    }else if(humanChoice == compChoice){
        console.log("It's a tie!");
    }else{
        console.log("Invalid choice. Please try again.");
    }
    console.log(humanScore,computerScore);


}
function playGame(){
    for(i = 0; i < 5; i++){
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice,computerChoice);
    }
    if(humanScore > computerScore){
        console.log("Human wins!");
    }else if(humanScore < computerScore){
        console.log("Computer wins!");
    }else{
        console.log("It's a tie!");
    }
}

playGame();
// 
// playRound(human, computer)
// 
// console.log(humanScore, computerScore);