
$(document).ready(function(){
    var $input = $('#username');

    $input.on("input", function(){
        if ($input.val().length > 10){
            $input.val($input.val().slice(0,10));
        }
    });

    $('#suLink').on('click',function(){
        window.location.href = "signup.html";
    });

    $('#logLink').on('click',function(){
        window.location.href = "login.html";
    });

    $('#fgLink').on('click',function(){
        window.location.href = "fgpass.html";
    });

    $('#fgUsername').on('click', function(){
        window.location.href = "changeusername.html";
    });

    $('#sgSubmit').on('click', function(){
        
        function validateEmail(email){
            var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }

        var username = $('#username').val();
        var password = $('#password').val();
        var email = $('#email').val();
        
        var exData = localStorage.getItem('dataList');
        var exUser = exData ? JSON.parse(exData):[ ];
        var emailExist = exUser.some(function(user){
            return user.email === email;
        });
        var usernameExist = exUser.some((user) => {
            return user.username === username;
        });

        var dataValid = true;

        if (username.trim() === "" && password.trim() === "" && email.trim() == ""){
            $('#usernameError').text('Please fill up this field.');
            $('#passwordError').text('Please fill up this field.');
            $('#emailError').text('Please fill up this field.');
            dataValid = false;
        }else{
            $('#usernameError').text('');
            $('#passwordError').text('');
            $('#emailError').text('');
        }

        if (username.trim()==="" || !/^[a-zA-Z0-9_]+$/.test(username) || (usernameExist)){
            if (username.trim () === ""){
                $('#usernameError').text('Please fill up this field.');
                dataValid = false;
            }else if (!/^[a-zA-Z0-9_]+$/.test(username)){
                $('#usernameError').text('Username must only consists of letters, numbers, and underscore only');
                dataValid = false;
            }else if(usernameExist){
                $('#usernameError').text('Username has already taken.');
                dataValid = false;
            }
        }else{
            $('#usernameError').text('');
        }

        if (password.trim()==="" || password.length < 6 || password.length > 12){
            if (password.trim()===""){
                $('#passwordError').text('Please fill up this field');
                dataValid = false;
            }else if (password.length < 6 || password.length > 12){
                $('#passwordError').text('Passwords must be 6 to 12 characters long.');
            }
        }else {
            $('#passwordError').text('');
        }
         
        if(email.trim() === "" || !validateEmail(email) || (emailExist)){
            if (email.trim() === ""){
                $('#emailError').text('Please fill up this field.');
                dataValid = false;
            }else if(!validateEmail(email)){
                $('#emailError').text('Please input valid email address');
                dataValid = false;
            }else if (emailExist){
                $('#emailError').text('Email exists, use another email.');
                dataValid = false;
            }
        }else {
            $('#emailError').text(''); 
        }

        if (dataValid){

            var userData = {
                username: username,
                password: password,
                email: email
            }

            exUser.push(userData);

            localStorage.setItem('dataList', JSON.stringify(exUser));


            window.location.href = "login.html";
            alert ("Data saved successfully");
        }
    });


    $('#liSubmit').on('click', function(){
        var username = $('#username').val();
        var password = $('#password').val();
        var userList = JSON.parse(localStorage.getItem('dataList'));

        if (!userList || userList.length === 0){
            alert ("No user data found, sign up first");
            return;
        }

        var userFound = false;

        for (var i = 0; i < userList.length; i++){
            var userData = userList[i];

            if (userData.username === username && userData.password === password){
                userFound = true;
                $('#usernameError').text('');
                $('#passwordError').text('');
                alert("Login Successfully!!");
            }
        }
        

        if(!userFound){
            if (username.trim() === "" && password.trim() === ""){
                $('#usernameError').text('Username is required');
                $('#passwordError').text('Password is required');
                return;
            }else if (username.trim() === ""){
                $('usernameError').text('Username is required.');
                return;
            } else if (!/^[a-zA-Z0-9_]+$/.test(username)) {
                $('#usernameError').text('You input invalid content, Try again.');
                return;
            }  else if (password.trim() === ""){
                $('#passwordError').text('Password is required');
            }else{
                $('#usernameError').text('');
                $('#passwordError').text('');
                alert("Invalid credentials, please try again.");
            } 
        } 
   });

    var usernameError = $('#usernameError');
    var newPasswordInput = $('#password');
    var confirmPasswordInput = $('#confirmPassword');
    var submitButton = $('#fgButton');

    $('#unChecker').on('click',function(){
        function usernameValidator(validUsername){
            var storedData = JSON.parse(localStorage.getItem('dataList'));

            for (var i = 0; i < storedData.length; i++){
                var userData = storedData[i];

               if (userData.username === validUsername){
                return true;
               }
            }
    
           return false;
        }

        var username = $('#username').val();

        if (usernameValidator(username)){
            usernameError.text('Username is valid').css('color', 'green');
            newPasswordInput.prop('disabled', false);
            confirmPasswordInput.prop('disabled', false);
            submitButton.prop('disabled', false);
        }else{
            usernameError.text('Username is not valid').css('color', 'red');
            newPasswordInput.prop('disabled', true);
            confirmPasswordInput.prop('disabled', true);
            submitButton.prop('disabled', true);
        }

    });

    var emailError = $('#emailError');
    var newUsernameInput = $('#username');
    var confirmUsernameInput = $('#confirmUsername');
    var submitButton = $('#fgUnButton');

    $('#emChecker').on('click',function(){
        function usernameValidator(validEmail){
            var storedData = JSON.parse(localStorage.getItem('dataList'));

            for (var i = 0; i < storedData.length; i++){
                var userData = storedData[i];

               if (userData.email === validEmail){
                return true;
               }
            }
    
           return false;
        }

        var email = $('#email').val();

        if (usernameValidator(email)){
            emailError.text('Email is valid').css('color', 'green');
            newUsernameInput.prop('disabled', false);
            confirmUsernameInput.prop('disabled', false);
            submitButton.prop('disabled', false);
        }else{
            emailError.text('Email is not valid').css('color', 'red');
            newUsernameInput.prop('disabled', true);
            confirmUsernameInput.prop('disabled', true);
            submitButton.prop('disabled', true);
        }

    });

    $('#fgButton').on('click', function(){
        var storedData = JSON.parse(localStorage.getItem('dataList'));

        var userChange = $('#username').val();

        var userIndex = storedData.findIndex(function(user){
            return user.username === userChange;
        });

        var password = $('#password').val();
        var confirmPassword = $('#confirmPassword').val();

        if(password === ""){
            $('#passwordError').text('Password is required');
            return
        }else{
            $('#passwordError').text('');
        }

        if(password != confirmPassword){
                $('#passwordError1').text('Password not match'); 
        }else{
            
            storedData[userIndex].password = password;
            localStorage.setItem('dataList', JSON.stringify(storedData));
            window.location.href = "login.html";
            alert("Password changed successfully!!");
        }

    });

    $('#fgUnButton').on('click', function(){
        $('#UsernameError').text('');
        $('#UsernameError1').text('');

        var storedData = JSON.parse(localStorage.getItem('dataList'));

        var emailChange = $('#email').val();

        var userIndex = storedData.findIndex(function(user){
            return user.email === emailChange;
        });

        var username = $('#username').val();
        var confirmUsername = $('#confirmUsername').val();

        if(username === ""){
            $('#usernameError').text('Username is required');
            return
        }else if (!/^[a-zA-Z0-9_]+$/.test(username)){
            $('#usernameError').text('Username must only consists of letters, numbers, and underscore only')
        }else{
            $('#UsernameError').text('');
        }

        if(username != confirmUsername){
                $('#usernameError1').text('Usernames not match'); 
        }else{
            $('#UsernameError').text('');
            $('#UsernameError1').text('');
            storedData[userIndex].username = username;
            localStorage.setItem('dataList', JSON.stringify(storedData));
            window.location.href = "login.html";
            alert("Username changed successfully!!");
        }

    });
    
});


