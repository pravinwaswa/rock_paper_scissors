function getComputerChoice (){
    let choices = ["ROCK", "PAPER", "SCISSORS"];
    let randomPick = Math.floor(Math.random() * choices.length);
    return choices[randomPick];

} ;

