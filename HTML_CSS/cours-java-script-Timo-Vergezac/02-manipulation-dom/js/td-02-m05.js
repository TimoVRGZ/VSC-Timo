"use strict";

const mainElement = document.querySelector("main");
const bouton = document.getElementById("bouton");

let text_afficher = "Paragraphe ajouté grâce à unparamètre dynamique !";

function ajouterParagraphe(text) {
    let NewParagraphe = document.createElement("p");
    NewParagraphe.textContent = text;
    mainElement.appendChild(NewParagraphe);
}

bouton.addEventListener("click", () => {
    ajouterParagraphe(text_afficher)
});