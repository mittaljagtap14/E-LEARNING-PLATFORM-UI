// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    console.log("E-Learning Platform Initialized");

    // Welcome Message
    const heroSection = document.querySelector(".hero");
    const welcomeMessage = document.createElement("p");
    welcomeMessage.textContent = "Start your learning journey today! 🚀";
    welcomeMessage.style.color = "#0077cc";
    heroSection.appendChild(welcomeMessage);

    // Progress Tracking Example
    const progressSection = document.querySelector(".progress-tracking");

    // Add Progress Bar
    const progressTitle = document.createElement("h2");
    progressTitle.textContent = "Your Progress";
    const progressBar = document.createElement("progress");
    progressBar.setAttribute("value", "50"); // Starting progress value
    progressBar.setAttribute("max", "100");

    const progressText = document.createElement("p");
    progressText.textContent = "You have completed 50% of your courses.";

    // Append elements to the progress section
    progressSection.appendChild(progressTitle);
    progressSection.appendChild(progressBar);
    progressSection.appendChild(progressText);

    // Add a Button to Simulate Progress Update
    const updateButton = document.createElement("button");
    updateButton.textContent = "Update Progress";
    updateButton.style.marginTop = "20px";
    progressSection.appendChild(updateButton);

    // Update Progress Logic
    updateButton.addEventListener("click", () => {
        let currentValue = parseInt(progressBar.getAttribute("value"));
        if (currentValue < 100) {
            currentValue += 10; // Increment progress by 10%
            progressBar.setAttribute("value", currentValue);
            progressText.textContent = `You have completed ${currentValue}% of your courses.`;
        } else {
            alert("🎉 Congratulations! You've completed all your courses!");
        }
    });
});
// Form Validation Script with Redirection
document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("form");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");

    loginForm.addEventListener("submit", (e) => {
        let isValid = true;

        // Remove previous error messages
        document.querySelectorAll(".error-message").forEach(el => el.remove());

        // Validate Username
        if (usernameInput.value.trim() === "") {
            showError(usernameInput, "Username is required.");
            isValid = false;
        }

        // Validate Password
        if (passwordInput.value.trim() === "") {
            showError(passwordInput, "Password is required.");
            isValid = false;
        } else if (passwordInput.value.length < 4) {
            showError(passwordInput, "Password must be at least 4 characters.");
            isValid = false;
        }

        if (!isValid) {
            e.preventDefault(); // Prevent form submission if validation fails
        } else {
            // Simulate successful login (replace this with backend validation later)
            e.preventDefault(); // Prevent actual form submission for now
            alert("Login successful! Redirecting to Home...");
            window.location.href = "index.html"; // Redirect to the Home page
        }
    });

    // Function to show error message
    function showError(inputElement, message) {
        const errorElement = document.createElement("div");
        errorElement.classList.add("error-message");
        errorElement.innerText = message;
        inputElement.parentNode.appendChild(errorElement);
    }
});
