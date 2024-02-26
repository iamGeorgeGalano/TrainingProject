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




function validateForm() {
    // Clear previous error messages
    document.getElementById("usernameError").innerText = "";
    document.getElementById("passwordError").innerText = "";

    // Get values of username and password fields
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username.trim() === "" && password.trim() === "") {
        document.getElementById("usernameError").innerText = "Username is required";
        document.getElementById("passwordError").innerText = "Password is required";
        return;
    }


    // Check if username is empty
    if (username.trim() === "") {
        document.getElementById("usernameError").innerText = "Username is required";
        return;
    } else if (!/^[a-zA-Z0-9_]+$/.test(username)) {
        document.getElementById('usernameError').innerText = 'Username can only contain letters, numbers, and underscores.';
        return;
    }else{
        document.getElementById("usernameError").innerText = "";
    }
    // Check if password is empty
    if (password.trim() === "") {
        document.getElementById("passwordError").innerText = "Password is required";
        return;
    }else{
        document.getElementById("passwordError").innerText = "";
    }

    // If both fields are filled, proceed with login
    console.log("Username: " + username);
    console.log("Password: " + password);
}

function validatePassword() {

    document.getElementById("passwordError1").innerText= "";

    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    // Check if the confirm password match in new password
    if (password != confirmPassword) {
        document.getElementById("passwordError1").innerText = "Password not match";
        return false;
    }

    return true;
}

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
        var userData = {
            username: username,
            password: password
        };
        var jsonData = JSON.stringify(userData);

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
            localStorage.setItem('userData', jsonData)
            window.location.href = "login.html";
            alert("Data saved successfully.")
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
        var userData = JSON.parse(localStorage.getItem('userData'));

        if (userData && userData.username === username && userData.password === password){
            alert("Login Successfully!!")
        }else{
            if (username.trim() === "" && password.trim() === ""){
            $('#usernameError').text('Username is required');
            $('#passwordError').text('Password is required');
            return;
        }

        if (username.trim() === ""){
            $('usernameError').text('Username is required.');
            return;
        }else if (!/^[a-zA-Z0-9_]+$/.test(username)) {
            $('#usernameError').text('You input invalid content, Try again.');
            return;
        }else if (password.trim() === ""){
            $('#passwordError').text('Password is required');
        }else{
            $('#usernameError').text('');
            $('#passwordError').text('');
            alert("Invalid credentials, please try again.");
        }      
      }       
   });
}); 

function usernameValidator(validUsername){

    var storedData = localStorage.getItem('userData');

    var parsedData = JSON.parse(storedData);

    return parsedData && parsedData.username === validUsername;
}

function fgPasswordCondition() {

    var username = document.getElementById("username").value;
    var usernameError = document.getElementById('usernameError');
    var newPasswordInput = document.getElementById('password');
    var confirmPasswordInput = document.getElementById('confirmPassword');
    var submitButton = document.getElementById('fgButton');

    if (usernameValidator(username)){
        usernameError.innerText = 'Username is valid.';
        usernameError.style.color = 'green';
        newPasswordInput.disabled = false;
        confirmPasswordInput.disabled = false;
        submitButton.disabled = false;
    }else{
        usernameError.innerText = 'Username not valid.';
        usernameError.style.color = 'red';
        newPasswordInput.disabled = true;
        confirmPasswordInput.disabled = true;
        submitButton.disabled = true;
    }
}

function changePassword () {
    
    document.getElementById("passwordError").innerText = "";
    document.getElementById("passwordError1").innerText= "";

    var storedData = localStorage.getItem('userData');
    var parsedData = JSON.parse(storedData);
    var password = document.getElementById("password");
    var confirmPassword = document.getElementById('confirmPassword');

   
   

    if (password.value.trim() === "") {
        document.getElementById("passwordError").innerText = "Password is required";
        return;
    }else{
        document.getElementById("passwordError").innerText = "";
    }

    // if (confirmPassword.value.trim === ""){
    //     document.getElementById("passwordError1").innerText = "Please cofirm your password";
    // }

    if (password.value != confirmPassword.value) {
        document.getElementById("passwordError1").innerText = "Password not match";
        return false;
    }else{
        parsedData.password = password.value;
        localStorage.setItem('userData',JSON.stringify(parsedData));
        alert("Password changed successfully");
        goToLoginPage()
        return true;
        
    }

    

}