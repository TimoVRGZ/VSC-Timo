"use strict";

const Paragraphe = document.createElement("p");
Paragraphe.textContent = "Je suis un nouveau paragraphe !";

const mainElement = document.querySelector("main");
const bouton = document.getElementById("bouton");

bouton.addEventListener("click", (event) => {
    mainElement.appendChild(Paragraphe);
});
