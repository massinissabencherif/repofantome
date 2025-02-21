document.addEventListener("DOMContentLoaded", (d) => {
  document.querySelectorAll(".navbar__button").forEach(function(n) {
    n.addEventListener("click", (l) => {
      const e = n.parentElement.querySelector("ul");
      e.classList.contains("active") ? (e.classList.remove("active"), e.style.height = 0) : (e.classList.add("active"), e.style.height = e.scrollHeight + "px");
    });
  });
});
document.addEventListener("DOMContentLoaded", () => {
  console.log("Le script modal.js est bien exécuté !");
  const d = document.querySelectorAll("[data-modal]"), n = document.querySelectorAll("[data-close]"), l = document.querySelectorAll(".modal");
  console.log(`Boutons d'ouverture détectés : ${d.length}`), console.log(`Modales détectées : ${l.length}`), d.forEach((e) => {
    e.addEventListener("click", () => {
      const t = e.getAttribute("data-modal"), o = document.getElementById(t);
      console.log(`Ouverture de la modale : ${t}`), o && (o.classList.add("modal--open"), o.setAttribute("aria-hidden", "false"));
    });
  }), n.forEach((e) => {
    e.addEventListener("click", () => {
      const t = e.closest(".modal");
      console.log(`Fermeture de la modale : ${t.id}`), t && (t.classList.remove("modal--open"), t.setAttribute("aria-hidden", "true"));
    });
  }), l.forEach((e) => {
    e.addEventListener("click", (t) => {
      t.target.classList.contains("modal__overlay") && (console.log(`Fermeture de la modale en cliquant sur l'overlay : ${e.id}`), e.classList.remove("modal--open"), e.setAttribute("aria-hidden", "true"));
    });
  });
});
document.addEventListener("DOMContentLoaded", function() {
  const d = document.getElementById("membersList"), n = document.getElementById("addMemberBtn");
  function l() {
    const e = document.createElement("li");
    e.classList.add("members__item");
    const t = document.createElement("span");
    t.classList.add("members__name"), t.textContent = `Utilisateur ${d.children.length + 1}`;
    const o = document.createElement("select");
    o.classList.add("members__role"), o.innerHTML = `
            <option value="admin">Admin</option>
            <option value="editor">Editeur</option>
            <option value="viewer">Viewer</option>
        `;
    const a = document.createElement("button");
    a.classList.add("button", "button--danger", "remove-member"), a.textContent = "Supprimer", a.addEventListener("click", function() {
      e.remove();
    }), e.appendChild(t), e.appendChild(o), e.appendChild(a), d.appendChild(e);
  }
  n.dataset.listener || (n.addEventListener("click", l), n.dataset.listener = "true"), document.querySelectorAll(".remove-member").forEach((e) => {
    e.addEventListener("click", function() {
      e.parentElement.remove();
    });
  });
});
