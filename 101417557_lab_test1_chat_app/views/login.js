const loginForm = document.querySelector('#login-form');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const username = document.querySelector('#login-username').value;
  const password = document.querySelector('#login-password').value;

  fetch('/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  })
    .then(res => res.json())
    .then(data => {
      if (data.success) {
        localStorage.setItem('username', username);
        localStorage.setItem('isLoggedIn', true);
        window.location.href = '/';
      } else {
        alert(data.message);
      }
    })
    .catch(err => console.log(err));
});
