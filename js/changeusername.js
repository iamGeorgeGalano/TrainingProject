$(document).ready(function() {
    var $input = $('#username');
  
    $input.on("input", function() {
      if ($input.val().length > 10) {
        $input.val($input.val().slice(0, 10));
      }
    });
  
    $('#fgLink').on('click', function() {
      window.location.href = "fgpass.html";
    });
  
    $('#logLink').on('click', function() {
      window.location.href = "login.html";
    });
  
    var emailError = $('#emailError');
    var newUsernameInput = $('#username');
    var confirmUsernameInput = $('#confirmUsername');
    var submitButton = $('#fgUnButton');
  
    $('#emChecker').on('click', function() {
      function usernameValidator(validEmail) {
        var storedData = JSON.parse(localStorage.getItem('dataList'));
  
        for (var i = 0; i < storedData.length; i++) {
          var userData = storedData[i];
  
          if (userData.email === validEmail) {
            return true;
          }
        }
  
        return false;
      }
  
      var email = $('#email').val();
  
      if (usernameValidator(email)) {
        emailError.text('Email is valid').css('color', 'green');
        newUsernameInput.prop('disabled', false);
        confirmUsernameInput.prop('disabled', false);
        submitButton.prop('disabled', false);
      }
      else {
        emailError.text('Email is not valid').css('color', 'red');
        newUsernameInput.prop('disabled', true);
        confirmUsernameInput.prop('disabled', true);
        submitButton.prop('disabled', true);
      }
  
    });
  
    $('#fgUnButton').on('click', function() {
  
      $('#UsernameError').text('');
      $('#UsernameError1').text('');
  
      var storedData = JSON.parse(localStorage.getItem('dataList'));
  
      var emailChange = $('#email').val();
  
      var userIndex = storedData.findIndex(function(user) {
        return user.email === emailChange;
      });
  
      var username = $('#username').val();
      var confirmUsername = $('#confirmUsername').val();
      var validUsername = true;
  
  
      if (username != confirmUsername) {
        $('#usernameError1').text('Usernames not match');
      }
      else {
        $('#usernameError1').text('');
      }
  
      if (username === "" || !/^[a-zA-Z0-9_]+$/.test(username)) {
        if (username === "") {
          $('#usernameError').text('Username is required');
          validUsername = false;
        }
        else if (!/^[a-zA-Z0-9_]+$/.test(username)) {
          $('#usernameError').text('Username must only consists of letters, numbers, and underscore only');
          validUsername = false;
        }
  
      }
      else {
        $('#UsernameError').text('');
  
      }
  
      if (username != confirmUsername) {
        $('#usernameError1').text('Usernames not match');
        validUsername = false;
      }
      else {
        $('#usernameError1').text('');
      }
  
      if (validUsername) {
        storedData[userIndex].username = username;
        localStorage.setItem('dataList', JSON.stringify(storedData));
        window.location.href = "login.html";
        alert("Username changed successfully!!");
      }
    });
  
  });
  
