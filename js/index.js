var input =document.getElementById("username");

input.addEventListener("input", function() {
    
    if (input.value.length > 10){

        input.value = input.value.slice(0, 10);
    }

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
    }

    // Check if password is empty
    if (password.trim() === "") {
        document.getElementById("passwordError").innerText = "Password is required";
        return;
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