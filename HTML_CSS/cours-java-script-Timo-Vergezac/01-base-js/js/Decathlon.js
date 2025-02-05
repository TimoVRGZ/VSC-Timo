"use strict"
console.log("Bienvenue chez Decathlon !");

let Nom_du_produit = "T-shirt Sport";
let Prix = 15.99;
let Stock_disponible = 50;

const AficherNomProduit = () => console.log("Le nom du produit est : " + Nom_du_produit);
const AficherPrix = () => console.log("Le prix du produit est : " + Prix);
const AficherStock = () => console.log("Le stock disponible est de : " + Stock_disponible);

AficherNomProduit();
AficherPrix();
AficherStock();

const CalculerReduction = (Prixinitial, Reduction) => (Prixinitial - Prixinitial / 100 * 20);

function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

function Vente(Nombre_de_vente) {
    sleep(2000).then(() => {
        
        console.log("Achat de " + Nombre_de_vente + " " + Nom_du_produit + " reussi!");
        Stock_disponible -= Nombre_de_vente;
        AficherStock();

        if (Stock_disponible < 10) {
            Prix = CalculerReduction(Prix, 20);
            console.log("Reduction de -20%");
            AficherPrix();

        }

        else {
            console.log("Aucune promotion disponible");
        }
    });
}