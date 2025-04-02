function validateForm(event) {
    event.preventDefault();
  
    let valid = true;
  
    document.getElementById('usernameError').innerHTML = "";
    document.getElementById('emailError').innerHTML = "";
    document.getElementById('passwordError').innerHTML = "";
    document.getElementById('confirmPasswordError').innerHTML = "";
    
    document.getElementById('username').classList.remove('error', 'success');
    document.getElementById('email').classList.remove('error', 'success');
    document.getElementById('password').classList.remove('error', 'success');
    document.getElementById('confirmPassword').classList.remove('error', 'success');
  
    let username = document.getElementById('username').value;
    if (username.length < 3 || username.length > 25) {
      document.getElementById('usernameError').innerHTML = "Username must be between 3 and 25 characters.";
      document.getElementById('username').classList.add('error');
      valid = false;
    } else {
      document.getElementById('username').classList.add('success');
    }
  
    let email = document.getElementById('email').value;
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email.trim() === "") {
      document.getElementById('emailError').innerHTML = "Email is required.";
      document.getElementById('email').classList.add('error');
      valid = false;
    } else if (!emailPattern.test(email)) {
      document.getElementById('emailError').innerHTML = "Please enter a valid email address.";
      document.getElementById('email').classList.add('error');
      valid = false;
    } else {
      document.getElementById('email').classList.add('success');
    }
  
    let password = document.getElementById('password').value;
    let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    if (password.trim() === "") {
      document.getElementById('passwordError').innerHTML = "Password is required.";
      document.getElementById('password').classList.add('error');
      valid = false;
    } else if (!passwordPattern.test(password)) {
      document.getElementById('passwordError').innerHTML = "Password must have at least 8 characters, including 1 lowercase, 1 uppercase, 1 number, and 1 special character (!@#$%^&*).";
      document.getElementById('password').classList.add('error');
      valid = false;
    } else {
      document.getElementById('password').classList.add('success');
    }
  
    let confirmPassword = document.getElementById('confirmPassword').value;
    if (confirmPassword.trim() === "") {
      document.getElementById('confirmPasswordError').innerHTML = "Please enter the password again.";
      document.getElementById('confirmPassword').classList.add('error');
      valid = false;
    } else if (confirmPassword !== password) {
      document.getElementById('confirmPasswordError').innerHTML = "Passwords do not match.";
      document.getElementById('confirmPassword').classList.add('error');
      valid = false;
    } else {
      document.getElementById('confirmPassword').classList.add('success');
    }
  
    if (valid) {
      document.getElementById('signUpForm').submit();
    }
  }
  