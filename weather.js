const API_KEY = "b2bd1b61ba8034340047eb2012088c03";

const COORDS = "coords";

function getWeather(lat, longt) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${longt}&appid=b2bd1b61ba8034340047eb2012088c03&units=metric`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      const weather = document.querySelector(".js-weather"),
        content = weather.querySelector("h3");
      content.innerText = `${json.main.temp.toFixed(1)}ºC @${json.name}`;
    });
}

function saveCoords(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleSuccess(location) {
  const coords = location.coords;
  const latitude = coords.latitude;
  const longitude = coords.longitude;
  const coordsObj = {
    latitude,
    longitude,
  };
  saveCoords(coordsObj);
  getWeather(latitude, longitude);
}

function handleFail() {
  console.log("Failed to get your location");
}

function askForLocation() {
  const location = navigator.geolocation.getCurrentPosition(
    handleSuccess,
    handleFail
  );
}

function init() {
  const location = JSON.parse(localStorage.getItem(COORDS));
  if (location === null) {
    askForLocation();
  } else {
    getWeather(location.latitude, location.longitude);
  }
}

init();
