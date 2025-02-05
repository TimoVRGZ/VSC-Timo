"use strict";

const input = document.getElementById("input");
const bouton = document.getElementById("bouton");

bouton.addEventListener("click", () => {
    let nbEtages = input.value

    for (let i = 1; i <= nbEtages; i++) {
        let nbEspaces = 
        let ligne = '_'.repeat(nbEspaces) + '*'.repeat(nbEtoiles) + '_'.repeat(nbEspaces);


        console.log(ligne);
    }
});