// var input =document.getElementById("username");

// input.addEventListener("input", function() {
    
//     if (input.value.length > 10){

//         input.value = input.value.slice(0, 10);
//     }

// });

// function goToSuPage() {
//     window.location.href = "signup.html";
// }



// function goToLoginPage() {
//     window.location.href = "login.html";
// }



// function goToFgPage(){
//     window.location.href = "fgpass.html";
// }







// function validateForm() {

//     document.getElementById("usernameError").innerText = "";
//     document.getElementById("passwordError").innerText = "";

//     var username = document.getElementById("username").value;
//     var password = document.getElementById("password").value;

//     if (username.trim() === "" && password.trim() === "") {
//         document.getElementById("usernameError").innerText = "Username is required";
//         document.getElementById("passwordError").innerText = "Password is required";
//         return;
//     }

//     if (username.trim() === "") {
//         document.getElementById("usernameError").innerText = "Username is required";
//         return;
//     } else if (!/^[a-zA-Z0-9_]+$/.test(username)) {
//         document.getElementById('usernameError').innerText = 'Username can only contain letters, numbers, and underscores.';
//         return;
//     }else{
//         document.getElementById("usernameError").innerText = "";
//     }

//     if (password.trim() === "") {
//         document.getElementById("passwordError").innerText = "Password is required";
//         return;
//     }else{
//         document.getElementById("passwordError").innerText = "";
//     }


