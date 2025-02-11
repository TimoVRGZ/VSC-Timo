"use strict";
const ParentBouton = document.getElementById("parent")
const bouton = document.getElementById("bouton")

bouton.addEventListener("click", (event) => {
    alert("Clic sur le bouton !");
    event.stopPropagation();
    ajouterParagraphe();
});

ParentBouton.addEventListener("click", () => {
    alert("Clic sur le parent !");
});

