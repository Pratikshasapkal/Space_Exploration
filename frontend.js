function login() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
  
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    })
    .then(response => {
      if (response.ok) {
        // Redirect to index.html on successful login
        window.location.href = 'index.html';
      } else {
        // Display error message
        return response.json().then(data => {
          document.getElementById('message').innerText = data.error || 'Error logging in. Please try again.';
        });
      }
    })
    .catch(error => {
      console.error('Error logging in:', error);
      document.getElementById('message').innerText = 'Error logging in. Please try again.';
    });
  }
  