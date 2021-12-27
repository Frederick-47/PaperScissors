let answer = prompt("Introduce an option: [ paper, rock, scissors]")

let computerAnswer = ComputerPlay(1,3)

function ComputerPlay(min,max){
    return Math.floor(Math.random() * ((max+1)-min)+min);
}

switch (computerAnswer){
    case 1:
        computerAnswer = "paper";
        break;
    case 2:
        computerAnswer = "rock";
        break;
    case 3:
        computerAnswer = "scissors";
        break;
}

if (answer == "paper" & computerAnswer == "rock"){
    console.log("You Win, Paper beats Rock")
}else if(answer == "paper" & computerAnswer == "scissors"){
    console.log("You lose, Scissors beats Paper")
}else if (answer == "rock" & computerAnswer == "paper") {
    console.log("You lose, Paper beats Rock")
}else if (answer == "rock" & computerAnswer == "scissors"){
    console.log("You win, Rock beats Scissors")
}else if (answer == computerAnswer){
    console.log("TIE")
}else if(answer == "scissors" & computerAnswer == "paper"){
    console.log("You win, Scissors beats Paper")
}else if(answer == "scissors" & computerAnswer == "rock"){
    console.log("You lose, Rock beats Scissors")
}

