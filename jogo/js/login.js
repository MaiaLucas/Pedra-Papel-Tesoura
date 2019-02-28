const username_input = document.getElementById('username');
const login_button   = document.getElementById('login'); 

function enterUsername (username) {
    username = username_input.innerHTML;
    localStorage.setItem('username', username);
}

function main() {
    login_button.addEventListener( 'click', () => enterUsername(username_input.innerHTML) );
}

main();