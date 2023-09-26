const result = document.querySelector(".result")
const youWin = document.querySelector("#you-win")
const youLose = document.querySelector("#you-lose")
const drawResut = document.querySelector(".draw-resut")

let youWinScore = 0
let youLoseScore = 0
let drawScore = 0


const playGame = (humanChoice) => {

    playTheGame(humanChoice, playMachine())
}

const playMachine = () => {

    const choices = ["rock", "paper", "scissors", "lizard", "spock"]
    const randomNumber = Math.floor(Math.random() * 5)

    return choices[randomNumber]
}

const playTheGame = (human, machine) => {
    console.log("humano " + human + " maquina " + machine)

    if (human === machine) {
        drawScore++
        drawResut.innerHTML = `Draw: ${drawScore}`
        result.innerHTML = "Draw"
    } else if (human === "scissors" && machine === "paper" ||
        human === "paper" && machine === "rock" ||
        human === "rock" && machine === "lizard" ||
        human === "lizard" && machine === "paper" ||
        human === "scissors" && machine === "spock" ||
        human === "spock" && machine === "scissors" ||
        human === "scissors" && machine === "lizard" ||
        human === "lizard" && machine === "paper" ||
        human === "paper" && machine === "spock" ||
        human === "spock" && machine === "rock" ||
        human === "rock" && machine === "scissors") {
            result.innerHTML = "You WIN !! "
            youWinScore++
            youWin.innerHTML = youWinScore
    } else {
        result.innerHTML = "You LOSE !!"
        youLoseScore++
        youLose.innerHTML = youLoseScore
    }


}