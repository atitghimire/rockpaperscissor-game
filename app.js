let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
       // why array ma rakheko tah? Because as such yesto function chaina hami sanga jaha hami directly group of strings bata yeuta string generate gamra.I.E. randomly stringly generate garna sakdainam. Tara randomly hami nyumber generate sakcham ra tyo random as a index use garcham to this options array.  Random nam ko function le 0 dekhi 1 samma random number generate garcha kei narakhda. Ra number can be index in array. ra tyei rakhda with certain condition we can store it as array.
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () =>
{
msg.innerText = "Game Was Draw!";
msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userChoice, compChoice) =>{
    if (userWin)
    {
        userScore++;
        userScorePara.innerText=userScore;
        console.log("You Win!");
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        console.log("You Lose!");
        msg.innerText = `You Lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}


const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    //Generate Computer Choice
    const compChoice = genCompChoice();
    console.log("computer choice = ", compChoice);
    if(userChoice == compChoice){
        drawGame();
    } else{
        let userWin = true;
        if(userChoice==="rock"){
            //comp ko choice paper or scissors huncha natra rock bhako bhae draw hunthyo
            userWin= compChoice=== "paper"? false: true;
        }
        else if(userChoice === "paper"){
            //comp ko choice rock or scissors huncha yedi paper bhako bhae draw hunthyo
            userWin= compChoice=== "scissors"? false: true;
        }
        else{  
            userWin = compChoice === "rock"? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log("choice was clicked", userChoice); // Change choiceId to userChoice
        playGame(userChoice);
    });
});
