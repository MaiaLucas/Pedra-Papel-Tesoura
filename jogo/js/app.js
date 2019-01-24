var userScore = 0;
var compScore = 0;

const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");

const scoreBoard_div = document.querySelector(".score-board");
const result_p       = document.querySelector(".result > p");

const rock_div     = document.getElementById("pedra");
const paper_div    = document.getElementById("papel");
const scissors_div = document.getElementById("tesoura");
//--

function getComputerChoice() {
    const choices      = ['pedra', 'papel', 'tesoura'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

const smallUserWord = "user".fontsize(3).sub();
const smallCompWord = "comp".fontsize(3).sub();
function win(user, computer) {
    const userScore_div = document.getElementById(user);
    userScore ++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = `${user}${smallUserWord} ganha de ${computer}${smallCompWord}. Você ganhou!`;
    userScore_div.classList.add('green-glow');
    setTimeout( () => userScore_div.classList.remove('green-glow'), 500);
}

function lose(user, computer) {
    const userScore_div = document.getElementById(user);
    compScore ++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = `${user}${smallUserWord} perde para ${computer}${smallCompWord}. Você perdeu!`;
    userScore_div.classList.add('red-glow');
    setTimeout( () => userScore_div.classList.remove('red-glow'), 500);
}

function draw(user, computer) {
    const userScore_div = document.getElementById(user);
    result_p.innerHTML = `${user}${smallUserWord} empata com ${computer}${smallCompWord}. Empatou!`;
    userScore_div.classList.add('gray-glow');
    setTimeout( () => userScore_div.classList.remove('gray-glow'), 500);
}

function game(userChoice) {
    const computerChoice = getComputerChoice();

    switch(userChoice + computerChoice) {
        
        case "papelpedra":
        case "pedratesoura":
        case "tesourapapel":
            win(userChoice, computerChoice);
            break;

        case "pedrapapel":
        case "tesourapedra":
        case "papeltesoura":
            lose(userChoice, computerChoice);
            break;

        case "pedrapedra":
        case "papelpapel":
        case "tesouratesoura":
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', () => game("pedra"));
    paper_div.addEventListener('click', () => game("papel"));
    scissors_div.addEventListener('click', () => game("tesoura"));
}

main();




