let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll('.choice');
const msg = document.querySelector("#msg");
const userScores = document.querySelector("#user-score");
const comScores = document.querySelector("#comp-score");

const genCompChoice = () =>{
    const choice = ["rock","paper","scissors"]
    let indx = Math.floor(Math.random()*3);
    return choice[indx];
}
const drawGame = () =>{
    console.log("Game was draw");
    msg.innerText = "Game Was draw !";
    msg.style.backgroundColor = "brown";
}
const showWinner = (userWin,youserChoice,compChoice) =>{
    if(userWin){
         userScore++;
         userScores.innerText = userScore;
        msg.innerText = `yow Win! ${youserChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
       
        
    }
    else{
        compScore++;
        comScores.innerText = compScore;
        msg.innerText = `you lost! ${compChoice} beats ${ youserChoice}`;
        msg.style.backgroundColor = "red";
    }
}
let playGame = (youserChoice) =>{
    console.log("user choice:", youserChoice);
    const compChoice = genCompChoice();
    console.log("comp choice:", compChoice);
    if(youserChoice === compChoice){
        drawGame();
        
        
    }
    else{
        let userWin = true;
        if(youserChoice === "rock"){
            // scissors or paper
            userWin = compChoice === "paper"? false : true;
        } else if(youserChoice === "paper"){
           userWin = compChoice === "scissors"? false: true;
        }
        else {
            userWin = compChoice === "rock"? false:true;

        }
        showWinner(userWin,youserChoice,compChoice);
    }


};

choices.forEach((choice) =>{
    console.log(choice);
    choice.addEventListener("click", () =>{
        const youserChoice = choice.getAttribute("id");
        console.log("choice was clicked",youserChoice);
        playGame(youserChoice);

    })
})