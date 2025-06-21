function showError(input, message) {
    let error = input.nextElementSibling;
    if (!error || !error.classList.contains("error-msg")) {
        error = document.createElement("div");
        error.className = "error-msg";
        error.style.color = "red";
        error.style.fontSize = "14px";
        error.style.marginBottom = "0px";
        error.style.margintop = "0px";
        error.style.width = "300px";
        error.style.height = "10px";
        error.style.padding = "0px";
        input.parentNode.insertBefore(error, input.nextSibling);
    }
    error.textContent = message;
}

function clearErrors() {
    const errors = document.querySelectorAll(".error-msg");
    errors.forEach(e => e.remove());
}

document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); 
    clearErrors(); 

    let isValid = true;

    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    if (nameInput.value.trim() === "") {
        showError(nameInput, "Name is required.");
        isValid = false;
    }

    if (emailInput.value.trim() === "") {
        showError(emailInput, "Email is required.");
        isValid = false;
    }

    if (messageInput.value.trim() === "") {
        showError(messageInput, "Message is required.");
        isValid = false;
    }

    if (isValid) {
        alert("Form submitted successfully!");
        
    }
});
