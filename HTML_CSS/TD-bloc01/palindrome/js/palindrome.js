"use strict"; //empeche l'execution du code si il y'a des erreurs

//declaration des balises utilisées
const input = document.getElementById("input"); //input
const bouton = document.getElementById("bouton"); //bouton
const Resultat = document.getElementById("Resultat"); //div contenant les resultats
const resultat_mot_saisi = document.getElementById("resultat_mot_saisi"); //p qui affiche le mot saisi
const resultat_mot_revers = document.getElementById("resultat_mot_revers"); //p qui affiche le mot inversé
const resultat_palindrome = document.getElementById("resultat_palindrome"); //p qui dit si le mot est un palindrome

// Enlève la classe "show" pour masquer #Resultat
Resultat.classList.remove("show");

bouton.addEventListener("click", () => { // quand le bouton est cliquer :
    let mot = input.value; 
    let mot_revers = mot.split("").reverse().join(""); //mo_revers prend le mot inversé

    // regarde si il y à bien du text
    if (mot.length < 1){
        alert("Veuillez entrer un mot");
        Resultat.classList.remove("show"); // Enlève la classe 'show' pour masquer Resultat

    // regarde si les charactère entrée sont bien des lettres (lettres fraçaise comprise)
    } else if (/^[A-Za-zéèêëîïôöùûüçàâä]+$/.test(mot) === false) {
        alert("Veuillez entrer seulement des lettres");
        Resultat.classList.remove("show"); // Enlève la classe "show" pour masquer Resultat

    //atribue les variables au sorties
    } else {
        resultat_mot_saisi.textContent = "Mot saisi : " + mot.toUpperCase();
        resultat_mot_revers.textContent = "A l'envers : " + mot_revers.toUpperCase();

        // regarde si le mot est un palindrome et renvoie la réponsse
        if (mot.toLowerCase() === mot_revers.toLowerCase()) {
            resultat_palindrome.textContent = "Ce mot est un palindrome";
            resultat_palindrome.style.color = "green"
        } else {
            resultat_palindrome.textContent = "Ce mot n'est pas un palindrome";
            resultat_palindrome.style.color = "red"
        }
        // Ajout de la classe "show" pour faire apparaître la div Resultat avec animation
        Resultat.classList.add("show");
    }
});
