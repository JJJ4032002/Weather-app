/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/fillHtmlMod.js":
/*!****************************!*\
  !*** ./src/fillHtmlMod.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fillHtml": () => (/* binding */ fillHtml)
/* harmony export */ });
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




/***/ }),

/***/ "./src/findWeatherMod.js":
/*!*******************************!*\
  !*** ./src/findWeatherMod.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "findWeather": () => (/* binding */ findWeather)
/* harmony export */ });
/* harmony import */ var _fillHtmlMod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fillHtmlMod */ "./src/fillHtmlMod.js");


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
      (0,_fillHtmlMod__WEBPACK_IMPORTED_MODULE_0__.fillHtml)(WeatherDetails);
    }
  } catch (error) {
    console.log(error);
  }
};




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _findWeatherMod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./findWeatherMod */ "./src/findWeatherMod.js");


const SearchBtn = document.body.querySelector(".searchBtn");

window.addEventListener("load", function (e) {
  (0,_findWeatherMod__WEBPACK_IMPORTED_MODULE_0__.findWeather)();
});

SearchBtn.addEventListener("click", function (e) {
  const input = document.body.querySelector(".cityInput");
  if (input.value === "") {
    alert("Enter the city");
  } else if (isNaN(Number(input.value))) {
    const cityNotFound = document.body.querySelector(".cityNotFound");
    cityNotFound.textContent = "";
    (0,_findWeatherMod__WEBPACK_IMPORTED_MODULE_0__.findWeather)(input.value);
  } else {
    alert("Enter only strings");
  }
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9maWxsSHRtbE1vZC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9maW5kV2VhdGhlck1vZC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0QsaUJBQWlCO0FBQ3JFOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnREFBZ0QsMkJBQTJCO0FBQzNFLCtDQUErQywyQkFBMkI7QUFDMUUsa0NBQWtDLGNBQWM7QUFDaEQ7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTs7QUFFQSx5Q0FBeUMsb0JBQW9CO0FBQzdEO0FBQ0EsNkNBQTZDLFVBQVU7QUFDdkQsR0FBRzs7QUFFSDtBQUNBOztBQUVBOztBQUVBLDhDQUE4Qyw0QkFBNEI7QUFDMUUsaURBQWlELDRCQUE0QjtBQUM3RTtBQUNBOztBQUVBLGlEQUFpRDtBQUNqRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBLDRDQUE0QztBQUM1QywrQkFBK0IsYUFBYTtBQUM1Qzs7QUFFQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBLDRDQUE0QztBQUM1QywrQkFBK0IsYUFBYTtBQUM1QztBQUNBLDRDQUE0QztBQUM1QztBQUNBO0FBQ0EsK0NBQStDO0FBQy9DO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBLDZDQUE2QztBQUM3QztBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVvQjs7Ozs7Ozs7Ozs7Ozs7OztBQ3BHcUI7O0FBRXpDO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRCxLQUFLO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxNQUFNLHNEQUFRO0FBQ2Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUV1Qjs7Ozs7OztVQ3ZCdkI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7QUNOK0M7O0FBRS9DOztBQUVBO0FBQ0EsRUFBRSw0REFBVztBQUNiLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLElBQUksNERBQVc7QUFDZixHQUFHO0FBQ0g7QUFDQTtBQUNBLENBQUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGZpbGxIdG1sKFdlYXRoZXJEZXRhaWxzKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXJcIik7XG4gIGxldCBXZWF0aGVyQ29uZGl0aW9uID0gV2VhdGhlckRldGFpbHMud2VhdGhlclswXVtcIm1haW5cIl07XG4gIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZCA9IFwiXCI7XG4gIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZCA9IGB1cmwoXCIuL2ltYWdlcy8ke1dlYXRoZXJDb25kaXRpb259LmpwZ1wiKWA7XG4gIGRvY3VtZW50LmJvZHkuc3R5bGVbXCJvYmplY3QtZml0XCJdID0gXCJjb250YWluXCI7XG5cbiAgZG9jdW1lbnQuYm9keS5zdHlsZVtcImJhY2tncm91bmQtcmVwZWF0XCJdID0gXCJuby1yZXBlYXRcIjtcblxuICBkb2N1bWVudC5ib2R5LnN0eWxlW1wibWluLWhlaWdodFwiXSA9IFwiMTAwJVwiO1xuICBkb2N1bWVudC5ib2R5LnN0eWxlW1wibWluLXdpZHRoXCJdID0gXCIxMDAlXCI7XG5cbiAgbGV0IFRlbXBJbkNlbGNpdXMgPSBXZWF0aGVyRGV0YWlscy5tYWluW1widGVtcFwiXTtcbiAgbGV0IGljb25JbWFnZSA9IFdlYXRoZXJEZXRhaWxzLndlYXRoZXJbMF1bXCJpY29uXCJdO1xuICBsZXQgY2l0eU5hbWUgPSBXZWF0aGVyRGV0YWlscy5uYW1lO1xuXG4gIGxldCB0ZW1wTWluVmFsdWUgPSBXZWF0aGVyRGV0YWlscy5tYWluW1widGVtcF9taW5cIl07XG4gIGxldCB0ZW1wTWF4VmFsdWUgPSBXZWF0aGVyRGV0YWlscy5tYWluW1widGVtcF9tYXhcIl07XG4gIGxldCB2aXNpYmlsaXR5VmFsdWUgPSBXZWF0aGVyRGV0YWlscy52aXNpYmlsaXR5O1xuICBsZXQgcHJlc3N1cmVWYWx1ZSA9IFdlYXRoZXJEZXRhaWxzLm1haW5bXCJwcmVzc3VyZVwiXTtcbiAgbGV0IGh1bWlkaXR5VmFsdWUgPSBXZWF0aGVyRGV0YWlscy5tYWluW1wiaHVtaWRpdHlcIl07XG4gIGxldCBDb3VudHJ5VmFsdWUgPSBXZWF0aGVyRGV0YWlscy5zeXNbXCJjb3VudHJ5XCJdO1xuXG4gIGNvbnN0IG1haW5XZWF0aGVyRGl2ID0gZWxlbWVudENyZWF0b3IoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiTWFpbldlYXRoZXJcIiB9KTtcbiAgY29uc3QgV2VhdGhlckhlYWRpbmcgPSBlbGVtZW50Q3JlYXRvcihcImgxXCIsIHsgY2xhc3NOYW1lOiBcInRlbXBIZWFkaW5nXCIgfSk7XG4gIFdlYXRoZXJIZWFkaW5nLnRleHRDb250ZW50ID0gYCR7VGVtcEluQ2VsY2l1c31DYDtcbiAgbWFpbldlYXRoZXJEaXYuYXBwZW5kQ2hpbGQoV2VhdGhlckhlYWRpbmcpO1xuICBjb25zdCBjaXR5SGVhZCA9IGVsZW1lbnRDcmVhdG9yKFwiaDNcIiwge30pO1xuICBjaXR5SGVhZC50ZXh0Q29udGVudCA9IGNpdHlOYW1lO1xuICBtYWluV2VhdGhlckRpdi5hcHBlbmRDaGlsZChjaXR5SGVhZCk7XG5cbiAgY29uc3QgaWNvbkRpdiA9IGVsZW1lbnRDcmVhdG9yKFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImljb25cIiB9KTtcbiAgY29uc3QgaWNvbiA9IGVsZW1lbnRDcmVhdG9yKFwiaW1nXCIsIHtcbiAgICBzcmM6IGBodHRwOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke2ljb25JbWFnZX1AMngucG5nYCxcbiAgfSk7XG5cbiAgaWNvbkRpdi5hcHBlbmRDaGlsZChpY29uKTtcbiAgbWFpbldlYXRoZXJEaXYuYXBwZW5kQ2hpbGQoaWNvbkRpdik7XG5cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1haW5XZWF0aGVyRGl2KTtcblxuICBjb25zdCBXZWF0aGVyQmxvY2sgPSBlbGVtZW50Q3JlYXRvcihcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJXZWF0aGVyQmxvY2tcIiB9KTtcbiAgY29uc3QgV2VhdGhlckJsb2NrSGVhZCA9IGVsZW1lbnRDcmVhdG9yKFwiaDJcIiwgeyBjbGFzc05hbWU6IFwiYmxvY2tIZWFkaW5nXCIgfSk7XG4gIFdlYXRoZXJCbG9ja0hlYWQudGV4dENvbnRlbnQgPSBcIldlYXRoZXIgRGV0YWlsc1wiO1xuICBXZWF0aGVyQmxvY2suYXBwZW5kQ2hpbGQoV2VhdGhlckJsb2NrSGVhZCk7XG5cbiAgY29uc3Qgd2VhdGhlckNvbnRIZWFkID0gZWxlbWVudENyZWF0b3IoXCJoMlwiLCB7fSk7XG4gIHdlYXRoZXJDb250SGVhZC50ZXh0Q29udGVudCA9IFwiV2VhdGhlciBDb25kaXRpb25cIjtcbiAgV2VhdGhlckJsb2NrLmFwcGVuZENoaWxkKHdlYXRoZXJDb250SGVhZCk7XG4gIGNvbnN0IHdlYXRoZXJDb250VGV4dCA9IGVsZW1lbnRDcmVhdG9yKFwicFwiLCB7fSk7XG4gIHdlYXRoZXJDb250VGV4dC50ZXh0Q29udGVudCA9IFdlYXRoZXJDb25kaXRpb247XG4gIFdlYXRoZXJCbG9jay5hcHBlbmRDaGlsZCh3ZWF0aGVyQ29udFRleHQpO1xuICBjb25zdCB0ZW1wTWluID0gZWxlbWVudENyZWF0b3IoXCJoMlwiLCB7fSk7XG4gIHRlbXBNaW4udGV4dENvbnRlbnQgPSBcIlRlbXAtbWluXCI7XG4gIFdlYXRoZXJCbG9jay5hcHBlbmRDaGlsZCh0ZW1wTWluKTtcbiAgY29uc3QgdGVtcE1pblRleHQgPSBlbGVtZW50Q3JlYXRvcihcInBcIiwge30pO1xuICB0ZW1wTWluVGV4dC50ZXh0Q29udGVudCA9IGAke3RlbXBNaW5WYWx1ZX1DYDtcbiAgV2VhdGhlckJsb2NrLmFwcGVuZENoaWxkKHRlbXBNaW5UZXh0KTtcblxuICBjb25zdCB0ZW1wTWF4ID0gZWxlbWVudENyZWF0b3IoXCJoMlwiLCB7fSk7XG4gIHRlbXBNYXgudGV4dENvbnRlbnQgPSBcIlRlbXAtbWF4XCI7XG4gIFdlYXRoZXJCbG9jay5hcHBlbmRDaGlsZCh0ZW1wTWF4KTtcbiAgY29uc3QgdGVtcE1heFRleHQgPSBlbGVtZW50Q3JlYXRvcihcInBcIiwge30pO1xuICB0ZW1wTWF4VGV4dC50ZXh0Q29udGVudCA9IGAke3RlbXBNYXhWYWx1ZX1DYDtcbiAgV2VhdGhlckJsb2NrLmFwcGVuZENoaWxkKHRlbXBNYXhUZXh0KTtcbiAgY29uc3QgdmlzaWJpbGl0eSA9IGVsZW1lbnRDcmVhdG9yKFwiaDJcIiwge30pO1xuICB2aXNpYmlsaXR5LnRleHRDb250ZW50ID0gXCJWaXNpYmlsaXR5XCI7XG4gIFdlYXRoZXJCbG9jay5hcHBlbmRDaGlsZCh2aXNpYmlsaXR5KTtcbiAgY29uc3QgdmlzaWJpbGl0eVRleHQgPSBlbGVtZW50Q3JlYXRvcihcInBcIiwge30pO1xuICB2aXNpYmlsaXR5VGV4dC50ZXh0Q29udGVudCA9IHZpc2liaWxpdHlWYWx1ZTtcbiAgV2VhdGhlckJsb2NrLmFwcGVuZENoaWxkKHZpc2liaWxpdHlUZXh0KTtcbiAgY29uc3QgcHJlc3N1cmUgPSBlbGVtZW50Q3JlYXRvcihcImgyXCIsIHt9KTtcbiAgcHJlc3N1cmUudGV4dENvbnRlbnQgPSBcIlByZXNzdXJlXCI7XG4gIFdlYXRoZXJCbG9jay5hcHBlbmRDaGlsZChwcmVzc3VyZSk7XG4gIGNvbnN0IHByZXNzdXJlVGV4dCA9IGVsZW1lbnRDcmVhdG9yKFwicFwiLCB7fSk7XG4gIHByZXNzdXJlVGV4dC50ZXh0Q29udGVudCA9IHByZXNzdXJlVmFsdWU7XG4gIFdlYXRoZXJCbG9jay5hcHBlbmRDaGlsZChwcmVzc3VyZVRleHQpO1xuICBjb25zdCBodW1pZGl0eSA9IGVsZW1lbnRDcmVhdG9yKFwiaDJcIiwge30pO1xuICBodW1pZGl0eS50ZXh0Q29udGVudCA9IFwiSHVtaWRpdHlcIjtcbiAgV2VhdGhlckJsb2NrLmFwcGVuZENoaWxkKGh1bWlkaXR5KTtcbiAgY29uc3QgaHVtaWRpdHlUZXh0ID0gZWxlbWVudENyZWF0b3IoXCJwXCIsIHt9KTtcbiAgaHVtaWRpdHlUZXh0LnRleHRDb250ZW50ID0gaHVtaWRpdHlWYWx1ZTtcbiAgV2VhdGhlckJsb2NrLmFwcGVuZENoaWxkKGh1bWlkaXR5VGV4dCk7XG4gIGNvbnN0IENvdW50cnkgPSBlbGVtZW50Q3JlYXRvcihcImgyXCIsIHt9KTtcbiAgQ291bnRyeS50ZXh0Q29udGVudCA9IFwiQ291bnRyeVwiO1xuICBXZWF0aGVyQmxvY2suYXBwZW5kQ2hpbGQoQ291bnRyeSk7XG4gIGNvbnN0IENvdW50cnlUZXh0ID0gZWxlbWVudENyZWF0b3IoXCJwXCIsIHt9KTtcbiAgQ291bnRyeVRleHQudGV4dENvbnRlbnQgPSBDb3VudHJ5VmFsdWU7XG4gIFdlYXRoZXJCbG9jay5hcHBlbmRDaGlsZChDb3VudHJ5VGV4dCk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChXZWF0aGVyQmxvY2spO1xufVxuXG5mdW5jdGlvbiBlbGVtZW50Q3JlYXRvcih0eXBlLCBwcm9wZXJ0aWVzKSB7XG4gIGxldCBlbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICBmb3IgKGxldCBwcm9wIGluIHByb3BlcnRpZXMpIHtcbiAgICBlbGVbcHJvcF0gPSBwcm9wZXJ0aWVzW3Byb3BdO1xuICB9XG4gIHJldHVybiBlbGU7XG59XG5cbmV4cG9ydCB7IGZpbGxIdG1sIH07XG4iLCJpbXBvcnQgeyBmaWxsSHRtbCB9IGZyb20gXCIuL2ZpbGxIdG1sTW9kXCI7XG5cbmNvbnN0IGZpbmRXZWF0aGVyID0gYXN5bmMgZnVuY3Rpb24gKGNpdHkgPSBcIk5ldyBZb3JrXCIpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5fSZ1bml0cz1tZXRyaWMmQVBQSUQ9NmU3NTFmYzZlMzY5OWRmN2MyYjM2NjAyNDdiMDQyNGNgXG4gICAgKTtcbiAgICBjb25zdCBXZWF0aGVyRGV0YWlscyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBpZiAoV2VhdGhlckRldGFpbHNbXCJjb2RcIl0gPT09IFwiNDA0XCIpIHtcbiAgICAgIGNvbnNvbGUubG9nKFdlYXRoZXJEZXRhaWxzW1wibWVzc2FnZVwiXSk7XG4gICAgICBjb25zdCBjaXR5Tm90Rm91bmQgPSBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoXCIuY2l0eU5vdEZvdW5kXCIpO1xuICAgICAgY2l0eU5vdEZvdW5kLnRleHRDb250ZW50ID0gV2VhdGhlckRldGFpbHNbXCJtZXNzYWdlXCJdO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyXCIpO1xuICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICBjb25zb2xlLmxvZyhXZWF0aGVyRGV0YWlscyk7XG4gICAgICBmaWxsSHRtbChXZWF0aGVyRGV0YWlscyk7XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgfVxufTtcblxuZXhwb3J0IHsgZmluZFdlYXRoZXIgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgZmluZFdlYXRoZXIgfSBmcm9tIFwiLi9maW5kV2VhdGhlck1vZFwiO1xuXG5jb25zdCBTZWFyY2hCdG4gPSBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNoQnRuXCIpO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgZnVuY3Rpb24gKGUpIHtcbiAgZmluZFdlYXRoZXIoKTtcbn0pO1xuXG5TZWFyY2hCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKFwiLmNpdHlJbnB1dFwiKTtcbiAgaWYgKGlucHV0LnZhbHVlID09PSBcIlwiKSB7XG4gICAgYWxlcnQoXCJFbnRlciB0aGUgY2l0eVwiKTtcbiAgfSBlbHNlIGlmIChpc05hTihOdW1iZXIoaW5wdXQudmFsdWUpKSkge1xuICAgIGNvbnN0IGNpdHlOb3RGb3VuZCA9IGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcihcIi5jaXR5Tm90Rm91bmRcIik7XG4gICAgY2l0eU5vdEZvdW5kLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICBmaW5kV2VhdGhlcihpbnB1dC52YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgYWxlcnQoXCJFbnRlciBvbmx5IHN0cmluZ3NcIik7XG4gIH1cbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==