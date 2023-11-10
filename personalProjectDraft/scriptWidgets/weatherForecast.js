// Fetch my API key from the config.js file
import { myWeatherAPIKey } from "./config.js";

// Fetch the weather data & pass it to the function to be displayed
function fetchWeatherData(cityName, apiKey) {
  // const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${myWeatherAPIKey}&units=metric`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => displayWeatherData(data))
    .catch((error) => console.log(error));
}

// Display the weather data on the web page
function displayWeatherData(weatherData) {
  console.table(weatherData);
  const weatherContainer = document.getElementById("weather-data");

  // Extract the desired information from the weatherData object
  const temperature = weatherData.main.temp;
  const weatherConditions = weatherData.weather[0].description;

  // Create HTML elements to display the data
  const cityElement = document.createElement("p");
  cityElement.textContent = `${cityName}`;

  const temperatureElement = document.createElement("h3");
  temperatureElement.textContent = `${Math.round(temperature)}°C`;

  const conditionsElement = document.createElement("p");
  conditionsElement.textContent = `${weatherConditions}`;

  // Append the elements to the weatherContainer
  weatherContainer.appendChild(cityElement);
  weatherContainer.appendChild(temperatureElement);
  weatherContainer.appendChild(conditionsElement);
}

//Specify the city for a weather forecast to be displayed
const cityName = "Bern"; // Replace with the desired city name

// Call the function to fetch weather data
fetchWeatherData(cityName, myWeatherAPIKey);
