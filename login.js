document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the values from the input fields
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple validation (you can replace these with your own logic)
    if (username === 'aparna' && password === 'aparna') {
        // Show success message
        document.getElementById('message').innerText = 'Login successful! Redirecting...';

        // Redirect to the main page after a short delay
        setTimeout(() => {
            window.location.href = 'index.html'; // Change to your main page URL
        }, 2000); // Redirect after 2 seconds
    } else {
        // Show error message
        document.getElementById('message').innerText = 'Invalid username or password. Please try again.';
        document.getElementById('message').style.color = 'red';
    }
});