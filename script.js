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