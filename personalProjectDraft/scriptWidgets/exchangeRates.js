const url =
  "https://currency-conversion-and-exchange-rates.p.rapidapi.com/latest?from=CHF&to=EUR%2CUSD%2CUAH";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "eab87c10cbmshc11c213cc0ca506p12eccajsnaa5165a2b052",
    "X-RapidAPI-Host": "currency-conversion-and-exchange-rates.p.rapidapi.com",
  },
};

async function fetchData() {
  try {
    const response = await fetch(url, options);
    const data = await response.json();

    // Access the conversion rates
    const rates = data.rates;
    const EURRate = rates.EUR;
    const USDRate = rates.USD;
    const UAHRate = rates.UAH;

    // Display the conversion rates on the web page
    const resultElement = document.getElementById("resultExchangeRates");
    resultElement.innerHTML = `
      <p>EUR: ${EURRate.toFixed(4)}</p>
      <p>USD: ${USDRate.toFixed(4)}</p>
      <p>UAH: ${UAHRate.toFixed(4)}</p>
    `;
  } catch (error) {
    console.error(error);
  }
}

fetchData();
