// Fetch my API key from the config.js file
import { myChatGptBotAPIKey } from "./config.js";

const settings = {
  async: true,
  crossDomain: true,
  url: "https://chatgpt-ai-chat-bot.p.rapidapi.com/ask",
  method: "POST",
  headers: {
    "content-type": "application/json",
    "X-RapidAPI-Key": myChatGptBotAPIKey,
    "X-RapidAPI-Host": "chatgpt-ai-chat-bot.p.rapidapi.com",
  },
  processData: false,
};

document.getElementById("sendButton").addEventListener("click", function () {
  const query = document.getElementById("queryInput").value;
  settings.data = JSON.stringify({ query });
  $.ajax(settings).done(function ({ response, conversationId }) {
    console.log(conversationId);
    document.getElementById("responseOutput").textContent = response;
  });
});
