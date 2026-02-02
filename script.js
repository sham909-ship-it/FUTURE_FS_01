document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    const successMessage = document.createElement("p");
    successMessage.textContent =
        "✅ Thank you for your message! I will get back to you soon.";
    successMessage.style.color = "#16a34a";
    successMessage.style.display = "none";
    successMessage.style.marginTop = "10px";

    form.appendChild(successMessage);

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        successMessage.style.display = "block";
        form.reset();

        setTimeout(() => {
            successMessage.style.display = "none";
        }, 3000);
    });
});
