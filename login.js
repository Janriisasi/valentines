document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    const errorMessage = document.getElementById("errorMessage");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Hardcoded username and password (for simplicity)
        const USERNAME = "Bal";
        const PASSWORD = "010524";

        if (username === USERNAME && password === PASSWORD) {
            window.location.href = "index.html";
        } else {
            errorMessage.textContent = "hala way kamaan, di mo nako love? omki:(";
            errorMessage.style.display = "block";
        }
    });
});