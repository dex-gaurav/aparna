document.getElementById('login-btn').addEventListener('click', function() {
    // Fetch the login.html content
    fetch('login.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('loginContent').innerHTML = data; // Load content into the modal
            document.getElementById('loginModal').style.display = 'block'; // Show the modal
        })
        .catch(error => console.error('Error loading the login page:', error));
});

// Close the modal when the close button is clicked
document.getElementById('closeModal').addEventListener('click', function() {
    document.getElementById('loginModal').style.display = 'none'; // Hide the modal
});

// Close the modal when clicking outside of the modal content