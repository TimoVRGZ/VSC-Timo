"use strict";

const Entrer = document.getElementById("inputText");
const Sortie = document.getElementById("result");

Entrer.addEventListener("input", () => {
    Sortie.textContent = Entrer.value;
});
