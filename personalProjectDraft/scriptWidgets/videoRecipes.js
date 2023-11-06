document
  .getElementById("buttonVideoRecipeSearch")
  .addEventListener("click", function () {
    // $(document).ready(function () {

    const recipeName = document.getElementById("recipeName").value;
    const ingredientsToInclude =
      document.getElementById("inclIngredients").value;
    const ingredientsToExclude =
      document.getElementById("exclIngredients").value;

    const settings = {
      async: true,
      crossDomain: true,
      url: `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/videos/search?query=${recipeName}&minLength=0&maxLength=999&number=3&includeingredients=${ingredientsToInclude}&excludeingredients=${ingredientsToExclude}&offset=0`,
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "eab87c10cbmshc11c213cc0ca506p12eccajsnaa5165a2b052",
        "X-RapidAPI-Host":
          "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      },
    };

    $.ajax(settings).done(function (response) {
      // Process the response and display the widget content
      const widgetContainer = document.getElementById(
        "recipe-widget-container"
      );

      response.videos.forEach(function (video) {
        // Create elements to display the video thumbnail and title
        const thumbnail = document.createElement("img");
        thumbnail.classList.add("video-thumbnail-img");
        thumbnail.src = video.thumbnail;
        thumbnail.alt = video.title;

        const title = document.createElement("h3");
        title.textContent = video.title;

        // Create a container for each video
        const videoContainer = document.createElement("div");
        videoContainer.classList.add("video-container");
        videoContainer.appendChild(thumbnail);
        videoContainer.appendChild(title);

        // Append the video container to the widget container
        widgetContainer.appendChild(videoContainer);
      });
    });
  });
