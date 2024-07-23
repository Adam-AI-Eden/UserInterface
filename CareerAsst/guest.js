document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('guestForm');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const loginId = document.getElementById('loginId').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const agreeTerms = document.getElementById('agreeTerms').checked;

        if (password !== confirmPassword) {
            alert("Passwords do not match. Please try again.");
            return;
        }

        if (!agreeTerms) {
            alert("You must agree to the terms to register.");
            return;
        }

        // Here you would typically send this data to your server
        console.log('Guest registration:', { name, loginId, password });

        // For now, we'll just simulate a successful registration
        alert("Registration successful! You can now log in.");
        // Redirect to login page or dashboard as appropriate
        // window.location.href = 'login.html';
    });
});