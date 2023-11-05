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
