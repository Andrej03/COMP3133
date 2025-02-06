const signupForm = document.querySelector('#signup-form');

signupForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const username = document.querySelector('#signup-username').value;
  const password = document.querySelector('#signup-password').value;

  fetch('/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  })
    .then(res => res.json())
    .then(data => {
      if (data.message === 'User created') {
        alert('User created successfully! Please log in.');
        document.getElementById('login-tab').click();
      } else {
        alert('Error creating user');
      }
    })
    .catch(err => console.log(err));
});