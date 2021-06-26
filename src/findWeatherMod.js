import { fillHtml } from "./fillHtmlMod";

const findWeather = async function (city = "New York") {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=6e751fc6e3699df7c2b3660247b0424c`
    );
    const WeatherDetails = await response.json();
    if (WeatherDetails["cod"] === "404") {
      console.log(WeatherDetails["message"]);
      const cityNotFound = document.body.querySelector(".cityNotFound");
      cityNotFound.textContent = WeatherDetails["message"];
    } else {
      const container = document.body.querySelector(".container");
      container.innerHTML = "";
      console.log(WeatherDetails);
      fillHtml(WeatherDetails);
    }
  } catch (error) {
    console.log(error);
  }
};

export { findWeather };
