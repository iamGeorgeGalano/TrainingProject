$(document).ready(function() {
    var $input = $('#username');
  
    $input.on("input", function() {
      if ($input.val().length > 10) {
        $input.val($input.val().slice(0, 10));
      }
    });
  
    $('#logLink').on('click', function() {
      window.location.href = "login.html";
    });
  
    $('#sgSubmit').on('click', function() {
  
      function validateEmail(email) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      }
  
      var username = $('#username').val();
      var password = $('#password').val();
      var email = $('#email').val();
  
      var exData = localStorage.getItem('dataList');
      var exUser = exData ? JSON.parse(exData) : [];
      var emailExist = exUser.some(function(user) {
        return user.email === email;
      });
      var usernameExist = exUser.some((user) => {
        return user.username === username;
      });
  
      var dataValid = true;
  
      if (username.trim() === "" && password.trim() === "" && email.trim() == "") {
        $('#usernameError').text('Please fill up this field.');
        $('#passwordError').text('Please fill up this field.');
        $('#emailError').text('Please fill up this field.');
        dataValid = false;
      }
      else {
        $('#usernameError').text('');
        $('#passwordError').text('');
        $('#emailError').text('');
      }
  
      if (username.trim() === "" || !/^[a-zA-Z0-9_]+$/.test(username) || (usernameExist)) {
        if (username.trim() === "") {
          $('#usernameError').text('Please fill up this field.');
          dataValid = false;
        }
        else if (!/^[a-zA-Z0-9_]+$/.test(username)) {
          $('#usernameError').text('Username must only consists of letters, numbers, and underscore only');
          dataValid = false;
        }
        else if (usernameExist) {
          $('#usernameError').text('Username has already taken.');
          dataValid = false;
        }
      }
      else {
        $('#usernameError').text('');
      }
  
      if (password.trim() === "" || password.length < 6 || password.length > 12) {
        if (password.trim() === "") {
          $('#passwordError').text('Please fill up this field');
          dataValid = false;
        }
        else if (password.length < 6 || password.length > 12) {
          $('#passwordError').text('Passwords must be 6 to 12 characters long.');
        }
      }
      else {
        $('#passwordError').text('');
      }
  
      if (email.trim() === "" || !validateEmail(email) || (emailExist)) {
        if (email.trim() === "") {
          $('#emailError').text('Please fill up this field.');
          dataValid = false;
        }
        else if (!validateEmail(email)) {
          $('#emailError').text('Please input valid email address');
          dataValid = false;
        }
        else if (emailExist) {
          $('#emailError').text('Email exists, use another email.');
          dataValid = false;
        }
      }
      else {
        $('#emailError').text('');
      }
  
      if (dataValid) {
  
        var userData = {
          username: username,
          password: password,
          email: email
        }
  
        exUser.push(userData);
  
        localStorage.setItem('dataList', JSON.stringify(exUser));
  
  
        window.location.href = "login.html";
        alert("Data saved successfully");
      }
    });
  
  
  });
  