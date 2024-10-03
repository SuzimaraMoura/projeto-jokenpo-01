const result=document.querySelector(".result")
const humanGameScore=document.querySelector(".my-score")
const machineGameScore=document.querySelector(".score-alexa")

let myScore=0
let scoreMachine=0

const humanChoice = (human) => {
    playTheGame(human,machineChoice ())
}

const machineChoice = () => {
    const choices=["rock","paper","scissors"]
    const randon=Math.floor(Math.random()*3)
    return  choices[randon]
   
}
const playTheGame = (playhuman,playmachine) => {
   
    if ( playhuman === playmachine) {
        result.innerHTML="Empate!"
    }

    else if (( playhuman === "rock" && playmachine === "scissors")||
             ( playhuman === "scissors" && playmachine === "paper")||
             ( playhuman === "paper" && playmachine === "rock")) {
           
        myScore ++
        humanGameScore.innerHTML= myScore
        result.innerHTML= "Você Ganhou!"
        
    } else {
        scoreMachine ++
        machineGameScore.innerHTML=scoreMachine
        result.innerHTML= "A Alexa Ganhou!"

    }

    console.log(`Humano:${playhuman} Maquina: ${playmachine}`)

}