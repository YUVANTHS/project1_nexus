function Form() {
    var Username = document.getElementById("Username").value;
    var password = document.getElementById("Password").value;
    var confirmPassword = document.getElementById("C-Password").value;

    var patternUsername = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    var patternPassword = /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{8,}$/;
    var patternConfirmPassword = /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{8,}$/; 

    if (patternUsername.test(Username)) {
        console.log("Valid Username: " + Username);
    } else {
        window.alert("Invalid Username Format. Please use only letters and optional special characters like ',. -");
    }

    if (patternPassword.test(password)) {
        console.log("Valid Password: " + password);
    } else {
        window.alert("Invalid Password Format. Please use at least 8 characters, including letters and numbers.");
    }

    if (patternConfirmPassword.test(confirmPassword) && password === confirmPassword) {
        console.log("Valid Confirm Password: " + confirmPassword);
    } else {
        window.alert("Invalid Confirm Password Format or Passwords do not match.");
    }
}
