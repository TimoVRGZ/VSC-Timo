"use strict"; // Permet d'exécuter le code seulement s'il ne contient aucune erreur

function inputville() {
  let ville = document.getElementById('city').value;

  let api = "https://api.openweathermap.org/data/2.5/weather?q=" + ville + "&appid=8af61dd7c0d131d85518a306feb94a60";

  fetch(api)
    .then(response => {
      if (!response.ok) {
        throw new Error("Erreur HTTP : " + response.status);
      }
      return response.json();
    })
    .then(data => {
      let temperature = data.main.temp;
      let temperatureCelsius = Math.round(temperature - 273.15); // Conversion de Kelvin à Celsius
      document.getElementById('AffichageTemperature').textContent = temperatureCelsius + " C°";
      
      let humidite = data.main.humidity;
      document.getElementById('AffichageHumidite').textContent = humidite + "%";
      
      let vitesseVent = data.wind.speed;
      document.getElementById('AffichageVent').textContent = vitesseVent + " m/s";
      
      let iconid = data.weather[0].icon;
      let lienicone = "https://openweathermap.org/img/wn/" + iconid + "@2x.png";
      document.getElementById('iconemeteo').src = lienicone;
    })
    .catch(error => {
      console.error("Erreur lors de l'appel de l'API :", error);
    });
}
