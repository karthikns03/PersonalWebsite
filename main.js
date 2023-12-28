document.addEventListener("DOMContentLoaded", function () {
  const secondHeading = document.querySelector(".second-heading");
  const contentContainer = document.querySelector(".content-container");

  secondHeading.addEventListener("animationend", function () {
    // Remove the second heading to make room for the paragraph
    secondHeading.style.display = "none";

    // Make the content container visible and apply the fadeInLeft animation
    contentContainer.style.animation = "fadeInLeft 3s ease-in-out forwards";
  });
});
