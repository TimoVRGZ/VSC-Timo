"use strict"; //empeche l'execution du code si il y'a des erreurs

//declaration des balises utilisées
const paragraphe = document.getElementById("paragraphe"); //p
const input = document.getElementById("phrase"); //input
const bouton = document.getElementById("bouton") //bouton
const Resultat = document.getElementById("Resultat") // div contenant les resultats

//l'event a pour bute d'afficher dans le paragraphe le/les mot(s) le(s) plus long de la phrase entré dans l'input :
bouton.addEventListener("click", () => { //execute le code qui suit quand la valeur de l'input change (quand on apuis sur enter)
    let mots = input.value.split(/[\s,.!?;:]+/); // Séparer les mots de la phrase en les met dans un Array[] apeler "mots", suprime egalement la ponctuation (espace, virgule, point...)

    let taille_mot_plus_long = 0; // crée la varialbe ou remet la taille du plus grand mot à 0 (car si non in garde les valeurs de l'ancienne phrase)
    let mots_plus_longs = [];   // créeation/réinisialisation de la variable. La variable est un Array[] (une liste de valeure ex: [pomme, 12, bonjour])

    for (const mot of mots) { // Cette prend 1 par 1 les mots de la phrase pour verifier si il est le plus grand
        let taille = mot.length; // taille du mot (nombre de character)

        if (taille > taille_mot_plus_long) { // Si le mot est plus grand que l'actuel plus grand mot, ce mot devien le plus grand mot
            taille_mot_plus_long = taille;
            mots_plus_longs = [mot];
        } else if (taille === taille_mot_plus_long) { // Si le mot fait la meme taille que le plus grand mot, la variable "mot_plus_long" ajoute  le mot à la liste (il y'a donc plusieur plus grand mot)
            mots_plus_longs.push(mot); // Ajouter ce mot à la liste
        }
    }
    
    // enlève le text si l'input est vide et envoie une alert
    if (taille_mot_plus_long < 1) {
        paragraphe.textContent = ""
        Resultat.classList.remove("show");
        alert("Entrez une phrase")
    }   
    else {
        // Ajuste la réponsse en fonction de si il y'a un ou plusieur grand nombre
        if (mots_plus_longs.length > 1) { // Si il y'en à plus de 1
            paragraphe.textContent = 'Les mots les plus longs sont : "' + mots_plus_longs.join(', ') + '" avec une longeur de ' + taille_mot_plus_long + '  lettres';
        } 
        else { // Si il y'en à 1
            paragraphe.textContent = 'Le mot le plus long est : "' + mots_plus_longs[0] + '" avec une longeur de ' + taille_mot_plus_long + ' lettres';
        }
        Resultat.classList.add("show");
    }
});
