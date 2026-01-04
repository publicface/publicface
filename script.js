document.addEventListener("DOMContentLoaded", function () {

    const signupForm = document.getElementById("signupForm");
    const loginForm = document.getElementById("loginForm");

    // Switch to Login form
    document.getElementById("showLogin").onclick = function () {
        signupForm.style.display = "none";
        loginForm.style.display = "block";
    };

    // Switch to Sign-Up form
    document.getElementById("showSignup").onclick = function () {
        loginForm.style.display = "none";
        signupForm.style.display = "block";
    };

    // SIGNUP
    document.querySelector(".signup-submit").onclick = function () {

        const name = document.getElementById("signupName").value.trim();
        const email = document.getElementById("signupEmail").value.trim();
        const password = document.getElementById("signupPassword").value.trim();

        if (!name || !email || !password) {
            alert("সব ঘর পূরণ করুন");
            return;
        }

        // Save to Local Storage
        localStorage.setItem("publicface_user", JSON.stringify({
            name: name,
            email: email,
            password: password
        }));

        alert("Sign up successful");

        // Show Login form after Sign-Up
        signupForm.style.display = "none";
        loginForm.style.display = "block";
    };

    // LOGIN
    document.querySelector(".login-submit").onclick = function () {

        const email = document.getElementById("loginEmail").value.trim();
        const password = document.getElementById("loginPassword").value.trim();

        const user = JSON.parse(localStorage.getItem("publicface_user"));

        if (!user) {
            alert("No account found. Please sign up first");
            return;
        }

        if (email === user.email && password === user.password) {
            alert("Login successful");
        } else {
            alert("Wrong email or password");
        }
    };

});