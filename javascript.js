const rps = ["rock","paper","scissor"]
function getComputerChoice(){
    const choice = Math.floor(Math.random()*3);

    return rps[choice];
}

console.log(getComputerChoice());