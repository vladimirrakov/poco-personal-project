/* THIS JS FILE CONTAINS CODE FOR GENERAL FEATURES, SUCH AS:
- Welcome message for main page after user authentication
- Tabs and sorting of widgets
*/ 

/* Start of code for welcome message for main page 
after user authentication. First it retrieves a welcome message 
from the session and then displays it on the main page. */

var welcomeMessage = sessionStorage.getItem('welcomeMessage');
document.getElementById("welcome-message").textContent = welcomeMessage;

/* End of code for welcome message for main page after user authentication */

/* Start of code related to tabs and sorting of widgets */

document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".tab");
  const widgets = document.querySelectorAll(".widget");

  // Set "All" tab as active and highlighted by default
  tabs.forEach((tab) => {
    if (tab.getAttribute("data-category") === "all") {
      tab.classList.add("active");
    }
    tab.addEventListener("click", function () {
      const category = this.getAttribute("data-category");

      // Remove "active" class from all tabs
      tabs.forEach((tab) => tab.classList.remove("active"));

      // Add "active" class to the clicked tab
      this.classList.add("active");

      // Show or hide widgets based on the category
      widgets.forEach((widget) => {
        const widgetCategory = widget.getAttribute("data-category");
        if (category === "all" || category === widgetCategory) {
          widget.style.display = "block";
        } else {
          widget.style.display = "none";
        }
      });
    });
  });
});

/* End of code related to tabs and sorting of widgets */
