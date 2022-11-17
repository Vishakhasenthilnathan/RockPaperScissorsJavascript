let userScore =0;
let compScore =0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");


function convertToWord(letter){
    if(letter === "r") return "Rock"
    if(letter === "p") return "Paper"
    if(letter === "s") return "Scissors"

}
function win(userChoice,computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}. You win!`
}
function lose(userChoice,computerChoice){
    compScore++;
    compScore_span.innerHTML = compScore;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = `${convertToWord(userChoice)} loses to ${convertToWord(computerChoice)}. You lose!`
}
function draw(userChoice,computerChoice){
    result_p.innerHTML = `${convertToWord(userChoice)}  ties with ${convertToWord(computerChoice)}. Its a draw!`
}

function game(userChoice){
    const computerChoice = getComputerChoice();
    switch (userChoice+computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice,computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice,computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice,computerChoice);
            break;
            
        default:
            break;
    }
}

function getComputerChoice(){
    const choices = ["r", "p","s"]
    randomChoice = Math.floor(Math.random()*3)
    return choices[randomChoice];
}
getComputerChoice();

function main(){
    rock_div.addEventListener("click",function(){
        game("r");
    })
    
    paper_div.addEventListener("click",function(){
        game("p");
    })
    
    scissor_div.addEventListener("click",function(){
        game("s");
    })
    
    
}
main();
