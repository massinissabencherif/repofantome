(function(n){typeof define=="function"&&define.amd?define(n):n()})(function(){"use strict";document.addEventListener("DOMContentLoaded",n=>{document.querySelectorAll(".navbar__button").forEach(function(o){o.addEventListener("click",l=>{const e=o.parentElement.querySelector("ul");e.classList.contains("active")?(e.classList.remove("active"),e.style.height=0):(e.classList.add("active"),e.style.height=e.scrollHeight+"px")})})}),document.addEventListener("DOMContentLoaded",()=>{console.log("Le script modal.js est bien exécuté !");const n=document.querySelectorAll("[data-modal]"),o=document.querySelectorAll("[data-close]"),l=document.querySelectorAll(".modal");console.log(`Boutons d'ouverture détectés : ${n.length}`),console.log(`Modales détectées : ${l.length}`),n.forEach(e=>{e.addEventListener("click",()=>{const t=e.getAttribute("data-modal"),d=document.getElementById(t);console.log(`Ouverture de la modale : ${t}`),d&&(d.classList.add("modal--open"),d.setAttribute("aria-hidden","false"))})}),o.forEach(e=>{e.addEventListener("click",()=>{const t=e.closest(".modal");console.log(`Fermeture de la modale : ${t.id}`),t&&(t.classList.remove("modal--open"),t.setAttribute("aria-hidden","true"))})}),l.forEach(e=>{e.addEventListener("click",t=>{t.target.classList.contains("modal__overlay")&&(console.log(`Fermeture de la modale en cliquant sur l'overlay : ${e.id}`),e.classList.remove("modal--open"),e.setAttribute("aria-hidden","true"))})})}),document.addEventListener("DOMContentLoaded",function(){const n=document.getElementById("membersList"),o=document.getElementById("addMemberBtn");function l(){const e=document.createElement("li");e.classList.add("members__item");const t=document.createElement("span");t.classList.add("members__name"),t.textContent=`Utilisateur ${n.children.length+1}`;const d=document.createElement("select");d.classList.add("members__role"),d.innerHTML=`
            <option value="admin">Admin</option>
            <option value="editor">Editeur</option>
            <option value="viewer">Viewer</option>
        `;const s=document.createElement("button");s.classList.add("button","button--danger","remove-member"),s.textContent="Supprimer",s.addEventListener("click",function(){e.remove()}),e.appendChild(t),e.appendChild(d),e.appendChild(s),n.appendChild(e)}o.dataset.listener||(o.addEventListener("click",l),o.dataset.listener="true"),document.querySelectorAll(".remove-member").forEach(e=>{e.addEventListener("click",function(){e.parentElement.remove()})})})});
