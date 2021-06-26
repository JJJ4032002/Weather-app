import { findWeather } from "./findWeatherMod";

const SearchBtn = document.body.querySelector(".searchBtn");

window.addEventListener("load", function (e) {
  findWeather();
});

SearchBtn.addEventListener("click", function (e) {
  const input = document.body.querySelector(".cityInput");
  if (input.value === "") {
    alert("Enter the city");
  } else if (isNaN(Number(input.value))) {
    const cityNotFound = document.body.querySelector(".cityNotFound");
    cityNotFound.textContent = "";
    findWeather(input.value);
  } else {
    alert("Enter only strings");
  }
});
