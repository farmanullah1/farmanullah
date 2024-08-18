// scripts.js
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    if (username === 'user' && password === 'password') {
        document.getElementById('loginMessage').textContent = 'Login successful!';
        document.getElementById('loginMessage').style.color = 'green';
        setTimeout(function() {
            window.location.href = 'home.html';
        }, 1000);
    } else {
        document.getElementById('loginMessage').textContent = 'Invalid username or password';
    }
});

document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('signupUsername').value;
    const password = document.getElementById('signupPassword').value;
    const email = document.getElementById('signupEmail').value;

    // Here you would add code to handle sign-up, such as sending data to a server
    document.getElementById('signupMessage').textContent = 'Sign up successful!';
    document.getElementById('signupMessage').style.color = 'green';
});

function showLogin() {
    document.getElementById('loginForm').classList.add('active');
    document.getElementById('signupForm').classList.remove('active');
}

function showSignUp() {
    document.getElementById('loginForm').classList.remove('active');
    document.getElementById('signupForm').classList.add('active');
}

// Initialize the form visibility
showLogin();
