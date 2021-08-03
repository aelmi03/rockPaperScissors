//Store all the possible outcomes in an array
const possibleOptions = ["Rock", "Paper", "Scissors"];
function computerPlay(){
    // Generates a random number between 0-2 so i can access a random array
    let num = Math.floor((Math.random() * 3));
    return possibleOptions[num];
}
function playRound(playerSelection, computerSelection){
    //Make both of the parameters lowercase so my function will work no matter the amount of capitals the parameters have
    const playerMove = playerSelection.toLowerCase();
    const computerMove = computerSelection.toLowerCase();
    console.log(playerMove);
    console.log(computerMove);
    // Can end function immediately if they are the same
    if(playerMove === computerMove){
        return `It is a draw! You both had ${playerMove}`;
    }
    else if(playerMove === "rock"){
        if(computerMove === "paper"){
            return "You Lose! Paper beats Rock"
        }
    // If it is not paper then it has to be scissors so the player will win
        else return "You Win! Rock beats Scissors"
        
    }
    else if(playerMove === "paper"){
        if(computerMove === "scissors"){
            return "You Lose! Scissors beats paper"
        }
    // if it it not scissors then it has to be rock so the player will win
        else return "You Win! Paper beats rock"
    }
    // now the last option is scissors so i don't have to test it with a boolean condition
    else{
        if(computerMove === "rock"){
            return "You Lose! Rock beats Scissors"
        }
    //now the last option will be paper so the player will win
        else return "You Win! Scissors beats Paper"
    }
}
function allUntilLastCharacter(word){
    const size = word.length;
    return word.slice(0,size-1);
}
function getScore(text){
    const lengthOfString = text.length;
    return text[lengthOfString-1];
}
function changeImage(move, node){
    if(move === "Rock"){
        console.log("hi");
        node.setAttribute("src", "images/rock.png");
    } else if(move === "Paper"){
        node.setAttribute("src", "images/paper.png")
    }
    else if (move === "Scissors"){
        node.setAttribute("src", "images/scissors.png");

    }
    return;
}
function playGame(move){
    let theUserDisplay = document.querySelector("#theUserScore");
    let theComputerDisplay = document.querySelector("#theComputerScore");
    let userScore = +getScore(document.querySelector("#theUserScore").textContent);
    let computerScore = +getScore(document.querySelector("#theComputerScore").textContent);
    let userImage = document.querySelector("#thePlayersImage");
    let computerImage = document.querySelector("#theComputersImage");
    if(userScore === 5 || computerScore === 5) return;
    changeImage(move, userImage);
    let computersMove = computerPlay();
    changeImage(computersMove, computerImage);
    const result = playRound(move,computersMove);
    if(result.includes("Win")){
        userScore++;
        theUserDisplay.textContent =  allUntilLastCharacter(document.querySelector("#theUserScore").textContent) + userScore;

        
    }
    // Otherwise give the computer a point
    else if(result.includes("Lose")){
        computerScore++;
        theComputerDisplay.textContent =  allUntilLastCharacter(document.querySelector("#theComputerScore").textContent) + computerScore;

    }



}

const buttonList = document.querySelectorAll("button");
buttonList.forEach(button => button.addEventListener("click", (e) => playGame(e.target.value)));
