const card1 = document.querySelector('#card1');
const card2 = document.querySelector('#card2');
const card3 = document.querySelector('#card3');
const responseDiv = document.querySelector('#response')
const player = document.querySelector('#player')
const computer = document.querySelector('#computer')
const winner = document.querySelector('#Winner')

let newDiv = document.createElement('p')
let newDiv2 = document.createElement('p')
responseDiv.appendChild(newDiv2)
responseDiv.appendChild(newDiv)
let playerCounter = 0;
let computerCounter = 0;



card1.addEventListener('click', () => {
    let answer = 'paper'
    let computerText = ComputerText(ComputerPlay(1,3))
    let response = ComputerAnswer(answer, computerText)
    if(playerCounter <= 5 & computerCounter <= 5){
        newDiv2.textContent = "Computer Choose: " + computerText
        newDiv.textContent = response
        player.textContent = playerCounter
        computer.textContent = computerCounter
        WhoWins(playerCounter, computerCounter)
    
    }
    


    console.log(playerCounter, computerCounter)
    
    
})



card2.addEventListener('click', () => {
    let answer = 'rock'
    let computerText = ComputerText(ComputerPlay(1,3))
    let response = ComputerAnswer(answer, computerText)
    if(playerCounter <= 5 & computerCounter <= 5){
        newDiv2.textContent = "Computer Choose: " + computerText
        newDiv.textContent = response
        player.textContent = playerCounter
        computer.textContent = computerCounter
        WhoWins(playerCounter, computerCounter)
    }
    


})

card3.addEventListener('click', () => {
    let answer = 'scissors'
    let computerText = ComputerText(ComputerPlay(1,3))
    let response = ComputerAnswer(answer, computerText)
    if(playerCounter <= 5 & computerCounter <= 5){
        newDiv2.textContent = "Computer Choose: " + computerText
        newDiv.textContent = response
        player.textContent = playerCounter
        computer.textContent = computerCounter
        WhoWins(playerCounter, computerCounter)
    }
    

})


function ComputerPlay(min,max){
    return Math.floor(Math.random() * ((max+1)-min)+min);
}

function ComputerText(computerAnswer){
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
    return computerAnswer
}


function ComputerAnswer(answer, computerAnswer){


    if (answer == "paper" & computerAnswer == "rock"){
        playerCounter++
        return "You Win, Paper beats Rock"   
    }else if(answer == "paper" & computerAnswer == "scissors"){
        computerCounter++
        return "You lose, Scissors beats Paper"
    }else if (answer == "rock" & computerAnswer == "paper") {
        computerCounter++
        return "You lose, Paper beats Rock"
    }else if (answer == "rock" & computerAnswer == "scissors"){
        playerCounter++
        return "You win, Rock beats Scissors"
    }else if (answer == computerAnswer){
        return "TIE"
    }else if(answer == "scissors" & computerAnswer == "paper"){
        playerCounter++
        return "You win, Scissors beats Paper"
    }else if(answer == "scissors" & computerAnswer == "rock"){
        computerCounter++
        return "You lose, Rock beats Scissors"
        }

    
}

function WhoWins(player, computer){
    if(player >= 5){
        let ganador = 'Human'
        winner.style.color = '#1F8327'
        winner.textContent = ganador
    }
    if(computer >= 5){
        let ganador = 'Machine'
        winner.style.color = '#C50212'
        winner.textContent = ganador
    }
}

const p1 = document.createElement('h2')
const img1 = document.createElement('img')
p1.textContent = 'Paper'
img1.src = './paper.svg'

card1.appendChild(img1)
card1.appendChild(p1)

const p2 = document.createElement('h2')
const img2 = document.createElement('img');
p2.textContent = 'Rock'
img2.src = './stone.png'
card2.appendChild(img2)
card2.appendChild(p2)

const p3 = document.createElement('h2')
const img3 = document.createElement('img')
img3.src = './scissors.svg'
p3.textContent = 'Scissors'
card3.appendChild(img3)
card3.appendChild(p3)