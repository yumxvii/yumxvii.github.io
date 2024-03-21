function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function validatePassword(password) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+}{":;'?/>.<,])(?=.{8,})/;
    return regex.test(password);
}

document.addEventListener("DOMContentLoaded", function() {
    const signUpForm = document.querySelector("#signup form");

    function handleSignUp(event) {
        event.preventDefault(); 

        // Retrieve form input values
        const firstName = signUpForm.querySelector("#firstname").value.trim();
        const lastName = signUpForm.querySelector("#lastname").value.trim();
        const email = signUpForm.querySelector("#email").value.trim();
        const password = signUpForm.querySelector("#password").value;
        const reEnteredPassword = signUpForm.querySelector("#repassword").value;
        const emailUpdates = signUpForm.querySelector("#emailUpdates").checked;

        if (firstName === "") {
            alert("Please enter your first name.");
            return;
        }

        if (lastName === "") {
            alert("Please enter your last name.");
            return;
        }

        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (!validatePassword(password)) {
            alert("Please enter a valid password (at least 8 characters long, one uppercase letter, one lowercase letter, and one symbol).");
            return;
        }

        if (password !== reEnteredPassword) {
            alert("Passwords do not match.");
            return;
        }

        alert("Sign-up successful!"); 

        // Redirect to another page after successful sign up
        window.location.href = "login.html"; // Replace "another-page.html" with the URL of the page you want to redirect to
    }

    // Add an event listener to the form submit event using the correct function name
    signUpForm.addEventListener("submit", handleSignUp);
});

document.addEventListener("DOMContentLoaded", function() {
    const googleButton = document.getElementById("google-button");
    const facebookButton = document.getElementById("facebook-button");

    googleButton.addEventListener("click", function() {
        const confirmed = confirm("Continue with Google?");
        if (confirmed) {
            // If confirmed, you can redirect the user to the Google sign-in page
            window.location.href = "google-sign-in-page.html";
        }
    });

    facebookButton.addEventListener("click", function() {
        const confirmed = confirm("Continue with Facebook?");
        if (confirmed) {
            // If confirmed, you can redirect the user to the Facebook sign-in page
            window.location.href = "facebook-sign-in-page.html";
        }
    });
});

