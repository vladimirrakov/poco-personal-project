// Fetch my API key from the config.js file
import { myExchangeRateAPIKey } from "./config.js";

const url =
  // "https://currency-conversion-and-exchange-rates.p.rapidapi.com/latest?from=EUR&to=CHF%2CUSD%2CUAH";
  
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": myExchangeRateAPIKey,
    "X-RapidAPI-Host": "currency-conversion-and-exchange-rates.p.rapidapi.com",
  },
};

async function fetchData() {
  try {
    const response = await fetch(url, options);
    const data = await response.json();

    // Access the conversion rates
    const rates = data.rates;
    const CHFRate = rates.CHF;
    const USDRate = rates.USD;
    const UAHRate = rates.UAH;

    // Display the conversion rates on the web page
    const resultElement = document.getElementById("resultExchangeRates");
    resultElement.innerHTML = `
      <p>CHF: ${CHFRate.toFixed(4)}</p>
      <p>USD: ${USDRate.toFixed(4)}</p>
      <p>UAH: ${UAHRate.toFixed(4)}</p>
    `;
  } catch (error) {
    console.error(error);
  }
}

fetchData();
