document.addEventListener('DOMContentLoaded', () => {
    const signInForm = document.getElementById('sign-in-form');
    const signUpForm = document.getElementById('sign-up-form');

    const displayMessage = (element, message, isSuccess) => {
        element.textContent = message;
        element.className = 'message ' + (isSuccess ? 'success' : 'error');
        element.style.display = 'block';
    };

    signUpForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const username = document.getElementById('register-username').value;
        const password = document.getElementById('register-password').value;
        const repeatPassword = document.getElementById('register-repeat-password').value;
        const email = document.getElementById('register-email').value;
        const registerMessage = document.getElementById('register-message');

        // Basic client-side validation
        if (!username || !password || !repeatPassword || !email) {
            displayMessage(registerMessage, 'All fields are required.', false);
            return;
        }

        if (password !== repeatPassword) {
            displayMessage(registerMessage, 'Passwords do not match!', false);
            return;
        }

        try {
            const response = await fetch('http://localhost:3000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password, email })
            });
        
            // Check response status and parse JSON
            if (response.ok) {
                const data = await response.json();
                displayMessage(registerMessage, 'Registration successful!', true);
                document.getElementById('tab-1').checked = true;
            } else {
                const data = await response.json();
                console.error('Registration failed:', data.error); // Log the error to console
                displayMessage(registerMessage, `Registration failed: ${data.error}`, false);
            }
        } catch (error) {
            console.error('Error:', error); // Log the error to console
            displayMessage(registerMessage, 'An error occurred. Please try again.', false);
        }
        
    });

    signInForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;
        const loginMessage = document.getElementById('login-message');

        // Basic client-side validation
        if (!username || !password) {
            displayMessage(loginMessage, 'Please provide username and password.', false);
            return;
        }

        try {
            const response = await fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });

            // Check response status and parse JSON
            if (response.ok) {
                const data = await response.json();
                displayMessage(loginMessage, 'Login successful!', true);
                localStorage.setItem('token', data.token);
                // Redirect to another page or update the UI
            } else {
                const data = await response.json();
                displayMessage(loginMessage, `Login failed: ${data.error}`, false);
            }
        } catch (error) {
            console.error('Error:', error);
            displayMessage(loginMessage, 'An error occurred. Please try again.', false);
        }
    });
});
