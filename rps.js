
var choices = ['rock', 'paper', 'scissors']

function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * choices.length)
    const item = choices[computerChoice]
    return item
}

function getHumanChoice() {
    const human = prompt("pick rock, paper or scissors")
    return human
}

let computerScore = 0
let humanScore = 0

function playRound(humanChoice, computerChoice) {
    let humanChoiceT = humanChoice.toLowerCase()
    if (humanChoiceT === computerChoice) {
        console.log("TIE!")
    }
    else if (humanChoiceT === 'rock' && computerChoice === 'paper' || humanChoiceT === 'paper' && computerChoice === 'rock' || humanChoiceT === 'scissors' && computerChoice === 'paper') {
        console.log('You Win!')
        humanScore++
        console.log(`human score : ${humanScore}`)
        console.log(`computer score: ${computerScore}`)
    }
    else {
        console.log('You Lose!')
        computerScore++
        console.log(`human score : ${humanScore}`)
        console.log(`computer score: ${computerScore}`)
    }

}

for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice()
    const computerSelection = getComputerChoice()
    playRound(humanSelection, computerSelection)
}
if (computerScore > humanScore) {
    console.log('YOU LOSE THE GAME!')
}
else if (computerScore === humanScore) {
    console.log('YOU WIN THE GAME!')
}

else {
    console.log('THE GAME TIED!')
}

