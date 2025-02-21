// compilation du sass
import "../scss/main.scss";

// transpilation / import des comportements js de nos composants
import "./navbar.js";
import "./modal.js";

// gestion de la page groupe 

document.addEventListener("DOMContentLoaded", function () {
    const membersList = document.getElementById("membersList");
    const addMemberBtn = document.getElementById("addMemberBtn");

    // Fonction pour ajouter un membre
    function addMember() {
        // Création de l'élément li
        const li = document.createElement("li");
        li.classList.add("members__item");

        // Champ Nom
        const name = document.createElement("span");
        name.classList.add("members__name");
        name.textContent = `Utilisateur ${membersList.children.length + 1}`;

        // Dropdown des rôles
        const select = document.createElement("select");
        select.classList.add("members__role");
        select.innerHTML = `
            <option value="admin">Admin</option>
            <option value="editor">Editeur</option>
            <option value="viewer">Viewer</option>
        `;

        // Bouton Supprimer
        const removeBtn = document.createElement("button");
        removeBtn.classList.add("button", "button--danger", "remove-member");
        removeBtn.textContent = "Supprimer";

        // Suppression de la ligne au clic
        removeBtn.addEventListener("click", function () {
            li.remove();
        });

        // Ajout des éléments à la ligne
        li.appendChild(name);
        li.appendChild(select);
        li.appendChild(removeBtn);

        // Ajout de la ligne à la liste
        membersList.appendChild(li);
    }

    // Vérifier s'il n'y a pas déjà un écouteur d'événement pour éviter le double ajout
    if (!addMemberBtn.dataset.listener) {
        addMemberBtn.addEventListener("click", addMember);
        addMemberBtn.dataset.listener = "true"; // Empêche l'ajout multiple d'événements
    }

    // Ajout de l'event sur les boutons supprimer existants
    document.querySelectorAll(".remove-member").forEach((btn) => {
        btn.addEventListener("click", function () {
            btn.parentElement.remove();
        });
    });
});
