document
  .getElementById("recipeForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const query = document.getElementById("query").value;
    const includeIngredients =
      document.getElementById("includeIngredients").value;
    const excludeIngredients =
      document.getElementById("excludeIngredients").value;

    const url = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/videos/search?query=${encodeURIComponent(
      query
    )}&minLength=0&maxLength=999&number=5&includeingredients=${encodeURIComponent(
      includeIngredients
    )}&excludeingredients=${encodeURIComponent(excludeIngredients)}&offset=0`;

    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "eab87c10cbmshc11c213cc0ca506p12eccajsnaa5165a2b052",
        "X-RapidAPI-Host":
          "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();

      const resultsContainer = document.getElementById("results");
      resultsContainer.innerHTML = "";

      result.videos.forEach((video) => {
        const recipeDiv = document.createElement("div");
        recipeDiv.classList.add("recipe");

        const image = document.createElement("img");
        image.src = video.thumbnail;
        recipeDiv.appendChild(image);

        const title = document.createElement("h3");
        title.textContent = video.title;
        recipeDiv.appendChild(title);

        const description = document.createElement("p");
        description.textContent = video.shortTitle;
        recipeDiv.appendChild(description);

        const link = document.createElement("a");
        link.href = video.youTubeUrl;
        link.textContent = "Watch on YouTube";
        recipeDiv.appendChild(link);

        resultsContainer.appendChild(recipeDiv);
      });
    } catch (error) {
      console.error(error);
    }
  });
