"use strict";

//declaration balises utilisées
const bouton = document.getElementById("bouton");
const Resultat = document.getElementById("Resultat");
const imgStand = document.getElementById("imgStand"); //image du stand
const nom_stand = document.getElementById("nom_stand"); //nom du stand

//liste des resultats possibles
const liste_stand = ["star_platinum", "the_world", "crazy_diamond", "killer_queen", "gold_experience", "king_crimson", "stone_free", "white_snake", "c_moon", "made_in_heaven"]

bouton.addEventListener("click", () => { //quand le bouton est cliquer:
    let nombre_stand = Math.floor(Math.random() * liste_stand.length ); //Associe "nombre_stand" à un nombre aléatoire entre 0 et (nombre de stand possible)
    nom_stand.textContent = liste_stand[nombre_stand].split("_").join(" "); //affiche le nom du stand en remplacent les "_" par des espaces
    imgStand.src = "img/" + liste_stand[nombre_stand] + ".png" //donne la source de l'image du stand

    Resultat.classList.add("show"); //afiche le resultat
});