// This is a simple authentication system for demonstration purposes.
// In a real application, never store passwords in plain text or in client-side code.
const validCredentials = {
    username: "admin",
    password: "password123"
};

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === validCredentials.username && password === validCredentials.password) {
        // Successful login
        localStorage.setItem('isLoggedIn', 'true');
        window.location.href = 'index.html'; // Redirect to the job posting form
    } else {
        alert('Invalid username or password');
    }
});