document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("toggle-theme");
    const currentTheme = localStorage.getItem("theme") || "light";

    // Appliquer le thème stocké
    document.documentElement.setAttribute("data-theme", currentTheme);
    if (currentTheme === "dark") {
        themeToggle.textContent = "☀️ Mode Clair";
    }

    // Changer le thème au clic
    themeToggle.addEventListener("click", function () {
        let theme = document.documentElement.getAttribute("data-theme");
        let newTheme = theme === "light" ? "dark" : "light";

        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme); // Sauvegarde dans le stockage local

        themeToggle.textContent = newTheme === "dark" ? "☀️ Mode Clair" : "🌙 Mode Sombre";
    });
});
