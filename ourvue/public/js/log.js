const loginBtn = document.getElementById("loginBtn");
        const signupBtn = document.getElementById("signupBtn");
        const loginForm = document.getElementById("loginForm");
        const signupForm = document.getElementById("signupForm");

        loginBtn.addEventListener("click", () => {
            loginForm.style.display = "block";
            signupForm.style.display = "none";
        });

        signupBtn.addEventListener("click", () => {
            loginForm.style.display = "none";
            signupForm.style.display = "block";
        });