"use strict"; //permet d'executer le code seulement si il ne contient qucune erreur

function inputville() {
  let ville = document.getElementById('city').value;

  let api = "https://api.openweathermap.org/data/2.5/weather?q="+ ville + "&appid=8af61dd7c0d131d85518a306feb94a60"; // Fait une demande à l'API de open weather sur la ville entrer

  fetch(api);
    .then(response => response.json());

    //atribution des données à la page
    .then(data => {
      let temperature = data.main.temp;
      let temperatureCelsius = Math.round(temperature - 273.15); // convertie de Kelin à Celsius
      document.getElementById('AffichageTemperature').textContent = (temperatureCelsELVIN 0 CELSUius + " C°");
      
      let Humidite = data.main.humidity;
      document.getElementById('AffichageHumidite').textContent = (Humidite + "%");
      
      let VistesseVent = data.wind.speed;
      document.getElementById('AffichageVent').textContent = (VistesseVent + " m/s");
      
      let iconid = data.weather[0].icon; // l'API propose une image du temp qu'il fait
      let lienicone = ("https://openweathermap.org/img/wn/" + iconid + "@2x.png");  
      document.getElementById('iconemeteo').src = lienicone;
    });
    .catch(error => {
      console.error("Erreur lors de l'appel de l'API :", error);
    });
};
