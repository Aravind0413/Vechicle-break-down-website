// Handle login form submission
document.getElementById('login-form').addEventListener('submit', function(e) {
  e.preventDefault();
  // Get the username and password from the form
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  // Perform login API request and handle the response
  // You can use Axios or Fetch API to make the request to your back-end server
  // Example using Fetch API:
  fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  })
    .then(response => response.json())
    .then(data => {
      // Handle the login response
      if (data.success) {
        // Redirect the user to the dashboard
        window.location.href = '/dashboard';
      } else {
        // Display an error message
        alert(data.message);
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
});

// Handle registration form submission
document.getElementById('register-form').addEventListener('submit', function(e) {
  e.preventDefault();
  // Get the username, password, and email from the form
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const email = document.getElementById('email').value;
  // Perform registration API request and handle the response
  // You can use Axios or Fetch API to make the request to your back-end server
  // Example using Fetch API:
  fetch('/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password, email })
  })
    .then(response => response.json())
    .then(data => {
      // Handle the registration response
      if (data.success) {
        // Redirect the user to the login page
        window.location.href = '/login';
      } else {
        // Display an error message
        alert(data.message);
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
});

// Handle breakdown form submission
document.getElementById('breakdown-form').addEventListener('submit', function(e) {
  e.preventDefault();
  // Get the breakdown details from the form
  const vehicleNumber = document.getElementById('vehicle-number').value;
  const breakdownLocation = document.getElementById('breakdown-location').value;
  const description = document.getElementById('description').value;
  // Perform breakdown submission API request and handle the response
  // You can use Axios or Fetch API to make the request to your back-end server
  // Example using Fetch API:
  fetch('/submit-breakdown', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ vehicleNumber, breakdownLocation, description })
  })
    .then(response => response.json())
    .then(data => {
      // Handle the breakdown submission response
      if (data.success) {
        // Display a success message
        alert('Breakdown submitted successfully!');
        // Clear the form fields
        document.getElementById('vehicle-number').value = '';
        document.getElementById('breakdown-location').value = '';
        document.getElementById('description').value = '';
      } else {
        // Display an error message
        alert(data.message);
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
});
