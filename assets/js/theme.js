// Theme toggle logic
const toggleBtn = document.getElementById("theme-toggle");
const currentTheme = localStorage.getItem("theme");

// Apply saved theme on load
if (currentTheme === "light") {
    document.body.classList.add("light-mode");
    toggleBtn.textContent = "☀️";
}

// When button is clicked
toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        localStorage.setItem("theme", "light");
        toggleBtn.textContent = "☀️";
    } else {
        localStorage.removeItem("theme");
        toggleBtn.textContent = "🌙";
    }
});
