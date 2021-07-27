const possibleOptions = ["Rock", "Paper", "Scissors"];
function computerPlay(){
    let num = Math.floor((Math.random() * 3));
    return possibleOptions[num];
}
for(let i = 0; i < 20; i++){
    console.log(computerPlay());
    console.log("---------")
}
