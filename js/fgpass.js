$(document).ready(function() {

    var $input = $('#username');
  
    $input.on("input", function() {
      if ($input.val().length > 10) {
        $input.val($input.val().slice(0, 10));
      }
    });
  
    var usernameError = $('#usernameError');
    var newPasswordInput = $('#password');
    var confirmPasswordInput = $('#confirmPassword');
    var submitButton = $('#fgButton');
  
    $('#unChecker').on('click', function() {
      function usernameValidator(validUsername) {
        var storedData = JSON.parse(localStorage.getItem('dataList'));
  
        for (var i = 0; i < storedData.length; i++) {
          var userData = storedData[i];
  
          if (userData.username === validUsername) {
            return true;
          }
        }
  
        return false;
      }
  
      var username = $('#username').val();
  
      if (usernameValidator(username)) {
        usernameError.text('Username is valid').css('color', 'green');
        newPasswordInput.prop('disabled', false);
        confirmPasswordInput.prop('disabled', false);
        submitButton.prop('disabled', false);
      }
      else {
        usernameError.text('Username is not valid').css('color', 'red');
        newPasswordInput.prop('disabled', true);
        confirmPasswordInput.prop('disabled', true);
        submitButton.prop('disabled', true);
      }
  
    });
  
    $('#fgButton').on('click', function() {
      var storedData = JSON.parse(localStorage.getItem('dataList'));
  
      var userChange = $('#username').val();
  
      var userIndex = storedData.findIndex(function(user) {
        return user.username === userChange;
      });
  
      var password = $('#password').val();
      var confirmPassword = $('#confirmPassword').val();
      var validPassword = true;
  
      if (password === "" || password.length < 6 || password.length > 12) {
  
        if (password === "") {
          $('#passwordError').text('Password is required');
          validPassword = false;
        }
        else if (password.length < 6 || password.length > 12) {
          $('#passwordError').text('Password must consists of 6 to 12 characters');
          validPassword = false;
        }
      }
      else {
        $('#passwordError').text('');
      }
  
      if (password != confirmPassword) {
        $('#passwordError1').text('Password not match');
        validPassword = false;
      }
      else {
        $('#passwordError1').text('')
      }
  
      if (validPassword) {
        storedData[userIndex].password = password;
        localStorage.setItem('dataList', JSON.stringify(storedData));
        window.location.href = "login.html";
        alert("Password changed successfully!!");
      }
    });
  
    $('#fgUsername').on('click', function() {
      window.location.href = "changeusername.html";
    });
  
    $('#logLink').on('click', function() {
      window.location.href = "login.html";
    });
  
  });
  