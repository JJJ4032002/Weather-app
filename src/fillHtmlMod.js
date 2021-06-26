function fillHtml(WeatherDetails) {
  const container = document.body.querySelector(".container");
  let WeatherCondition = WeatherDetails.weather[0]["main"];
  document.body.style.background = "";
  document.body.style.background = `url("./images/${WeatherCondition}.jpg")`;
  document.body.style["object-fit"] = "contain";

  document.body.style["background-repeat"] = "no-repeat";

  document.body.style["min-height"] = "100%";
  document.body.style["min-width"] = "100%";

  let TempInCelcius = WeatherDetails.main["temp"];
  let iconImage = WeatherDetails.weather[0]["icon"];
  let cityName = WeatherDetails.name;

  let tempMinValue = WeatherDetails.main["temp_min"];
  let tempMaxValue = WeatherDetails.main["temp_max"];
  let visibilityValue = WeatherDetails.visibility;
  let pressureValue = WeatherDetails.main["pressure"];
  let humidityValue = WeatherDetails.main["humidity"];
  let CountryValue = WeatherDetails.sys["country"];

  const mainWeatherDiv = elementCreator("div", { className: "MainWeather" });
  const WeatherHeading = elementCreator("h1", { className: "tempHeading" });
  WeatherHeading.textContent = `${TempInCelcius}C`;
  mainWeatherDiv.appendChild(WeatherHeading);
  const cityHead = elementCreator("h3", {});
  cityHead.textContent = cityName;
  mainWeatherDiv.appendChild(cityHead);

  const iconDiv = elementCreator("div", { className: "icon" });
  const icon = elementCreator("img", {
    src: `http://openweathermap.org/img/wn/${iconImage}@2x.png`,
  });

  iconDiv.appendChild(icon);
  mainWeatherDiv.appendChild(iconDiv);

  container.appendChild(mainWeatherDiv);

  const WeatherBlock = elementCreator("div", { className: "WeatherBlock" });
  const WeatherBlockHead = elementCreator("h2", { className: "blockHeading" });
  WeatherBlockHead.textContent = "Weather Details";
  WeatherBlock.appendChild(WeatherBlockHead);

  const weatherContHead = elementCreator("h2", {});
  weatherContHead.textContent = "Weather Condition";
  WeatherBlock.appendChild(weatherContHead);
  const weatherContText = elementCreator("p", {});
  weatherContText.textContent = WeatherCondition;
  WeatherBlock.appendChild(weatherContText);
  const tempMin = elementCreator("h2", {});
  tempMin.textContent = "Temp-min";
  WeatherBlock.appendChild(tempMin);
  const tempMinText = elementCreator("p", {});
  tempMinText.textContent = `${tempMinValue}C`;
  WeatherBlock.appendChild(tempMinText);

  const tempMax = elementCreator("h2", {});
  tempMax.textContent = "Temp-max";
  WeatherBlock.appendChild(tempMax);
  const tempMaxText = elementCreator("p", {});
  tempMaxText.textContent = `${tempMaxValue}C`;
  WeatherBlock.appendChild(tempMaxText);
  const visibility = elementCreator("h2", {});
  visibility.textContent = "Visibility";
  WeatherBlock.appendChild(visibility);
  const visibilityText = elementCreator("p", {});
  visibilityText.textContent = visibilityValue;
  WeatherBlock.appendChild(visibilityText);
  const pressure = elementCreator("h2", {});
  pressure.textContent = "Pressure";
  WeatherBlock.appendChild(pressure);
  const pressureText = elementCreator("p", {});
  pressureText.textContent = pressureValue;
  WeatherBlock.appendChild(pressureText);
  const humidity = elementCreator("h2", {});
  humidity.textContent = "Humidity";
  WeatherBlock.appendChild(humidity);
  const humidityText = elementCreator("p", {});
  humidityText.textContent = humidityValue;
  WeatherBlock.appendChild(humidityText);
  const Country = elementCreator("h2", {});
  Country.textContent = "Country";
  WeatherBlock.appendChild(Country);
  const CountryText = elementCreator("p", {});
  CountryText.textContent = CountryValue;
  WeatherBlock.appendChild(CountryText);
  container.appendChild(WeatherBlock);
}

function elementCreator(type, properties) {
  let ele = document.createElement(type);
  for (let prop in properties) {
    ele[prop] = properties[prop];
  }
  return ele;
}

export { fillHtml };
