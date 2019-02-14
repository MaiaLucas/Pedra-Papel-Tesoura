let userScore  = 0;
let compScore  = 0;
let round      = 1;


const score_table      = document.getElementsByClassName("scoreTable");

const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const rock_div       = document.getElementById("pedra");
const paper_div      = document.getElementById("papel");
const scissors_div   = document.getElementById("tesoura");
const restart_button = document.getElementById("restart");

const scoreBoard_div = document.querySelector(".score-board");
const result_p       = document.querySelector(".result > p");

//--

function getComputerChoice() {
    const choices      = ['pedra', 'papel', 'tesoura'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

//-------
const smallUserWord = "user".fontsize(3).sub();
const smallCompWord = "comp".fontsize(3).sub();
function win(user, computer) {
    const userScore_div = document.getElementById(user);
    userScore ++;

    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;

    result_p.innerHTML = `${user}${smallUserWord} win to ${computer}${smallCompWord}. YOU WIN!`;
    userScore_div.classList.add('green-glow');
    
    setTimeout( () => userScore_div.classList.remove('green-glow'), 500);

    if( userScore == 7 ) {
        prompt(`User Wins! Score: ${userScore_span.innerHTML} x ${compScore_span.innerHTML}`);
        getScoreTable(userScore_span.innerHTML,compScore_span.innerHTML);

        document.onchange = saveGame();
    }

}

function lose(user, computer) {
    const userScore_div = document.getElementById(user);
    compScore ++;

    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;

    result_p.innerHTML = `${user}${smallUserWord} lose for ${computer}${smallCompWord}. YOU LOSE!`;
    userScore_div.classList.add('red-glow');

    setTimeout( () => userScore_div.classList.remove('red-glow'), 500);

    if( compScore == 7 ) {
        prompt(`Computer Wins! Score: ${userScore_span.innerHTML} x ${compScore_span.innerHTML}`);
        getScoreTable(userScore_span.innerHTML,compScore_span.innerHTML);

        document.onchange = saveGame();
    }

}

function draw(user, computer) {
    const userScore_div = document.getElementById(user);

    result_p.innerHTML = `${user}${smallUserWord} draw with ${computer}${smallCompWord}. DRAW!`;
    userScore_div.classList.add('gray-glow');

    setTimeout( () => userScore_div.classList.remove('gray-glow'), 500);
}
//-------

function restartGame() {
    history.go(0);
}

function getScoreTable (user, computer) {
    let $score_table = $('.scoreTable');

    document.onchange = saveGame();
    user = localStorage.getItem(userScore_span);
    compputer = localStorage.getItem(compScore_span);
    console.log(user + " x " + computer);

    $score_table.append( `<tr> <td>${round}</td><td>${user}</td><td>${computer}</td> </tr>` );
    round++;
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

function saveGame() {
    let compScore_storage = compScore_span.innerHTML;
    let userScore_storage = userScore_span.innerHTML;

    localStorage.setItem('user-score', userScore_storage);
    localStorage.setItem('comp-score', compScore_storage);
}


function main() {
    rock_div.addEventListener( 'click', () => game("pedra") );
    paper_div.addEventListener( 'click', () => game("papel") );
    scissors_div.addEventListener( 'click', () => game("tesoura") );
    restart_button.addEventListener( 'click', () => restartGame() );
}

main();




