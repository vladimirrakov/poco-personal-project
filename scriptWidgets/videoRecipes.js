// Fetch my API key from the config.js file
import { myVideoRecipesAPIKey } from "./config.js";

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
        "X-RapidAPI-Key": myVideoRecipesAPIKey,
        "X-RapidAPI-Host":
          "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();

      // Create the widget container
      const resultsContainer = document.getElementById("results");
      resultsContainer.innerHTML = "";

      result.videos.forEach((video) => {
        // 1. Create a container to display a single recipe
        const recipeDiv = document.createElement("div");
        recipeDiv.classList.add("recipe");

        // 2. Create an image element for a video thumbnail
        const image = document.createElement("img");
        image.src = video.thumbnail;
        image.alt = video.title;
        recipeDiv.appendChild(image);

        // 3. Create an h3 element to display a video title
        const title = document.createElement("h3");
        title.textContent = video.title;
        recipeDiv.appendChild(title);

        // 4. Create an a element to display a link to a video on YouTube
        const link = document.createElement("a");
        link.href = `https://www.youtube.com/watch?v=${video.youTubeId}`;
        link.textContent = "Watch on YouTube";
        link.target = "_blank";
        recipeDiv.appendChild(link);

        // Finish!  Append the recipe container to the widget container
        resultsContainer.appendChild(recipeDiv);
      });
    } catch (error) {
      console.error(error);
    }
  });

// // Reload results when a new query is made
// const queryInput = document.getElementById("query");
// const includeIngredientsInput = document.getElementById("includeIngredients");
// const excludeIngredientsInput = document.getElementById("excludeIngredients");

// function reloadResults() {
//   queryInput.value = "";
//   includeIngredientsInput.value = "";
//   excludeIngredientsInput.value = "";

//   const resultsContainer = document.getElementById("results");
//   resultsContainer.innerHTML = "";
// }

// queryInput.addEventListener("input", reloadResults);
// includeIngredientsInput.addEventListener("input", reloadResults);
// excludeIngredientsInput.addEventListener("input", reloadResults);
