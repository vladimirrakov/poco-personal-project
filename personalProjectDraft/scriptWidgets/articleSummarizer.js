document.getElementById("summarize-btn").addEventListener("click", function () {
  const articleUrl = document.getElementById("article-url").value;
  const language = document.getElementById("language").value;

  const settings = {
    async: true,
    crossDomain: true,
    url: `https://article-extractor-and-summarizer.p.rapidapi.com/summarize?url=${encodeURIComponent(
      articleUrl
    )}&length=3&lang=${language}`,
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "eab87c10cbmshc11c213cc0ca506p12eccajsnaa5165a2b052",
      "X-RapidAPI-Host": "article-extractor-and-summarizer.p.rapidapi.com",
    },
  };

  fetch(settings.url, {
    method: settings.method,
    headers: settings.headers,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      // Display the summarized article in the HTML
      document.getElementById("articleSummary").textContent = data.summary;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
