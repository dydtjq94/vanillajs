const weather = document.querySelector(".js-weather");

const COORDS = "coords";
const API_KEY = "9309510a09ac96ae95f370d1060ddc70";

function getWeather(lat, lng) {
  //fetch 안에는 가져올 데이터가 들어가면됨
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      const temperature = json.main.temp;
      const place = json.name;
      const cloud = json.weather[0].description;
      console.log(json);
      weather.innerText = `${temperature} °C  
      ${place}  
      ${cloud}`;
    });
  //then은 함수를 하나 호출하는 것인데 데이터가 우리한테 넘어 왔을 떄 하는 것 데이터가 시간이 걸릴때가 있음
}

function saveCoords(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude: latitude,
    longitude: longitude,
  };
  saveCoords(coordsObj);
  getWeather(latitude, longitude);
}

function handleGeoError() {
  console.log("error!!!!!!!!!!!");
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords() {
  const loadedCoords = localStorage.getItem(COORDS);
  if (loadedCoords === null) {
    askForCoords();
  } else {
    const parseCoords = JSON.parse(loadedCoords);
    console.log(parseCoords);
    getWeather(parseCoords.latitude, parseCoords.longitude);
  }
}

function init() {
  loadCoords();
}

init();
