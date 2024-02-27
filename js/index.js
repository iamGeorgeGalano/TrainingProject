// var input =document.getElementById("username");

// input.addEventListener("input", function() {
    
//     if (input.value.length > 10){

//         input.value = input.value.slice(0, 10);
//     }

// });

$(document).ready(function(){
    var $input = $('#username');

    $input.on("input", function(){
        if ($input.val().length > 10){
            $input.val($input.val().slice(0,10));
        }
    });
});

// function goToSuPage() {
//     window.location.href = "signup.html";
// }

$(document).ready(function(){
    $('#suLink').on('click',function(){
        window.location.href = "signup.html";
    });
});

// function goToLoginPage() {
//     window.location.href = "login.html";
// }

$(document).ready(function(){
    $('#logLink').on('click',function(){
        window.location.href = "login.html";
    });;
});

// function goToFgPage(){
//     window.location.href = "fgpass.html";
// }

$(document).ready(function(){
    $('#fgLink').on('click',function(){
        window.location.href = "fgpass.html";
    });
});




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

$(document).ready(function(){
    $('#sgSubmit').on('click', function(){
        var username = $('#username').val();
        var password = $('#password').val();
        
        var exData = localStorage.getItem('dataList');
        var exUser = exData ? JSON.parse(exData):[ ];

        if (username.trim() === "" && password.trim() === ""){
            $('#usernameError').text('Please fill up this field.');
            $('#passwordError').text('Please fill up this field.');
        }else{
            $('#usernameError').text('');
            $('#passwordError').text('');
        }

        if (username.trim()===""){
            $('#usernameError').text('Please fill up this field.');
        }else if (!/^[a-zA-Z0-9_]+$/.test(username)){
            $('#usernameError').text('Username must only consists of letters, numbers, and underscore only')
        }else if(password.trim()===""){
            $('#passwordError').text('Please fill up this field');
        }else{
            $('#usernameError').text('')
            $('#passwordError').text('')

            var userData = {
                username: username,
                password: password
            }

            exUser.push(userData);

            localStorage.setItem('dataList', JSON.stringify(exUser));
    
    
           window.location.href = "login.html";
             alert ("Data saved successfully");
        };

    });
});

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

$(document).ready(function(){
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
}); 

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

$(document).ready(function(){

    var usernameError = $('#usernameError');
    var newPasswordInput = $('#password');
    var confirmPasswordInput = $('#confirmPassword');
    var submitButton = $('#fgButton');

    $('#unChecker').on('click',function(){
        function usernameValidator(validUsername){
            var storedData = JSON.parse(localStorage.getItem('dataList'));

            for (var i = 0; i < storedData.length; i++){
                var userData = storedData[i];
            }
    
            return (storedData !== null) && (userData.username == validUsername);
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
});

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


$(document).ready(function(){
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
});

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