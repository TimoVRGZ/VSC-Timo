"use strict";

const input = document.getElementById("input");
const bouton = document.getElementById("bouton");
const Resultat = document.getElementById("Resultat");

bouton.addEventListener("click", () => {

    let nbEtages = parseInt(input.value, 10); // Atribue nbEtages à l'entré. Si l'entré n'est pas un nombre, atribue "NaN" (Not a Number)

    // Vérification si l'entré ne possaide bien que des chifres
    if (isNaN(nbEtages) || nbEtages <= 0) {
        alert("Veuillez entrer un nombre valide d'étages.");
        Resultat.classList.remove("show");
    }

    // Vérification du nombre d'étages (maximum 75)
    else if (nbEtages > 75) {
        alert("Le nombre d'étages ne peut pas dépasser 75.");
        Resultat.classList.remove("show");
    }

    else {
        Resultat.innerHTML = "<h2>Résultat</h2>"; // Vide la div
        
        // Génération de la pyramide
        for (let i = 0; i < nbEtages; i++) {
            let nbEspaces = nbEtages - i + 1;
            let nbEtoiles = i + 1;
            let ligne = '-'.repeat(nbEspaces) + ' * '.repeat(nbEtoiles) + '-'.repeat(nbEspaces);
            ligne = ligne.slice(1, -1) //garde tout saufe le 1er et le dernier "_"

            let Paragraphe = document.createElement("p");
            Paragraphe.textContent = ligne;
            Resultat.appendChild(Paragraphe);
        }
        // Ajoute la classe "show" pour afficher avec animation
        Resultat.classList.add("show");
    }
});
