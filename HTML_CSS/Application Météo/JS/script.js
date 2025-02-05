"use strict"

function inputville() {
  let ville = document.getElementById('city').value;

  let api = "https://api.openweathermap.org/data/2.5/weather?q="+ ville + "&appid=8af61dd7c0d131d85518a306feb94a60";

  fetch(api)
    .then(response => response.json())
    .then(data => {
      let temperature = data.main.temp;
      let temperatureCelsius = Math.round(temperature - 273.15)
      document.getElementById('AffichageTemperature').textContent = (temperatureCelsius + " C°");
      let Humidite = data.main.humidity;
      document.getElementById('AffichageHumidite').textContent = (Humidite + "%");
      let VistesseVent = data.wind.speed;
      document.getElementById('AffichageVent').textContent = (VistesseVent + " m/s");
      let iconid = data.weather[0].icon;
      let lienicone = ("https://openweathermap.org/img/wn/" + iconid + "@2x.png");  
      document.getElementById('iconemeteo').src = lienicone;
    })
    .catch(error => {
      console.error("Erreur lors de l'appel de l'API :", error);
    });
}
