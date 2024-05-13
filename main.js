const apiKey = "688077fcb523e41e1253910fc58a6702";
const cityInput = document.querySelector(".search input");
const test = document.querySelector(".search");
const serachBtn = document.querySelector(".search button");
test.addEventListener("submit", getDataWeather);
serachBtn.addEventListener("click", getDataWeather);

async function getDataWeather(event) {
  event.preventDefault();
  const urlApi = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${apiKey}&units=metric`;
  const respons = await fetch(urlApi)
    .then((response) => response.json())
    .then((data) => {
      const { main, name, weather, wind } = data;
      document.querySelector(".city").innerText = `${name}`;
      document.querySelector(".temp").innerText = `${Math.round(main.temp)}°C`;
      document.querySelector(".humidity").innerText = `${Math.round(
        main.humidity
      )} %`;
      document.querySelector(".wind").innerText = `${Math.round(
        wind.speed
      )}  Km/h`;
      switch (weather[0].main) {
        case "Clouds":
          document
            .querySelector(".weather img")
            .setAttribute("src", "images/clouds.png");
          break;
        case "Snow":
          document
            .querySelector(".weather img")
            .setAttribute("src", "images/snow.png");
          break;
        case "Rain":
          document
            .querySelector(".weather img")
            .setAttribute("src", "images/rain.png");
          break;
        case "Drizzle":
          document
            .querySelector(".weather img")
            .setAttribute("src", "images/drizzle.png");
          break;
        case "Thunderstorm":
          document
            .querySelector(".weather img")
            .setAttribute("src", "images/rain.png");
          break;
        case "Clear":
          document
            .querySelector(".weather img")
            .setAttribute("src", "images/clear.png");
          break;
        case "Mist":
          document
            .querySelector(".weather img")
            .setAttribute("src", "images/mist.png");
          break;
      }

      console.log(weather);
      cityInput.value = "";
      document.querySelector(".weather").style.display = "block";
    })
    .catch((error) => {
      if (error) {
        document.querySelector(".weather").style.display = "none";
        alert("Please enter valid city");
        cityInput.value = "";
      }
    });
}
