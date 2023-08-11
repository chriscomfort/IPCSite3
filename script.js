document.addEventListener("DOMContentLoaded", function() {
  var pastWork = document.getElementById("past-work");
  var subnav = document.querySelector(".subnav");
  var subnavLinks = document.querySelectorAll(".subnav a"); // Select subnav links

  pastWork.addEventListener("click", function(event) {
    event.preventDefault();
    subnav.classList.toggle("active");
  });

  // Handle subnav link clicks
  subnavLinks.forEach(function(link) {
    link.addEventListener("click", function(event) {
      event.preventDefault();
      var targetPage = link.getAttribute("href");
      window.location.href = targetPage;
    });
  });
});
