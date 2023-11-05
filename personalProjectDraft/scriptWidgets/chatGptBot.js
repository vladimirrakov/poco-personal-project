const settings = {
  async: true,
  crossDomain: true,
  url: "https://chatgpt-ai-chat-bot.p.rapidapi.com/ask",
  method: "POST",
  headers: {
    "content-type": "application/json",
    "X-RapidAPI-Key": "eab87c10cbmshc11c213cc0ca506p12eccajsnaa5165a2b052",
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
