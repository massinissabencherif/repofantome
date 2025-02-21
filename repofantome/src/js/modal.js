document.addEventListener("DOMContentLoaded", () => {
    console.log("Le script modal.js est bien exécuté !");

    const openButtons = document.querySelectorAll("[data-modal]");
    const closeButtons = document.querySelectorAll("[data-close]");
    const modals = document.querySelectorAll(".modal");

    console.log(`Boutons d'ouverture détectés : ${openButtons.length}`);
    console.log(`Modales détectées : ${modals.length}`);

    openButtons.forEach(button => {
        button.addEventListener("click", () => {
            const modalId = button.getAttribute("data-modal");
            const modal = document.getElementById(modalId);
            console.log(`Ouverture de la modale : ${modalId}`);

            if (modal) {
                modal.classList.add("modal--open");
                modal.setAttribute("aria-hidden", "false");
            }
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener("click", () => {
            const modal = button.closest(".modal");
            console.log(`Fermeture de la modale : ${modal.id}`);

            if (modal) {
                modal.classList.remove("modal--open");
                modal.setAttribute("aria-hidden", "true");
            }
        });
    });

    modals.forEach(modal => {
        modal.addEventListener("click", (event) => {
            if (event.target.classList.contains("modal__overlay")) {
                console.log(`Fermeture de la modale en cliquant sur l'overlay : ${modal.id}`);
                modal.classList.remove("modal--open");
                modal.setAttribute("aria-hidden", "true");
            }
        });
    });
});


