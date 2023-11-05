document.addEventListener("DOMContentLoaded", function () {
    const translateButton = document.getElementById("translate-button");
    const inputText = document.getElementById("input-text");
    const translationResult = document.getElementById("translation-result");
  
    translateButton.addEventListener("click", function () {
      const settings = {
        async: true,
        crossDomain: true,
        url: "https://google-translate113.p.rapidapi.com/api/v1/translator/text",
        method: "POST",
        headers: {
          "content-type": "application/x-www-form-urlencoded",
          "X-RapidAPI-Key": "eab87c10cbmshc11c213cc0ca506p12eccajsnaa5165a2b052",
          "X-RapidAPI-Host": "google-translate113.p.rapidapi.com",
        },
        data: {
          from: "auto",
          to: "de",
          text: inputText.value,
        },
      };
  
      fetch(settings.url, {
        method: settings.method,
        headers: settings.headers,
        body: new URLSearchParams(settings.data).toString(),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          translationResult.textContent = data.trans;
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    });
  });
  