//     console.log("Username: " + username);
//     console.log("Password: " + password);
// }

// function validatePassword() {

//     document.getElementById("passwordError1").innerText= "";

//     var password = document.getElementById("password").value;
//     var confirmPassword = document.getElementById("confirmPassword").value;

//     if (password != confirmPassword) {
//         document.getElementById("passwordError1").innerText = "Password not match";
//         return false;
//     }

//     return true;
// }

// function saveData() {

//     var username = document.getElementById("username").value;
//     var password = document.getElementById("password").value;

//     var userData = {
//         username: username,
//         password: password
//     };

//     var jsonData = JSON.stringify(userData);

//     localStorage.setItem('userData',jsonData);

//     alert("Data save successfully!;")
// }



// function validateLogin (){

//     var username = document.getElementById("username").value;
//     var password = document.getElementById("password").value;

//     var userData = JSON.parse(localStorage.getItem('userData'));

//     if(userData && userData.username === username && userData.password === password){
//         alert("Login Successfully!");
//     }else{
//         if (username.trim() === "" && password.trim() === "") {
//             document.getElementById("usernameError").innerText = "Username is required";
//             document.getElementById("passwordError").innerText = "Password is required";
//             return;
//         }
//         if (username.trim() === "") {
//             document.getElementById("usernameError").innerText = "Username is required";
//             return;
//         } else if (!/^[a-zA-Z0-9_]+$/.test(username)) {
//             document.getElementById('usernameError').innerText = 'Username can only contain letters, numbers, and underscores.';
//             return;
//         }else{
//             document.getElementById("usernameError").innerText = "";
//         }
//         if (password.trim() === "") {
//             document.getElementById("passwordError").innerText = "Password is required";
//             return;
//         } else if (!/^[a-zA-Z0-9_]+$/.test(username)) {
//             document.getElementById('usernameError').innerText = 'Username can only contain letters, numbers, and underscores.';
//             return;
//         }else{
//             document.getElementById("passwordError").innerText = "";
//         }
//         alert("Please input correct credentials and try again.")
        
//     }
// }
 

// function usernameValidator(validUsername){

//     var storedData = localStorage.getItem('userData');

//     var parsedData = JSON.parse(storedData);

//     return parsedData && parsedData.username === validUsername;
// }

// $(document).ready(function(){
//     function usernameValidator(validUsername){
//         var storedData = localStorage.getItem('userData');

//         return (storedData !== null) && (JSON.parse(storedData).username == validUsername);
//     }
// });




// function fgPasswordCondition() {

//     var username = document.getElementById("username").value;
//     var usernameError = document.getElementById('usernameError');
//     var newPasswordInput = document.getElementById('password');
//     var confirmPasswordInput = document.getElementById('confirmPassword');
//     var submitButton = document.getElementById('fgButton');

//     if (usernameValidator(username)){
//         usernameError.innerText = 'Username is valid.';
//         usernameError.style.color = 'green';
//         newPasswordInput.disabled = false;
//         confirmPasswordInput.disabled = false;
//         submitButton.disabled = false;
//     }else{
//         usernameError.innerText = 'Username not valid.';
//         usernameError.style.color = 'red';
//         newPasswordInput.disabled = true;
//         confirmPasswordInput.disabled = true;
//         submitButton.disabled = true;
//     }
// }




// function changePassword () {
    
//     document.getElementById("passwordError").innerText = "";
//     document.getElementById("passwordError1").innerText= "";

//     var storedData = localStorage.getItem('userData');
//     var parsedData = JSON.parse(storedData);
//     var password = document.getElementById("password");
//     var confirmPassword = document.getElementById('confirmPassword');

   
   

//     if (password.value.trim() === "") {
//         document.getElementById("passwordError").innerText = "Password is required";
//         return;
//     }else{
//         document.getElementById("passwordError").innerText = "";
//     }

//     if (confirmPassword.value.trim() === ""){
//         document.getElementById("passwordError1").innerText = "Please fill up the form"
//         return false;
//     }else if(password.value != confirmPassword.value) {
//         document.getElementById("passwordError1").innerText = "Password not match";
//     }else{
//         parsedData.password = password.value;
//         localStorage.setItem('userData',JSON.stringify(parsedData));
//         alert("Password changed successfully");
//         goToLoginPage()
//         return true;
        
//     }  

// }