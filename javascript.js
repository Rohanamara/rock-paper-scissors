const rps = ["rock","paper","scissor"]
function getComputerChoice(){
    const choice = Math.floor(Math.random()*3);

    return rps[choice];
}

const computer = getComputerChoice();

function getHumanChoice(){
    const choice = prompt("Choose rock/paper/scissor");

    return choice;  
}

const human = getHumanChoice();


